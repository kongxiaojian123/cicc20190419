<template>
    <div class="scroll">
        <div class="scroll-main" ref="scroll"
            @touchstart="scrollEvent($event,true)"
            @touchmove.stop.prevent="scrollEvent"
            :style="{
                transform:`translateY(${-scrollTo}px)`
            }"
        >
            <Screen00 :class="{hidden:subVisiable[0]}" :progress="subProgress[0]" :screen="subScreen[0]"/>
            <Screen01 :class="{hidden:subVisiable[1]}" :progress="subProgress[1]" :screen="subScreen[1]"/>
            <Screen02 :class="{hidden:subVisiable[2]}" :progress="subProgress[2]" :screen="subScreen[2]"/>
            <Screen03 :class="{hidden:subVisiable[3]}" :progress="subProgress[3]" :screen="subScreen[3]"/>
            <Screen04 :class="{hidden:subVisiable[4]}" :progress="subProgress[4]" :screen="subScreen[4]"/>
            <Screen05 :class="{hidden:subVisiable[5]}" :progress="subProgress[5]" :screen="subScreen[5]"/>
            <Screen06 :class="{hidden:subVisiable[6]}" :progress="subProgress[6]" :screen="subScreen[6]"/>
            <Screen07 :class="{hidden:subVisiable[7]}" :progress="subProgress[7]" :screen="subScreen[7]"/>
            <Screen08 :class="{hidden:subVisiable[8]}" :progress="subProgress[8]" :screen="subScreen[8]"/>
            <Screen09 :class="{hidden:subVisiable[9]}" :progress="subProgress[9]" :screen="subScreen[9]"/>
            <Screen10 :class="{hidden:subVisiable[10]}" :progress="subProgress[10]" :screen="subScreen[10]"/>
            <Screen11 :class="{hidden:subVisiable[11]}" :progress="subProgress[11]" :screen="subScreen[11]"/>
            <Screen12 :class="{hidden:subVisiable[12]}" :progress="subProgress[12]" :screen="subScreen[12]"/>
            <Screen13 :class="{hidden:subVisiable[13]}" :progress="subProgress[13]" :screen="subScreen[13]"/>
            <Screen14 :class="{hidden:subVisiable[14]}" :progress="subProgress[14]" :screen="subScreen[14]" @scrollTo="scrollSeek"/>
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
    import Screen11 from './screen11.vue';
    import Screen12 from './screen12.vue';
    import Screen13 from './screen13.vue';
    import Screen14 from './screen14.vue';
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
        Screen00,Screen01,Screen02,Screen03,Screen04,Screen05,Screen06,Screen07,
        Screen08,Screen09,Screen10,Screen11,Screen12,Screen13,Screen14,
    }}) 
    export default class F2eScroll extends Vue {
        private scrollTo:number=0;
        @Watch('scrollTo')private scrollToChange(val){
            const scrollBottom = val+scrollData.screenHeight;
            const scrollBottom2 = scrollBottom+scrollData.screenHeight/2;
            const scrollTop = val-scrollData.screenHeight/2;
            scrollItemData.forEach((item,index)=>{
                if(scrollTop<item.bottom&&scrollBottom2>item.top) {
                    this.$set(this.subProgress, index, (scrollBottom-item.top)/item.height);
                    this.$set(this.subVisiable, index, false);
                }else{
                    this.$set(this.subVisiable, index, true);
                }
            });
        }
        private subProgress:number[]=[];
        private subScreen:number[]=[];//一屏高占相应的进度
        private subVisiable:boolean[]=[];//一屏高占相应的进度
        private scrollEvent({touches}:TouchEvent,init:boolean=false){
            const pageY = touches[0].pageY;
            // console.log(pageY);
            if(!init){
                const offsetY = -(pageY-scrollData.oldY);
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
                this.subVisiable.push(false);
                this.subScreen.push(scrollData.screenHeight*3/height);
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
        padding-top: 60rpx;
        padding-bottom: 60rpx;
        .hidden{
            visibility: hidden;
        }
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
        .screen09,.screen10,.screen11,.screen12,.screen13{
            margin-bottom: 100rpx;
        }
    }
}
</style>
