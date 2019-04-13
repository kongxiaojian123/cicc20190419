///<reference path="../../f2e_cli/develop_tools/node_modules/@types/webpack-env/index.d.ts" />
///<reference path="../../f2e_cli/develop_tools/node_modules/@types/pixi.js/index.d.ts" />
declare module "*.vert" {
    const vertShader: string;
    export default vertShader;
}
declare module "*.frag" {
    const fragShader: string;
    export default fragShader;
}
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}
declare module "vue-awesome-swiper" {
    import Vue from "vue";
    export {
        Vue as swiper,
        Vue as swiperSlide
    };
}
declare interface PIXI{
    loader:{
        add:Function,
        load:Function,
    }
}
interface Netease{
    parseUA:Function;
    pc_code:Function;
    landscape:Function;
    loading:Function;
    jsLoad:Function;
    share_survey:Function;
    survey:Function;
    share:Function;
    getPara:Function;
    init:Function;
    autoPlay:Function;
    ua:{
        mobile:boolean;
        pc:boolean;
        ios:boolean;
        android:boolean;
        weixin:boolean;
        newsapp:boolean;
        yixin:boolean;
        weibo:boolean;
        yunyuedu:boolean;
    }
}
interface Share{
    (callback:Function):void;
}
interface neteaseTracker{
    (bool:boolean,link:string, msg:string, minisiteclick:string):void;
}
declare var netease:Netease;
declare var NeteaseShare:Share;
declare var neteaseTracker:neteaseTracker;
declare interface Window {
    PIXI: PIXI;
    netease:Netease;
    __newsapp_userinfo_done(info?:object):void;
    __newsapp_login_done(info?:object):void;
    __newsapp_login_canceled():void;
    NeteaseShare:Share;
    neteaseTracker:neteaseTracker;
}
declare interface RequireContext {
    keys(): string[];
    (id: string): any;
    <T>(id: string): T;
    resolve(id: string): string;
}
