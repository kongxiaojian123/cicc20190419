<template>
    <div class="screen13 ps-257">
        <div class="main ps-265">
            <div class="bg1 ps-104" :style="bgStyle"></div>
            <div class="bg0 ps-263"></div>
            <div class="text text4 ps-185" :style="text4Style"></div>
            <div class="text text3 ps-267" :style="text3Style"></div>
            <div class="text text2 ps-268" :style="text2Style"></div>
            <div class="text text1 ps-269" :style="text1Style"></div>
            <div class="text text0 ps-270" :style="text0Style"></div>
        </div>
        <div class="title ps-178">
            <div class="bg ps-261" :style="titleBgStyle"></div>
            <div class="text ps-211" :style="titleTextStyle"></div>
            <div class="num_13 ps-259" :style="titleNumStyle"></div>
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
                        range: [0.05, .1 * this.screen],
                        progress: val,
                    },
                    translateY: {
                        fromTo: [-30, 30],
                        range: [0, 1.2 * this.screen],
                        progress: val,
                    },
                    scale: {
                        fromTo: [.3, 1],
                        range: [0.05, .2 * this.screen],
                        progress: val,
                        easing: 'easeBackOut'
                    }
                });
                for(let i = 0;i<5;i++){
                    this[`text${i}Style`] = this.$parent.tweenCss({
                        opacity: {
                            fromTo: [0, 1],
                            range: [0.54+i*.09, .1 * this.screen],
                            progress: val,
                        },
                        translateX: {
                            fromTo: [100, 0],
                            range: [0.54+i*.09, .2 * this.screen],
                            progress: val,
                            easing: 'easeBackOut'
                        },
                    });
                }
                this.bgStyle = this.$parent.tweenCss({
                    translateY: {
                        fromTo: [100, -100],
                        range: [0.5, 1.6 * this.screen],
                        progress: val,
                    },
                    translateX: {
                        fromTo: [50, 0],
                        range: [0.5, 1.6 * this.screen],
                        progress: val,
                    }
                });
            }
        },
        data(){
            return{
                titleBgStyle:null,
                titleTextStyle:null,
                titleNumStyle:null,
                text0Style:null,
                text1Style:null,
                text2Style:null,
                text3Style:null,
                text4Style:null,
                bgStyle:null,
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
    .ps-257{
        position:relative;
        width:640rpx;
        height:1111rpx;
        .ps-178{
            position:absolute;
            left:40.234375%;
            top:12.916292%;
            margin-left:-257.5rpx;
            margin-top:-143.5rpx;
            width:515rpx;
            height:287rpx;
            .ps-259{
                position:absolute;
                left:62.718447%;
                top:20.209059%;
                background:url("../assets/num_13.ps-259.png") no-repeat center;
            }
            .ps-211{
                position:absolute;
                left:46.699029%;
                top:62.71777%;
                background:url("../assets/text.ps-211.png") no-repeat center;
            }
            .ps-261{
                position:absolute;
                left:50%;
                top:69.512195%;
                background:url("../assets/bg.ps-261.png") no-repeat center;
            }
        }
        .ps-265{
            position:absolute;
            left:50%;
            top:60.711071%;
            margin-left:-320rpx;
            margin-top:-436.5rpx;
            width:640rpx;
            height:873rpx;
            .ps-270{
                position:absolute;
                left:64.15625%;
                top:33.676976%;
                background:url("../assets/text.text0.ps-270.png") no-repeat center;
            }
            .ps-269{
                position:absolute;
                left:55.15625%;
                top:46.219931%;
                background:url("../assets/text.text1.ps-269.png") no-repeat center;
            }
            .ps-268{
                position:absolute;
                left:45.46875%;
                top:58.82016%;
                background:url("../assets/text.text2.ps-268.png") no-repeat center;
            }
            .ps-267{
                position:absolute;
                left:36.84375%;
                top:71.363116%;
                background:url("../assets/text.text3.ps-267.png") no-repeat center;
            }
            .ps-185{
                position:absolute;
                left:26.84375%;
                top:83.963345%;
                background:url("../assets/text.text4.ps-185.png") no-repeat center;
            }
            .ps-263{
                position:absolute;
                left:34.84375%;
                top:45.704467%;
                background:url("../assets/bg0.ps-263.png") no-repeat center;
            }
            .ps-104{
                position:absolute;
                left:64.609375%;
                top:59.278351%;
                background:url("../assets/bg1.ps-104.png") no-repeat center;
            }
        }
    }
</style>