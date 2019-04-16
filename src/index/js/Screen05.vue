<template>
    <div class="screen05 ps-242">
        <div class="main ps-252">
            <div class="bg ps-250" :style="mainBgStyle"></div>
            <div class="text text4 ps-70" :style="mainText4Style"></div>
            <div class="text text3 ps-68" :style="mainText3Style"></div>
            <div class="text text2 ps-69" :style="mainText2Style"></div>
            <div class="text text1 ps-67" :style="mainText1Style"></div>
            <div class="text text0 ps-66" :style="mainText0Style"></div>
        </div>
        <div class="title ps-244">
            <div class="bg ps-23" :style="titleBgStyle"></div>
            <div class="text ps-248" :style="titleTextStyle"></div>
            <div class="num05 ps-258" :style="titleNumStyle"></div>
        </div>
        </div>
</template>
<script >
    let pixelScale;
    export default {
        props:['progress','screen'],
        watch:{
            progress(val){
                this.titleNumStyle=this.$parent.tweenCss({
                    translateY:{
                        fromTo:[-180,50],
                        range:[-.15,1.3*this.screen],
                        progress:val,
                    },
                    translateX:{
                        fromTo:[-180,50],
                        range:[-.15,1.3*this.screen],
                        progress:val,
                    },
                });
                this.titleBgStyle = this.$parent.tweenCss({
                    rotateZ:{
                        fromTo:[-10,10],
                        range:[0,1.5*this.screen],
                        progress:val,
                    },
                    translateY:{
                        fromTo:[-50,50],
                        range:[0,1.5*this.screen],
                        progress:val,
                    },
                });
                this.titleTextStyle = this.$parent.tweenCss({
                    scale:{
                        fromTo:[1.2,1],
                        range:[.25,.25*this.screen],
                        progress:val,
                        easing:'easeBackOut'
                    },
                    opacity:{
                        fromTo:[0,1],
                        range:[.25,.1*this.screen],
                        progress:val,
                    },
                });
                const mainBgStyle = this.$parent.tween({
                    data:{
                        fromTo:[-100*pixelScale,100*pixelScale],
                        range:[0,2*this.screen],
                        progress:val,
                    },
                }).data;
                this.mainBgStyle = {
                    backgroundPosition:`center ${mainBgStyle}px`,
                    transform:`translate(${(mainBgStyle+100*pixelScale)*.8}px,${-mainBgStyle*1.2+10}px)`,
                };

                for(let i=0;i<5;i++){
                    this[`mainText${i}Style`]=this.$parent.tweenCss({
                        scale:{
                            fromTo:[.2,1],
                            range:[.45+i*.1,.25*this.screen],
                            progress:val,
                            easing:'easeBackOut'
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[.45+i*.1,.1*this.screen],
                            progress:val,
                        },
                    });
                }
            }
        },
        data(){
            return{
                titleNumStyle:null,
                titleTextStyle:null,
                titleBgStyle:null,
                mainBgStyle:null,

                mainText0Style:null,
                mainText1Style:null,
                mainText2Style:null,
                mainText3Style:null,
                mainText4Style:null,
            }
        },
        mounted(){
            pixelScale = window.innerWidth/640;
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
    .ps-242{
        position:relative;
        width:640rpx;
        height:1092rpx;
        .main{
            .text{
                transform-origin: left center;
            }
        }
        .ps-244{
            position:absolute;
            left:55.078125%;
            top:12.31685%;
            margin-left:-274.5rpx;
            margin-top:-134.5rpx;
            width:549rpx;
            height:269rpx;
            .ps-258{
                position:absolute;
                left:80.236794%;
                top:21.561338%;
                background:url("../assets/num05.ps-258.png") no-repeat center;
            }
            .ps-248{
                position:absolute;
                left:43.989071%;
                top:68.401487%;
                background:url("../assets/text.ps-248.png") no-repeat center;
            }
            .ps-23{
                position:absolute;
                left:50.546448%;
                top:66.356877%;
                background:url("../assets/bg.ps-23.png") no-repeat center;
            }
        }
        .ps-252{
            position:absolute;
            left:50%;
            top:64.972527%;
            margin-left:-320rpx;
            margin-top:-382.5rpx;
            width:640rpx;
            height:765rpx;
            .ps-66{
                position:absolute;
                left:37.265625%;
                top:17.320261%;
                background:url("../assets/text0.ps-66.png") no-repeat center;
            }
            .ps-67{
                position:absolute;
                left:37.265625%;
                top:33.660131%;
                background:url("../assets/text1.ps-67.png") no-repeat center;
            }
            .ps-69{
                position:absolute;
                left:37.265625%;
                top:50%;
                background:url("../assets/text2.ps-69.png") no-repeat center;
            }
            .ps-68{
                position:absolute;
                left:37.265625%;
                top:66.339869%;
                background:url("../assets/text3.ps-68.png") no-repeat center;
            }
            .ps-70{
                position:absolute;
                left:37.265625%;
                top:82.679739%;
                background:url("../assets/text4.ps-70.png") no-repeat center;
            }
            .ps-250{
                position:absolute;
                left:56.09375%;
                top:50%;
                -webkit-mask: url("../assets/bg.mask.ps-250.png") no-repeat center;
                -webkit-mask-size:contain; 
                background:url("../assets/bg.ps-250.jpg") no-repeat center; 
            }
        }
    }
</style>