import mat4 from 'gl-mat4';
const requestAnimationFrame = window.requestAnimationFrame||window.webkitRequestAnimationFrame;
const cancelAnimationFrame = window.cancelAnimationFrame||window.webkitCancelAnimationFrame;
let timer = null;
export default class OpenGL{
    static initOption(canvas,option){
        const bounds = Object.assign({
            left:canvas.offsetLeft,
            top:canvas.offsetTop,
            width:canvas.offsetWidth,
            height:canvas.offsetHeight,
        },canvas.getBoundingClientRect());
        return Object.assign({
            width:bounds.width,
            height:bounds.height,
            offsetLeft:bounds.left,
            offsetTop:bounds.top,
            scale:option.width/bounds.width,
        },option);
    }
    static initGl(canvas,options){
        return canvas.getContext('webgl',options);
    }
    static initShader(gl,type,source){
        const shader = gl.createShader(type);
        gl.shaderSource(shader,source);
        gl.compileShader(shader);
        // console.log(`${type === gl.VERTEX_SHADER?'vert':'frag'} shader compile status: ${gl.getShaderParameter(shader,gl.COMPILE_STATUS)}`);
        return shader;
    }
    static initShaderProgram(gl,vsSource,fsSource){
        const program = gl.createProgram();
        gl.attachShader(program,OpenGL.initShader(gl,gl.VERTEX_SHADER,vsSource));
        gl.attachShader(program,OpenGL.initShader(gl,gl.FRAGMENT_SHADER,fsSource));
        gl.linkProgram(program);
        // console.log(`program link status: ${gl.getProgramParameter(program,gl.LINK_STATUS)}`);
        return program;
    }
    static initColor(gl){
        //设置背景颜色
        gl.clearColor(0,0,0,0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }
    static setTexture(gl){
        //设置texture
        gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
    }
    constructor(canvas,option={}){
        this.option = OpenGL.initOption(canvas,option);
        this.canvas = canvas;
        this.gl = OpenGL.initGl(this.canvas);
        this.gl.viewport(0, 0, canvas.width, canvas.height);
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,true);
        OpenGL.initColor(this.gl);
        this.destroy();
        this.render();
    }
    render(timeStamp,offsetTime){
        timer = requestAnimationFrame((currentTimeStamp)=>{
            this.render(currentTimeStamp,timeStamp?currentTimeStamp-timeStamp:0);
        });
    }
    destroy(){
        cancelAnimationFrame(timer);
        timer = null;
    }
};
OpenGL.mat4 = mat4;
