<template>
    <div class="screen10 ps-675">
        <div class="main ps-717">
            <div class="bg ps-719" :style="mainBgStyle"></div>
            <div class="text text7 ps-728" :style="mainText7Style"></div>
            <div class="text text6 ps-727" :style="mainText6Style"></div>
            <div class="text text5 ps-726" :style="mainText5Style"></div>
            <div class="text text4 ps-725" :style="mainText4Style"></div>
            <div class="text text3 ps-724" :style="mainText3Style"></div>
            <div class="text text2 ps-723" :style="mainText2Style"></div>
            <div class="text text1 ps-722" :style="mainText1Style"></div>
            <div class="text text0 ps-721" :style="mainText0Style"></div>
        </div>
        <div class="title ps-713">
            <div class="bg ps-4" :style="titleBgStyle"></div>
            <div class="text ps-101" :style="titleTextStyle"></div>
            <div class="num_10 ps-711" :style="titleNumStyle"></div>
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
                        range: [0.1, .1 * this.screen],
                        progress: val,
                    },
                    translateY: {
                        fromTo: [-30, 30],
                        range: [0, 1.2 * this.screen],
                        progress: val,
                    },
                    scale: {
                        fromTo: [1.3, 1],
                        range: [0.1, .2 * this.screen],
                        progress: val,
                        easing: 'easeBackOut'
                    }
                });
                this.mainBgStyle = this.$parent.tweenCss({
                    translateY: {
                        fromTo: [-200, 200],
                        range: [0.22, 1.6-.22],
                        progress: val,
                    }
                });
                for(let i = 0;i<8;i++){
                    this[`mainText${i}Style`] = this.$parent.tweenCss({
                        opacity: {
                            fromTo: [0, 1],
                            range: [0.3+i*.094, .1 * this.screen],
                            progress: val,
                        },
                        translateX: {
                            fromTo: [100*(i%2?1:-1), 0],
                            range: [0.3+i*.094, .2 * this.screen],
                            progress: val,
                            easing: 'easeBackOut'
                        },
                    });
                }

            }
        },
        data(){
            return{
                titleBgStyle:null,
                titleTextStyle:null,
                titleNumStyle:null,
                mainBgStyle:null,
                mainText7Style:null,
                mainText6Style:null,
                mainText5Style:null,
                mainText4Style:null,
                mainText3Style:null,
                mainText2Style:null,
                mainText1Style:null,
                mainText0Style:null,
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
    .ps-675{
        position:relative;
        width:640rpx;
        height:1844rpx;
        .ps-713{
            position:absolute;
            left:46.015625%;
            top:8.107375%;
            margin-left:-254.5rpx;
            margin-top:-149.5rpx;
            width:509rpx;
            height:299rpx;
            .ps-711{
                position:absolute;
                left:28.290766%;
                top:19.397993%;
                background:url("../assets/num_10.ps-711.png") no-repeat center;
            }
            .ps-101{
                position:absolute;
                left:50.687623%;
                top:59.197324%;
                background:url("../assets/text.ps-101.png") no-repeat center;
            }
            .ps-4{
                position:absolute;
                left:45.18664%;
                top:65.217391%;
                background:url("../assets/bg.ps-4.png") no-repeat center;
            }
        }
        .ps-717{
            position:absolute;
            left:50%;
            top:61.035792%;
            margin-left:-320rpx;
            margin-top:-718.5rpx;
            width:640rpx;
            height:1437rpx;
            overflow: hidden;
            .ps-721{
                position:absolute;
                left:49.921875%;
                top:6.402227%;
                background:url("../assets/text.text0.ps-721.png") no-repeat center;
            }
            .ps-722{
                position:absolute;
                left:50%;
                top:18.649965%;
                background:url("../assets/text.text1.ps-722.png") no-repeat center;
            }
            .ps-723{
                position:absolute;
                left:49.921875%;
                top:31.002088%;
                background:url("../assets/text.text2.ps-723.png") no-repeat center;
            }
            .ps-724{
                position:absolute;
                left:50%;
                top:43.075852%;
                background:url("../assets/text.text3.ps-724.png") no-repeat center;
            }
            .ps-725{
                position:absolute;
                left:49.921875%;
                top:55.254001%;
                background:url("../assets/text.text4.ps-725.png") no-repeat center;
            }
            .ps-726{
                position:absolute;
                left:50%;
                top:67.50174%;
                background:url("../assets/text.text5.ps-726.png") no-repeat center;
            }
            .ps-727{
                position:absolute;
                left:49.921875%;
                top:79.749478%;
                background:url("../assets/text.text6.ps-727.png") no-repeat center;
            }
            .ps-728{
                position:absolute;
                left:50%;
                top:91.927627%;
                background:url("../assets/text.text7.ps-728.png") no-repeat center;
            }
            .ps-719{
                position:absolute;
                left:0;
                top:0;
                width:100%;
                height:100%;
                background:url("../assets/bg.ps-715.jpg") no-repeat center;
                background-size:cover;
            }
        }
    }
</style>