/*
用法
    注：flash大小为640*1200 或 750*1406
    1.html中引用createJS
    2.flash 导出的js中会引用全局变量 AdobeAn ，所以在html中 注册AdobeAn  -> var AdobeAn
    3.本js中引用 flash导出的js
    4.用法
        import Flash from './flash';
        //...
        new Flash(canvas,assets,options);//因为要修正图片路径 所以要传assets资源
            options ->{
                webgl:false  //webGL渲染
            }
    5.Flash提供ready Promise方法，已确认flash是否准备好，取消之前的onReady回调方式
        flash.ready.then(stage=>{...});
    6.stage添加onResize 会在stage.viewport 更新后执行，viewport用于像logo等相对于屏幕有固定偏移量的元素做定位参考用的
*/
import '../../game';//flash 导出的js
let screen;
const focalLength = 528.25;
let MIN_HEIGHT,MAX_HEIGHT;
export default class Flash{
    static getProjectionMatrix(container,totalDepth,lib){
        const projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
        const scale = (totalDepth + focalLength)/focalLength;
        const scaleMat = new createjs.Matrix2D;
        scaleMat.a = 1/scale;
        scaleMat.d = 1/scale;
        let projMat = new createjs.Matrix2D;
        projMat.tx = -projectionCenter.x;
        projMat.ty = -projectionCenter.y;
        projMat = projMat.prependMatrix(scaleMat);
        projMat.tx += projectionCenter.x;
        projMat.ty += projectionCenter.y;
        return projMat;
    }
    static setHeightLimit({width,height}){
        const ratio = Math.min(width,height)/640;
        MIN_HEIGHT = ratio*950;
        MAX_HEIGHT = ratio*1200;
    }
    constructor(canvas,assets,options={}){
        screen = {};
        this.options = options;
        if(this.options.composition){
            this.composition = window.AdobeAn.compositions[this.options.composition];
        }else{
            this.composition = window.AdobeAn.compositions[Object.keys(window.AdobeAn.compositions)[0]];
        }
        this.lib = this.composition.getLibrary();
        Flash.setHeightLimit(this.lib.properties);
        this.canvas = canvas;
        this.canvas.style.backgroundColor = this.lib.properties.color;
        this.ready = new Promise(resolve => {
            if(this.lib.properties.manifest.length){
                const images=this.composition.getImages();
                let loadFlag = false;
                this.lib.properties.manifest.forEach(item=>{
                    try {
                        item.type=createjs.Types.IMAGE;
                    }catch (e) {
                        item.type='image';
                    }
                    if(typeof assets ==='object'){
                        const id = item.id+'.' + item.src.match(/.(png|jpg)$/)[1];
                        item.src = assets[id].src;
                        images[item.id] = assets[id];
                    }else{
                        loadFlag = true;
                        const keys = assets.keys();
                        if(keys.includes(`./${item.id}.png`)){
                            item.src = assets(`./${item.id}.png`);
                        }else if(keys.includes(`./${item.id}.jpg`)){
                            item.src = assets(`./${item.id}.jpg`);
                        }
                    }
                });
                if(loadFlag){
                    const loader = new createjs.LoadQueue(false);
                    loader.addEventListener("fileload", evt=>{
                        if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
                    });
                    loader.addEventListener("complete", evt=>{
                        this.createStage(evt);
                        resolve(this.stage);
                    });
                    loader.loadManifest(this.lib.properties.manifest);
                }else{
                    this.createStage();
                    resolve(this.stage);
                }
            }else{
                this.createStage();
                resolve(this.stage);
            }
        });
    }
    createStage(evt){
        const ssMetadata = this.lib.ssMetadata;
        if(evt){
            const spriteSheet = this.composition.getSpriteSheet();
            const queue = evt.target;
            for(let i=0; i<ssMetadata.length; i++) {
                spriteSheet[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
            }
        }
        const game = this.options.game?this.options.game:'game';
        this.exportRoot = new this.lib[game]();
        this.composition.getStage = ()=> { return this.exportRoot.getStage();};
        this.exportRoot.___sortFunction___ = (obj1,obj2)=>{
		    return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
        };
        if(this.options.webgl&&createjs.StageGL){
            this.stage = new createjs.StageGL(this.canvas,{
                transparent:false
            });
        } else{
            this.stage = new this.lib.Stage(this.canvas);
        }
        this.stage.regX = this.lib.properties.width/2;
        this.stage.regY = this.lib.properties.height/2;
        this.resize();
        window.AdobeAn.compositionLoaded(this.lib.properties.id);

        this.stage.addChild(this.exportRoot);
        this.destroy();
        createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
        createjs.Ticker.setFPS(this.lib.properties.fps);
        createjs.Ticker.addEventListener("tick", this.stage);
        // 透视功能
        this.stage.addEventListener("tick", ()=>{
            this.setCameraMatrix();
        });
    }
    setCameraMatrix(){
        const applyLayerZDepth = (parent)=>{
            const cameraInstance = parent.___camera___instance;
            const projectionCenter = { 'x' : 0, 'y' : 0};
            if(parent === this.exportRoot) {
                projectionCenter.x = this.lib.properties.width/2;
                projectionCenter.y = this.lib.properties.height/2;
            }
            for(let child in parent.children) {
                var layerObj = parent.children[child];
                if(layerObj == cameraInstance) continue;
                applyLayerZDepth(layerObj, cameraInstance);
                if(layerObj.layerDepth === undefined) continue;
                if(layerObj.currentFrame != layerObj.parent.currentFrame) {
                    layerObj.gotoAndPlay(layerObj.parent.currentFrame);
                }
                const matToApply = new createjs.Matrix2D;
                let cameraMat = new createjs.Matrix2D;
                let totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
                let cameraDepth = 0;
                if(cameraInstance && !layerObj.isAttachedToCamera) {
                    const mat = cameraInstance.getMatrix();
                    mat.tx -= projectionCenter.x;
                    mat.ty -= projectionCenter.y;
                    cameraMat = mat.invert();
                    cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
                    cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
                    if(cameraInstance.depth)
                        cameraDepth = cameraInstance.depth;
                }
                if(layerObj.depth) {
                    totalDepth = layerObj.depth;
                }
                //Offset by camera depth
                totalDepth -= cameraDepth;
                if(totalDepth < -focalLength) {
                    matToApply.a = 0;
                    matToApply.d = 0;
                } else {
                    if(layerObj.layerDepth) {
                        const sizeLockedMat = Flash.getProjectionMatrix(parent, layerObj.layerDepth,this.lib);
                        if(sizeLockedMat) {
                            sizeLockedMat.invert();
                            matToApply.prependMatrix(sizeLockedMat);
                        }
                    }
                    matToApply.prependMatrix(cameraMat);
                    const projMat = Flash.getProjectionMatrix(parent, totalDepth,this.lib);
                    if(projMat) {
                        matToApply.prependMatrix(projMat);
                    }
                }
                layerObj.transformMatrix = matToApply;
            }
        };
        const cameraInstance = this.exportRoot.___camera___instance;
        if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
        {
            cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
            cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
            if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
                cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
        }
        applyLayerZDepth(this.exportRoot);
    }
    destroy(){
        createjs.Ticker.removeAllEventListeners("tick");
    }
    resize(){
        const canvasAspectRatio = this.screen.innerWidth/this.screen.innerHeight;
        const stageAspectRatio = this.lib.properties.width/this.lib.properties.height;
        if(canvasAspectRatio>1&&stageAspectRatio>1||canvasAspectRatio<=1&&stageAspectRatio<=1){
            this.stage.rotation = 0;
        }else{
            if(stageAspectRatio>1){
                this.stage.rotation = 90;
            }else{
                this.stage.rotation = -90;
            }
        }
        this.canvas.width = this.screen.screenWidth;
        this.canvas.height = this.screen.screenHeight;
        if(this.stage.isWebGL){
            this.stage.updateViewport(this.canvas.width,this.canvas.height);
        }
        this.stage.x = this.screen.screenWidth/2;
        this.stage.y = this.screen.screenHeight/2;
        const vmax = Math.max(this.screen.screenWidth,this.screen.screenHeight);
        if(stageAspectRatio>1){
            const left = (this.lib.properties.width-vmax)/2;
            this.stage.viewport = {
                left:left,
                top:0,
                right:left+vmax,
                bottom:this.lib.properties.height
            };
        }else{
            const top = (this.lib.properties.height-vmax)/2;
            this.stage.viewport = {
                left:0,
                top:top,
                right:this.lib.properties.width,
                bottom:top+vmax
            };
        }
        this.stage.onResize&&this.stage.onResize();
    }
    get screen(){
        if(!Object.keys(screen).length){
            const setScreen = () => {
                screen.innerWidth = window.innerWidth;
                screen.innerHeight = window.innerHeight;
                const aspectRatio = screen.innerWidth/screen.innerHeight;
                const vmin = Math.min(this.lib.properties.height,this.lib.properties.width);
                if(aspectRatio>1){
                    //屏幕横向
                    screen.stageScale = screen.innerHeight/vmin;
                    screen.screenWidth = Math.max(Math.min(screen.innerWidth/screen.stageScale,MAX_HEIGHT),MIN_HEIGHT);
                    screen.screenHeight = screen.innerHeight/screen.stageScale;
                }else{
                    //屏幕纵向
                    screen.stageScale = screen.innerWidth/vmin;
                    screen.screenWidth = screen.innerWidth/screen.stageScale;
                    screen.screenHeight = Math.max(Math.min(screen.innerHeight/screen.stageScale,MAX_HEIGHT),MIN_HEIGHT);
                }
            };
            setScreen();
            let timer = null;
            window.addEventListener('orientationchange',()=>{
                clearTimeout(timer);
                timer = setTimeout(()=>{
                    setScreen();
                    this.resize();
                },200);
            });
        }
        return screen;
    }
}
