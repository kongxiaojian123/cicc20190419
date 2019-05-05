<template>
    <div class="screen12 ps-249">
        <div class="main ps-176">
            <div class="circle1 ps-253" :style="circle1Style"></div>
            <div class="circle0 ps-251" :style="circle0Style"></div>
            <div class="text2 ps-17" :style="text0Style"></div>
            <div class="text1 ps-255" :style="text1Style"></div>
            <div class="text0 ps-174" :style="text2Style"></div>
        </div>
        <div class="title ps-172">
            <div class="bg ps-246" :style="titleBgStyle"></div>
            <div class="text ps-9" :style="titleTextStyle"></div>
            <div class="num_12 ps-247" :style="titleNumStyle"></div>
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
                        range: [0, 1.5],
                        progress: val,
                    },
                    translateY: {
                        fromTo: [50, -100],
                        range: [0, 1.5],
                        progress: val,
                    },
                    scale: {
                        fromTo: [1.2, .8],
                        range: [0, 1.5],
                        progress: val,
                    },
                });
                this.titleBgStyle = this.$parent.tweenCss({
                    translateX: {
                        fromTo: [100, -30],
                        range: [0, 1.5],
                        progress: val,
                    },
                    translateY: {
                        fromTo: [-100, 30],
                        range: [0, 1.5],
                        progress: val,
                    },
                    rotateZ: {
                        fromTo: [10, -10],
                        range: [0, 1.5],
                        progress: val,
                    },
                });
                this.titleTextStyle = this.$parent.tweenCss({
                    opacity: {
                        fromTo: [0, 1],
                        range: [0.15, .1 * this.screen],
                        progress: val,
                    },
                    translateY: {
                        fromTo: [-30, 30],
                        range: [0, 1.5],
                        progress: val,
                    },
                    scale: {
                        fromTo: [.3, 1],
                        range: [0.15, .2 * this.screen],
                        progress: val,
                        easing: 'easeBackOut'
                    }
                });
                this.circle1Style = this.circle0Style = this.$parent.tweenCss({
                    opacity: {
                        fromTo: [0, 1],
                        range: [0.68, .05 * this.screen],
                        progress: val,
                    },
                    rotateZ: {
                        fromTo: [45, 0],
                        range: [0.68, .2 * this.screen],
                        progress: val,
                        easing: 'easeBackOut'
                    },
                });
                this.text0Style = this.$parent.tweenCss({
                    opacity: {
                        fromTo: [0, 1],
                        range: [0.68, .05 * this.screen],
                        progress: val,
                    },
                    scale: {
                        fromTo: [1.3, 1],
                        range: [0.68, .2 * this.screen],
                        progress: val,
                        easing: 'easeBackOut'
                    },
                });
                this.text1Style = this.$parent.tweenCss({
                    opacity: {
                        fromTo: [0, 1],
                        range: [0.77, .05 * this.screen],
                        progress: val,
                    },
                    scale: {
                        fromTo: [1.3, 1],
                        range: [0.77, .2 * this.screen],
                        progress: val,
                        easing: 'easeBackOut'
                    },
                });
                this.text2Style = this.$parent.tweenCss({
                    opacity: {
                        fromTo: [0, 1],
                        range: [0.86, .05 * this.screen],
                        progress: val,
                    },
                    scale: {
                        fromTo: [1.3, 1],
                        range: [0.86, .2 * this.screen],
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
                circle0Style:null,
                circle1Style:null,
                text0Style:null,
                text1Style:null,
                text2Style:null,
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
    .ps-249{
        position:relative;
        margin-left: 55rpx;
        width:531rpx;
        height:1205rpx;
        .ps-172{
            position:absolute;
            left:52.824859%;
            top:12.780083%;
            margin-left:-237.5rpx;
            margin-top:-154rpx;
            width:475rpx;
            height:308rpx;
            .ps-247{
                position:absolute;
                left:56.526316%;
                top:18.831169%;
                background:url("../assets/num_12.ps-247.png") no-repeat center;
            }
            .ps-9{
                position:absolute;
                left:47.473684%;
                top:67.207792%;
                background:url("../assets/text.ps-9.png") no-repeat center;
            }
            .ps-246{
                position:absolute;
                left:50.421053%;
                top:62.012987%;
                background:url("../assets/bg.ps-246.png") no-repeat center;
            }
        }
        .ps-176{
            position:absolute;
            left:50%;
            top:65.228216%;
            margin-left:-265.5rpx;
            margin-top:-419rpx;
            width:531rpx;
            height:838rpx;
            .ps-174{
                position:absolute;
                left:52.730697%;
                top:77.74463%;
                background:url("../assets/text0.ps-174.png") no-repeat center;
            }
            .ps-255{
                position:absolute;
                left:49.905838%;
                top:50.119332%;
                background:url("../assets/text1.ps-255.png") no-repeat center;
            }
            .ps-17{
                position:absolute;
                left:54.237288%;
                top:22.852029%;
                background:url("../assets/text2.ps-17.png") no-repeat center;
            }
            .ps-251{
                position:absolute;
                left:50%;
                top:31.682578%;
                background:url("../assets/circle0.ps-251.png") no-repeat center;
                transform-origin: 85% 15%;
            }
            .ps-253{
                position:absolute;
                left:50%;
                top:68.257757%;
                background:url("../assets/circle1.ps-253.png") no-repeat center;
                transform-origin: 15% 85%;
            }
        }
    }
</style>