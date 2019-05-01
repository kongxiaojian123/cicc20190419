<template>
    <div class="scroll">
        <div class="scroll-main" ref="scroll"
            @touchstart.stop.prevent="scrollEvent($event,true)"
            @touchmove.stop.prevent="scrollEvent"
            :style="{
                transform:`translateY(${-scrollTo}px)`
            }"
        >
            <Screen00 :progress="subProgress[0]" :screen="subScreen[0]"/>
            <Screen01 :progress="subProgress[1]" :screen="subScreen[1]"/>
            <Screen02 :progress="subProgress[2]" :screen="subScreen[2]"/>
            <Screen03 :progress="subProgress[3]" :screen="subScreen[3]"/>
            <Screen04 :progress="subProgress[4]" :screen="subScreen[4]"/>
            <Screen05 :progress="subProgress[5]" :screen="subScreen[5]"/>
            <Screen06 :progress="subProgress[6]" :screen="subScreen[6]"/>
            <Screen07 :progress="subProgress[7]" :screen="subScreen[7]"/>
            <Screen08 :progress="subProgress[8]" :screen="subScreen[8]"/>
            <Screen09 :progress="subProgress[9]" :screen="subScreen[9]"/>
            <Screen10 :progress="subProgress[10]" :screen="subScreen[10]"/>
        </div>
    </div>
</template>

<script lang="ts">
    import * as tween from 'd3-ease';
    import { Vue, Component, Watch, Emit, Prop, } from 'vue-property-decorator';
    import Screen00 from './screen00.vue';
    import Screen01 from './screen01.vue';
    import Screen02 from './screen02.vue';
    import Screen03 from './screen03.vue';
    import Screen04 from './screen04.vue';
    import Screen05 from './screen05.vue';
    import Screen06 from './screen06.vue';
    import Screen07 from './screen07.vue';
    import Screen08 from './screen08.vue';
    import Screen09 from './screen09.vue';
    import Screen10 from './screen10.vue';
import { swiper } from 'vue-awesome-swiper';
    interface tweenObj{
        [key:string]:{
            fromTo:[number,number];//变换
            range:[number,number];//进度范围 0 起始值 1 持续时长
            progress:number;//当前进度
            easing?:'easeLinear'|'easeQuad'|'easeQuadIn'|'easeQuadOut'|'easeQuadInOut'|'easeCubic'|'easeCubicIn'|'easeCubicOut'|'easeCubicInOut'|'easePoly'|'easePolyIn'|'easePolyOut'|'easePolyInOut'|'easeSin'|'easeSinIn'|'easeSinOut'|'easeSinInOut'|'easeExp'|'easeExpIn'|'easeExpOut'|'easeExpInOut'|'easeCircle'|'easeCircleIn'|'easeCircleOut'|'easeCircleInOut'|'easeBounce'|'easeBounceIn'|'easeBounceOut'|'easeBounceInOut'|'easeBack'|'easeBackIn'|'easeBackOut'|'easeBackInOut'|'easeElastic'|'easeElasticIn'|'easeElasticOut'|'easeElasticInOut';
        }
    }
    interface scrollData{
        screenHeight:number;//屏幕高度
        pixelScale:number;//像素比例
        scrollTop:number;//scrollTop上限
        oldY:number;
        scrollTo:number;
    }
    interface scrollItemData{
        top:number;
        height:number;
        bottom:number;
    }
    const scrollItemData:scrollItemData[]=[];
    const scrollData:scrollData = <scrollData>{
        scrollTo:0,
    };
    let timer:number=null;
    const fps:number=1000/60;
    const requestAnimationFrame = window.requestAnimationFrame||window.webkitRequestAnimationFrame;
    const cancelAnimationFrame = window.cancelAnimationFrame||window.webkitCancelAnimationFrame;
    @Component({components:{
        Screen00,Screen01,Screen02,Screen03,Screen04,Screen05,Screen06,Screen07,Screen08,Screen09,Screen10,
    }}) 
    export default class F2eScroll extends Vue {
        private scrollTo:number=0;
        private lalala:number=1;
        @Watch('lalala') lalalaChange(val){
            this.scrollSeek(val);
        }
        @Watch('scrollTo')private scrollToChange(val){
            const scrollBottom = val+scrollData.screenHeight;
            const scrollBottom2 = scrollBottom+scrollData.screenHeight;
            const scrollTop = val-scrollData.screenHeight;
            scrollItemData.forEach((item,index)=>{
                if(scrollTop<item.bottom&&scrollBottom2>item.top) {
                    this.$set(this.subProgress, index, (scrollBottom-item.top)/item.height);
                }
            });
        }
        private subProgress:number[]=[];
        private subScreen:number[]=[];//一屏高占相应的进度
        private scrollEvent({touches}:TouchEvent,init:boolean=false){
            const pageY = touches[0].pageY;
            // console.log(pageY);
            if(!init){
                const offsetY = -(pageY-scrollData.oldY)*2;
                scrollData.scrollTo = Math.clamp(scrollData.scrollTo+offsetY,0,scrollData.scrollTop);
            }
            scrollData.oldY=pageY;
        }
        private renderScroll(frameScale?:number,duration?:number){
            if(frameScale===undefined&&timer){
                cancelAnimationFrame(timer);
            }
            if(this.scrollTo!==scrollData.scrollTo){
                const offset = (scrollData.scrollTo-this.scrollTo)/10*frameScale;
                if(Math.abs(offset)<0.001){
                    this.scrollTo = scrollData.scrollTo;
                }else{
                    this.scrollTo += offset;
                }
            }
            timer = requestAnimationFrame((_duration)=>{
                this.renderScroll((_duration-duration)/fps,_duration);
            });
        }
        private tween(tweenObj:tweenObj){
            const tweenResult={};
            Object.keys(tweenObj).forEach(id=>{
                const tweenItem = tweenObj[id];
                const easeing = tweenItem.easing||'easeLinear';
                const progress = (Math.clamp(tweenItem.progress,tweenItem.range[0],tweenItem.range[0]+tweenItem.range[1])-tweenItem.range[0])/(tweenItem.range[1]);
                switch(progress){
                    case 0:
                        tweenResult[id] = tweenItem.fromTo[0];
                    break;
                    case 1:
                        tweenResult[id] = tweenItem.fromTo[1];
                    break;
                    default:
                        tweenResult[id] = tweenItem.fromTo[0]+(tweenItem.fromTo[1]-tweenItem.fromTo[0])*tween[easeing](progress);
                }
            });
            return tweenResult;
        }
        private tweenCss(tweenObj:tweenObj){
            const cssData = this.tween(tweenObj);
            const transform = [];
            let opacity = 1;
            Object.keys(cssData).forEach(item=>{
                const val = cssData[item];
                switch(item){
                    case 'translateX':
                        transform.push(`translateX(${val*scrollData.pixelScale}px)`);
                    break;
                    case 'translateY':
                        transform.push(`translateY(${val*scrollData.pixelScale}px)`);
                    break;
                    case 'scale':
                        transform.push(`scale(${val})`); 
                    break; 
                    case 'rotateZ':
                        transform.push(`rotateZ(${val}deg)`);
                    break;
                    case 'opacity':
                        opacity = val;
                    break;
                }
            });
            return {
                transform:transform.join(' '),
                opacity:opacity,
            };
        }
        private scrollSeek(val:number){
            this.scrollTo = scrollData.scrollTo = val;
        }
        private get ScrollRawData(){
            return scrollData;
        }
        private mounted(){
            scrollData.screenHeight = window.innerHeight;
            scrollData.pixelScale = window.innerWidth/640;
            scrollData.scrollTop = (<HTMLDivElement>this.$refs.scroll).offsetHeight-scrollData.screenHeight;
            this.$children.forEach((vue:Vue)=>{
                const offsetTop = (<HTMLDivElement>vue.$el).offsetTop;
                const height = (<HTMLDivElement>vue.$el).offsetHeight;
                scrollItemData.push({
                    top:offsetTop,
                    height:height,
                    bottom:offsetTop+height,
                });
                this.subProgress.push(0);
                this.subScreen.push(scrollData.screenHeight/height);
            });
            this.renderScroll();
        }
        private destroyed(){
            cancelAnimationFrame(timer);
        }
    };
</script>

<style lang="postcss" scoped>
.scroll{
    position: absolute;
    top: 0;left: 0;
    width: 100%;height: 100%;
    overflow: hidden;
    .scroll-main{
        padding-top: 70rpx;
        .screen00{
            margin-bottom: 150rpx;
        }
        .screen01{
            margin-bottom: 85rpx;
        }
        .screen02{
            margin-bottom: 150rpx;
        }
        .screen03{
            margin-bottom: 100rpx;
        }
        .screen04{
            margin-bottom: 140rpx;
        }
        .screen05{
            margin-bottom: 150rpx;
        }
        .screen06{
            margin-bottom: 100rpx;
        }
        .screen07{
            margin-bottom: 100rpx;
        }
        .screen08{
            margin-bottom: 100rpx;
        }
        .screen09{
            margin-bottom: 100rpx;
        }
    }
}
</style>
