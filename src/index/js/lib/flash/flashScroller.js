/*
用法
    1.此scroller会继承flash.js,所以不必引入flash.js,直接引入此js即可，用法请看flash.js
    2.提供onUpdate方法并传入当前帧，会在更新帧时调用（声音控制可以用这个事件）
    3.默认y轴滑动，想要修改,添加第三个参数
        const flash = new Flash(canvas,assets,{
            scroll: 'y',//touch方向（相对于flash来说）
            autoplay:false,//是否自动播放
        })
    --------------------------------
        scroll 值
            +y或y   flash中y轴正方向
            -y      flash中y轴反方向
            +x或x   flash中x轴正方向
            -x      flash中x轴反方向
    4.可以动态修改3中所述参数
        例：flash.options.autoplay = true;
    5.手动跳到对应帧
        例 flash.currentFrame = 0;
    6.速度调节 flash中fps可以调节
*/
import Flash from "./flash";
export default class FlashScroller extends Flash{
    constructor(...a){
        super(...a);
    }
    createStage(...a){
        super.createStage(...a);
        this.initScroll();
        this.setTimeCtr();
        this.setTouch();
    }
    initScroll(){
        this.touchFlag = false;
        this.pause = false;
        this.initSpeed = this.lib.properties.fps/100;
        this.options.scroll = this.options.scroll ||'y';
        this.options.autoplay = this.options.autoplay ||false;
    }
    setTimeCtr(){
        const _this = this;
        this.timeCtr={
            _current:0,
            _timer:null,
            funLock:false,
            endFrame:0,//预定的frame
            get currentFrame(){
                return this._current;
            },
            set currentFrame(frame){
                if(frame>_this.exportRoot.totalFrames-1){
                    frame = _this.exportRoot.totalFrames-1;
                    this.endFrame = _this.exportRoot.totalFrames-1;
                }else if(frame<0){
                    frame = 0;
                    this.endFrame = 0;
                }
                if(_this.exportRoot.currentFrame!=frame){
                    const _currentFrame = Math.floor(_this.exportRoot.currentFrame);
                    const _frame = Math.floor(frame);
                    if(_currentFrame!=_frame&&!_this.timeCtr.funLock){
                        for(let i = Math.min(_currentFrame,_frame);i<=Math.max(_currentFrame,_frame);i++){
                            const frameFun = _this.exportRoot['frame_'+i];
                            if(frameFun&&!frameFun.locked){
                                frameFun.locked = true;
                                frameFun.call(_this.exportRoot);
                                setTimeout(()=>{
                                    frameFun.locked = false;
                                },200*_this.options.speed);
                            }
                        }
                    }
                    _this.exportRoot.gotoAndStop(frame);
                }
                this._current = frame;
                _this.onUpdate&&_this.onUpdate(frame);
            }
        };
        this.exportRoot.gotoAndStop(this.timeCtr.currentFrame);
        const timeCtr = this.timeCtr;
        let oldFrameTime = 0;
        const fps = 1000/60;
        const requestAnimationFrame = window.requestAnimationFrame||window.webkitRequestAnimationFrame;
        updateTime();
        function updateTime(time){
            let timeScale = 1;
            if(time){
                timeScale = Math.min((time-oldFrameTime)/fps,4);
                oldFrameTime = time;
            }
            if(timeCtr.currentFrame != timeCtr.endFrame){
                if(_this.pause){
                    _this.currentFrame = timeCtr.currentFrame;
                }else{
                    const offsetFrame = timeCtr.endFrame-timeCtr.currentFrame;
                    if(Math.abs(offsetFrame)<.01){
                        timeCtr.currentFrame = timeCtr.endFrame;
                    }else{
                        let c_offsetFrame = offsetFrame/25*timeScale;
                        timeCtr.currentFrame += c_offsetFrame;
                    }
                }
            }
            if(_this.options.autoplay&&(!_this.touchFlag)&&(!_this.pause)){
                timeCtr.endFrame += _this.initSpeed;
            }
            timeCtr._timer = requestAnimationFrame(updateTime);
        }
    }
    destroy(){
        super.destroy();
        if(this.timeCtr){
            const cancelAnimationFrame = window.cancelAnimationFrame||window.webkitCancelAnimationFrame;
            cancelAnimationFrame(this.timeCtr._timer);
        }
    }
    setTouch(){
        const _this = this;
        const stageAspectRatio = this.lib.properties.width/this.lib.properties.height;
        let oldPos = null;
        let touchTimer = null;
        let speedScale = _this.initSpeed*.75;
        function resetSpeedScale(){
            clearTimeout(touchTimer);
            speedScale*=1.1;
            touchTimer = setTimeout(() => {
                speedScale = _this.initSpeed*.75;
            }, 300);
        }
        this.canvas.addEventListener('touchstart',(ev)=>{
            if(ev.touches.length>1||this.pause)return;
            this.touchFlag = true;
            oldPos = {
                x:ev.changedTouches[0].pageX,
                y:ev.changedTouches[0].pageY
            };
            resetSpeedScale();
        });
        this.canvas.addEventListener('touchmove',(ev)=>{
            if(ev.touches.length>1||this.pause)return;
            this.touchFlag = true;
            const currentPos = {
                x:ev.changedTouches[0].pageX,
                y:ev.changedTouches[0].pageY
            };
            const [scroll,direction] = getScroll();
            const offset = direction*(currentPos[scroll]-oldPos[scroll]);
            this.timeCtr.endFrame-=offset*speedScale;
            oldPos = currentPos;
        });
        this.canvas.addEventListener('touchend',()=>{
            this.touchFlag = false;
        });
        function getScroll() {
            const direction = _this.options.scroll.indexOf('x')>=0?'x':'y';
            const scroll = [direction,1];
            if(_this.options.scroll.indexOf('-')>=0){
                scroll[1] = -1;
            }
            const canvasAspectRatio = _this.screen.screenWidth/_this.screen.screenHeight;
            if(canvasAspectRatio>1&&stageAspectRatio<=1||canvasAspectRatio<=1&&stageAspectRatio>1){
                if(direction === 'y') scroll[0] = 'x';
                else  scroll[0] = 'y';
            }
            return scroll;
        }
    }
    get currentFrame(){
        return this.timeCtr.currentFrame;
    }
    set currentFrame(val){
        this.timeCtr.funLock = true;
        this.timeCtr.currentFrame = this.timeCtr.endFrame = val;
        this.timeCtr.funLock = false;
    }
}
