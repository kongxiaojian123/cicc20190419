<template>
    <div class="screen-main" ref="screen"
         @touchstart.stop.prevent="scroll($event,true)"
         @touchmove.stop.prevent="scroll"
         :style="{
            transform:`translateY(${-scrollTo}px)`
         }"
    >
        <Screen00 :progress="subProgress[0]"/>
        <Screen01 :progress="subProgress[1]"/>
        <Screen02 :progress="subProgress[2]"/>
        <Screen03 :progress="subProgress[3]"/>
        <Screen04 :progress="subProgress[4]"/>
        <Screen05 :progress="subProgress[5]"/>
        <Screen06 :progress="subProgress[6]"/>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Watch, Emit, Prop, } from 'vue-property-decorator';
    import Screen00 from './screen00.vue';
    import Screen01 from './screen01.vue';
    import Screen02 from './screen02.vue';
    import Screen03 from './screen03.vue';
    import Screen04 from './screen04.vue';
    import Screen05 from './screen05.vue';
    import Screen06 from './screen06.vue';
    interface scrollData{
        screenHeight:number;//屏幕高度
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
    const requestAnimationFrame = window.requestAnimationFrame||window.webkitRequestAnimationFrame;
    const cancelAnimationFrame = window.cancelAnimationFrame||window.webkitCancelAnimationFrame;
    @Component({components:{
        Screen00,Screen01,Screen02,Screen03,Screen04,Screen05,Screen06,
    }})
    export default class Screen extends Vue {
        private scrollTo:number=0;
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
        private scroll({touches}:TouchEvent,init:boolean=false){
            const pageY = touches[0].pageY;
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
                const offset = (scrollData.scrollTo-this.scrollTo)/10;
                if(Math.abs(offset)<0.001){
                    this.scrollTo = scrollData.scrollTo;
                }else{
                    this.scrollTo += offset;
                }
            }
            timer = requestAnimationFrame((_duration)=>{
                this.renderScroll(_duration-duration,_duration);
            });
        }
        private mounted(){
            scrollData.screenHeight = window.innerHeight;
            scrollData.scrollTop = (<HTMLDivElement>this.$refs.screen).offsetHeight-scrollData.screenHeight;
            this.$children.forEach((vue:Vue)=>{
                const offsetTop = (<HTMLDivElement>vue.$el).offsetTop;
                const height = (<HTMLDivElement>vue.$el).offsetHeight;
                scrollItemData.push({
                    top:offsetTop,
                    height:height,
                    bottom:offsetTop+height,
                });
                this.subProgress.push(0);
            });
            this.renderScroll();
        }
        private destroyed(){
            cancelAnimationFrame(timer);
        }
    };
</script>

<style lang="postcss" scoped>
.screen-main{
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
}
</style>
