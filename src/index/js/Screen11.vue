<template>
    <div class="screen11 ps-234">
        <div class="main ps-240">
            <div class="bg ps-242" :style="mainBgStyle"></div>
            <div class="text2 ps-170" :style="mainText2Style"></div>
            <div class="text1 ps-167" :style="mainText1Style"></div>
            <div class="chart1 ps-244" :style="mainChart1Style"></div>
            <div class="chart0 ps-88" :style="mainChart0Style"></div>
            <div class="text0 ps-55" :style="mainText0Style"></div>
        </div>
        <div class="title ps-236">
            <div class="bg ps-108" :style="titleBgStyle"></div>
            <div class="text ps-43" :style="titleTextStyle"></div>
            <div class="num_11 ps-238" :style="titleNumStyle"></div>
        </div>
        </div>
</template>
<script >
    export default {
        props:['progress','screen'],
        watch: {
            progress(val) {
                this.titleNumStyle = this.$parent.tweenCss({
                    translateX: {
                        fromTo: [-50, 50],
                        range: [0, 1.2 * this.screen],
                        progress: val,
                    },
                    translateY: {
                        fromTo: [50, -100],
                        range: [0, 1.2 * this.screen],
                        progress: val,
                    },
                    scale: {
                        fromTo: [1.2, .8],
                        range: [0, 1.2 * this.screen],
                        progress: val,
                    },
                });
                this.titleBgStyle = this.$parent.tweenCss({
                    translateX: {
                        fromTo: [100, -30],
                        range: [0, 1.2 * this.screen],
                        progress: val,
                    },
                    translateY: {
                        fromTo: [-100, 30],
                        range: [0, 1.2 * this.screen],
                        progress: val,
                    },
                    rotateZ: {
                        fromTo: [10, -10],
                        range: [0, 1.2 * this.screen],
                        progress: val,
                    },
                });
                this.titleTextStyle = this.$parent.tweenCss({
                    opacity: {
                        fromTo: [0, 1],
                        range: [0.15, .1 * this.screen],
                        progress: val,
                    },
                    translateX: {
                        fromTo: [-100, 0],
                        range: [0.15, .2* this.screen],
                        progress: val,
                        easing: 'easeBounceOut'
                    },
                });
                {
                    const posX = this.$parent.tween({
                            backgroundPosition:{
                                fromTo:[0,-100],
                                range:[0.32,1.7*this.screen],
                                progress:val,
                            }
                        }).backgroundPosition;
                    this.mainBgStyle={
                        transform:`translateY(${(-posX-80)/100}rem)`,
                        backgroundPosition:`${posX/100}rem center`,
                    }
                }
                this.mainText0Style = this.$parent.tweenCss({
                    opacity: {
                        fromTo: [0, 1],
                        range: [0.41, .1 * this.screen],
                        progress: val,
                    },
                    translateX: {
                        fromTo: [100, 0],
                        range: [0.41, .2 * this.screen],
                        progress: val,
                        easing: 'easeBackOut'
                    },
                });
                this.mainText1Style = this.$parent.tweenCss({
                    opacity: {
                        fromTo: [0, 1],
                        range: [0.83, .1 * this.screen],
                        progress: val,
                    },
                    translateX: {
                        fromTo: [100, 0],
                        range: [0.83, .2 * this.screen],
                        progress: val,
                        easing: 'easeBackOut'
                    },
                });
                this.mainText2Style = this.$parent.tweenCss({
                    opacity: {
                        fromTo: [0, 1],
                        range: [0.92, .1 * this.screen],
                        progress: val,
                    },
                    translateX: {
                        fromTo: [100, 0],
                        range: [0.92, .2 * this.screen],
                        progress: val,
                        easing: 'easeBackOut'
                    },
                });
                this.mainChart0Style = this.$parent.tweenCss({
                    opacity: {
                        fromTo: [0, 1],
                        range: [0.7, .1 * this.screen],
                        progress: val,
                    },
                    scale: {
                        fromTo: [.3, 1],
                        range: [0.7, .2 * this.screen],
                        progress: val,
                        easing: 'easeBackOut'
                    },
                });
                this.mainChart1Style = this.$parent.tweenCss({
                    opacity: {
                        fromTo: [0, 1],
                        range: [0.6, .1 * this.screen],
                        progress: val,
                    },
                    scale: {
                        fromTo: [.3, 1],
                        range: [0.6, .2 * this.screen],
                        progress: val,
                        easing: 'easeBackOut'
                    },
                });
            }
        },
        data(){
            return{
                titleBgStyle:null,
                titleTextStyle:null,
                titleNumStyle:null,
                mainBgStyle:null,
                mainText0Style:null,
                mainText1Style:null,
                mainText2Style:null,
                mainChart0Style:null,
                mainChart1Style:null,
            }
        },
        computed:{
        },
        methods:{
            
        },
        components:{
            
        }
    };
</script>
<style lang="postcss" scoped>
    .ps-234{
        position:relative;
        width:640rpx;
        height:1306rpx;
        .ps-236{
            position:absolute;
            left: 0;
            top:9.915773%;
            margin-top:-129.5rpx;
            width:564rpx;
            height:259rpx;
            .ps-238{
                position:absolute;
                left:80.230496%;
                top:22.007722%;
                background:url("../assets/num_11.ps-238.png") no-repeat center;
            }
            .ps-43{
                position:absolute;
                left: 0;
                top:69.305019%;
                background:url("../assets/text.ps-43.png") no-repeat center;
            }
            .ps-108{
                position:absolute;
                left:65.957447%;
                top:63.127413%;
                background:url("../assets/bg.ps-108.png") no-repeat center;
            }
        }
        .ps-240{
            position:absolute;
            left:50%;
            top:63.514548%;
            margin-left:-320rpx;
            margin-top:-476.5rpx;
            width:640rpx;
            height:953rpx;
            .ps-55{
                position:absolute;
                left:42.8125%;
                top:14.32319%;
                background:url("../assets/text0.ps-55.png") no-repeat center;
            }
            .ps-88{
                position:absolute;
                left:49.765625%;
                top:41.762854%;
                background:url("../assets/chart0.ps-88.png") no-repeat center;
            }
            .ps-244{
                position:absolute;
                left:50%;
                top:42.025184%;
                background:url("../assets/chart1.ps-244.png") no-repeat center;
            }
            .ps-167{
                position:absolute;
                left:38.75%;
                top:69.30745%;
                background:url("../assets/text1.ps-167.png") no-repeat center;
            }
            .ps-170{
                position:absolute;
                left:34.6875%;
                top:84.627492%;
                background:url("../assets/text2.ps-170.png") no-repeat center;
            }
            .ps-242{
                position:absolute;
                left:0;
                top:0;
                width:100%;
                height:100%;
                -webkit-mask: url("../assets/bg.ps-106.png") no-repeat center;
                -webkit-mask-size: contain;
                background:url("../assets/bg.ps-106.jpg") no-repeat right center;
                background-size:cover;
            }
        }
    }
</style>