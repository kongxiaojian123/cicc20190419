import axios from './config.axios';
import urlData from './config.url';
longTapSaveImage();
if (!window.CustomEvent) {
    window.CustomEvent = function(type, config) {
        config = Object.assign({ bubbles: false, cancelable: false, detail: undefined},config);
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, config.bubbles, config.cancelable, config.detail);
        return e;
    };
    window.CustomEvent.prototype = window.Event.prototype;
}
if(window.HTMLInputElement&&window.HTMLElement){
    try {
        const filterEvent = new CustomEvent("filter");
        window.HTMLInputElement.prototype.addEventListener = function(type,...arg){
            if(type==='filter'){
                this.onblur = function(e){
                    if(this.value){
                        axios.post(urlData.mgcInfo, {data: this.value}).then(({data}) => {
                            //doSomething
                            if(data.retCode==1&data.retData){
                                alert('输入的内容包含敏感词呦~，换一个试试~');
                                this.value ='';
                                return;
                            }
                            this.dispatchEvent(filterEvent);
                        }).catch(()=>{
                            this.dispatchEvent(filterEvent);
                        });
                    }
                };
            }
            window.HTMLElement.prototype.addEventListener.call(this,type,...arg);
        }
        if(window.HTMLTextAreaElement)window.HTMLTextAreaElement.prototype.addEventListener = window.HTMLInputElement.prototype.addEventListener;
    }catch (e) {}
}
function longTapSaveImage() {
    let touch = null;
    document.documentElement.addEventListener('touchstart',(ev)=>{
        if(ev.changedTouches.length===1&&ev.touches.length<=1&&ev.target.tagName==='IMG'){
            touch = {
                pageX:ev.changedTouches[0].pageX,
                pageY:ev.changedTouches[0].pageY,
                time:(new Date()).getTime(),
            };
        }else{
            touch = null;
        }
    });
    document.documentElement.addEventListener('touchmove',touchEvent);
    document.documentElement.addEventListener('touchend',(ev)=>{
        touchEvent(ev);
        if(touch){
            const time = (new Date()).getTime();
            if(time-touch.time>=800){
                //长安保存监听
                const project = location.pathname.replace(/\/web\//,'').split('/')[0];
                window.neteaseTracker&&window.neteaseTracker(false,`http://minisite.click.163.com/${project}/longTapSaveImage`, '长按保存', 'minisiteclick');
            }
        }
    });
    function touchEvent(ev) {
        if(ev.changedTouches.length===1&&ev.touches.length<=1&&touch){
            const _touch = {
                pageX:ev.changedTouches[0].pageX,
                pageY:ev.changedTouches[0].pageY,
            };
            if(Math.hypot(_touch.pageX-touch.pageX,_touch.pageY-touch.pageY)>5){
                touch = null;
            }
        }else{
            touch = null;
        }
    }
}
