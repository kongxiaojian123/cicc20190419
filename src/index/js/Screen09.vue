<template>
    <div class="screen09 ps-673">
        <div class="main ps-681">
            <div class="type1 ps-515">
                <div class="bg1 ps-703"></div>
                <div class="bg0 ps-702"></div>
                <div class="logo logo6 ps-710"></div>
                <div class="logo logo5 ps-709"></div>
                <div class="logo logo4 ps-708"></div>
                <div class="logo logo3 ps-707"></div>
                <div class="logo logo2 ps-706"></div>
                <div class="logo logo1 ps-705"></div>
                <div class="logo logo0 ps-704"></div>
                <div class="type-text ps-700"></div>
            </div>
            <div class="type0 ps-511">
                <div class="bg1 ps-699"></div>
                <div class="bg0 ps-698"></div>
                <div class="logo logo4 ps-697"></div>
                <div class="logo logo3 ps-696"></div>
                <div class="logo logo2 ps-695"></div>
                <div class="logo logo1 ps-694"></div>
                <div class="logo logo0 ps-693"></div>
                <div class="type-text ps-691"></div>
            </div>
            <div class="text-main ps-683">
                <div class="text3 ps-690"></div>
                <div class="text2 ps-689"></div>
                <div class="text1 ps-688"></div>
                <div class="text0 ps-687"></div>
            </div>
        </div>
        <div class="title ps-679">
            <div class="bg ps-3" :style="titleBgStyle"></div>
            <div class="text ps-7" :style="titleTextStyle"></div>
            <div class="num_09 ps-677" :style="titleNumStyle"></div>
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
                        fromTo: [-60, 0],
                        range: [0.15, .2 * this.screen],
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
    .ps-673{
        position:relative;
        margin-left: 25rpx;
        width:557rpx;
        height:1648rpx;
        .ps-679{
            position:absolute;
            left:48.025135%;
            top:9.43568%;
            margin-left:-267.5rpx;
            margin-top:-155.5rpx;
            width:535rpx;
            height:311rpx;
            .ps-677{
                position:absolute;
                left:80.654206%;
                top:18.649518%;
                background:url("../assets/num_09.ps-677.png") no-repeat center;
            }
            .ps-7{
                position:absolute;
                left:50%;
                top:64.308682%;
                background:url("../assets/text.ps-7.png") no-repeat center;
            }
            .ps-3{
                position:absolute;
                left:50.373832%;
                top:62.700965%;
                background:url("../assets/bg.ps-3.png") no-repeat center;
            }
        }
        .ps-681{
            position:absolute;
            left:52.692998%;
            top:61.620146%;
            margin-left:-263.5rpx;
            margin-top:-632.5rpx;
            width:527rpx;
            height:1265rpx;
            .ps-683{
                position:absolute;
                left:38.994307%;
                top:7.667984%;
                margin-left:-189.5rpx;
                margin-top:-97rpx;
                width:379rpx;
                height:194rpx;
                .ps-687{
                    position:absolute;
                    left:41.029024%;
                    top:8.247423%;
                    background:url("../assets/text0.ps-687.png") no-repeat center;
                }
                .ps-688{
                    position:absolute;
                    left:36.015831%;
                    top:36.340206%;
                    background:url("../assets/text1.ps-688.png") no-repeat center;
                }
                .ps-689{
                    position:absolute;
                    left:50.263852%;
                    top:63.917526%;
                    background:url("../assets/text2.ps-689.png") no-repeat center;
                }
                .ps-690{
                    position:absolute;
                    left:31.266491%;
                    top:92.010309%;
                    background:url("../assets/text3.ps-690.png") no-repeat center;
                }
            }
            .ps-511{
                position:absolute;
                left:49.810247%;
                top:36.916996%;
                margin-left:-251.5rpx;
                margin-top:-201rpx;
                width:503rpx;
                height:402rpx;
                .ps-691{
                    position:absolute;
                    left:16.500994%;
                    top:2.985075%;
                    background:url("../assets/type-text.ps-691.png") no-repeat center;
                }
                .ps-693{
                    position:absolute;
                    left:49.602386%;
                    top:23.383085%;
                    background:url("../assets/logo.logo0.ps-693.png") no-repeat center;
                }
                .ps-694{
                    position:absolute;
                    left:48.707753%;
                    top:38.557214%;
                    background:url("../assets/logo.logo1.ps-694.png") no-repeat center;
                }
                .ps-695{
                    position:absolute;
                    left:49.502982%;
                    top:54.228856%;
                    background:url("../assets/logo.logo2.ps-695.png") no-repeat center;
                }
                .ps-696{
                    position:absolute;
                    left:50.099404%;
                    top:70.522388%;
                    background:url("../assets/logo.logo3.ps-696.png") no-repeat center;
                }
                .ps-697{
                    position:absolute;
                    left:41.451292%;
                    top:87.562189%;
                    background:url("../assets/logo.logo4.ps-697.png") no-repeat center;
                }
                .ps-698{
                    position:absolute;
                    left:50%;
                    top:11.940299%;
                    background:url("../assets/bg0.ps-698.png") no-repeat center;
                }
                .ps-699{
                    position:absolute;
                    left:50%;
                    top:99.004975%;
                    background:url("../assets/bg1.ps-699.png") no-repeat center;
                }
            }
            .ps-515{
                position:absolute;
                left:50%;
                top:78.853755%;
                margin-left:-263.5rpx;
                margin-top:-267.5rpx;
                width:527rpx;
                height:535rpx;
                .ps-700{
                    position:absolute;
                    left:12.618596%;
                    top:2.242991%;
                    background:url("../assets/type-text.ps-700.png") no-repeat center;
                }
                .ps-704{
                    position:absolute;
                    left:49.71537%;
                    top:16.915888%;
                    background:url("../assets/logo.logo0.ps-704.png") no-repeat center;
                }
                .ps-705{
                    position:absolute;
                    left:48.766603%;
                    top:28.504673%;
                    background:url("../assets/logo.logo1.ps-705.png") no-repeat center;
                }
                .ps-706{
                    position:absolute;
                    left:49.905123%;
                    top:41.401869%;
                    background:url("../assets/logo.logo2.ps-706.png") no-repeat center;
                }
                .ps-707{
                    position:absolute;
                    left:50.094877%;
                    top:52.149533%;
                    background:url("../assets/logo.logo3.ps-707.png") no-repeat center;
                }
                .ps-708{
                    position:absolute;
                    left:50.094877%;
                    top:65.327103%;
                    background:url("../assets/logo.logo4.ps-708.png") no-repeat center;
                }
                .ps-709{
                    position:absolute;
                    left:48.387097%;
                    top:76.915888%;
                    background:url("../assets/logo.logo5.ps-709.png") no-repeat center;
                }
                .ps-710{
                    position:absolute;
                    left:51.13852%;
                    top:90.186916%;
                    background:url("../assets/logo.logo6.ps-710.png") no-repeat center;
                }
                .ps-702{
                    position:absolute;
                    left:49.810247%;
                    top:9.158879%;
                    background:url("../assets/bg0.ps-702.png") no-repeat center;
                }
                .ps-703{
                    position:absolute;
                    left:49.810247%;
                    top:99.252336%;
                    background:url("../assets/bg1.ps-703.png") no-repeat center;
                }
            }
        }
    }
</style>