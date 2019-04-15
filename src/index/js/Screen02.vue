<template>
    <div class="screen02 ps-532">
        <div class="main ps-540">
            <div class="type02 ps-542">
                <div class="date ps-566"></div>
                <div class="chart ps-564">
                    <div class="bottom ps-108" :style="mainbottom1Style"></div>
                    <div class="chart-main ps-568">
                        <div class="item1 ps-572">
                            <div class="size ps-114" :style="mainSize11Style"></div>
                            <div class="text ps-576" :style="mainText11Style"></div>
                        </div>
                        <div class="item0 ps-570">
                            <div class="size ps-110" :style="mainSize10Style"></div>
                            <div class="text ps-574" :style="mainText10Style"></div>
                        </div>
                    </div>
                </div>
                <div class="type ps-105" :style="mainType1Style"></div>
            </div>
            <div class="type01 ps-544">
                <div class="bg" :style="mainBgStyle"></div>
                <div class="date ps-562"></div>
                <div class="chart ps-548">
                    <div class="bottom ps-67" :style="mainbottom0Style"></div>
                    <div class="chart-main ps-550">
                        <div class="item1 ps-558">
                            <div class="size ps-103" :style="mainSize01Style"></div>
                            <div class="text ps-560" :style="mainText01Style"></div>
                        </div>
                        <div class="item0 ps-552">
                            <div class="size ps-556" :style="mainSize00Style"></div>
                            <div class="text ps-554" :style="mainText00Style"></div>
                        </div>
                    </div>
                </div>
                <div class="type ps-56" :style="mainType0Style"></div>
            </div>
        </div>
        <div class="title ps-534">
            <div class="bg1 ps-538" :style="titleBgStyle"></div>
            <div class="text ps-21" :style="titleTextStyle"></div>
            <div class="num02 ps-123" :style="titleNumStyle"></div>
        </div>
        </div>
</template>
<script >
    export default {
        props:['progress','screen'],
        watch:{
            progress(val){
                this.titleBgStyle = this.$parent.tweenCss({
                    translateY:{
                        fromTo:[-200,100],
                        range:[-0.5,2*this.screen], 
                        progress:val,
                    },
                    translateX:{
                        fromTo:[200,-100],
                        range:[-0.5,2*this.screen], 
                        progress:val,
                    },
                });
                this.titleTextStyle = this.$parent.tweenCss({
                    translateY:{
                        fromTo:[-40,0],
                        range:[0.1,.3*this.screen], 
                        progress:val,
                    },
                    scale:{
                        fromTo:[.5,1],
                        range:[0.1,.3*this.screen], 
                        progress:val,
                        easing:'easeBackOut',
                    },
                    opacity:{
                        fromTo:[0,1],
                        range:[0.1,.2*this.screen], 
                        progress:val,
                    },
                });
                this.titleNumStyle = this.$parent.tweenCss({
                    translateX:{
                        fromTo:[-30,30],
                        range:[0.1,1.3*this.screen], 
                        progress:val,
                    },
                    translateY:{
                        fromTo:[30,-30],
                        range:[0.1,1.3*this.screen], 
                        progress:val,
                    },
                    scale:{
                        fromTo:[1,1.2],
                        range:[0.1,2.3*this.screen], 
                        progress:val,
                    },
                });
                this.mainBgStyle = this.$parent.tweenCss({
                    translateY:{
                        fromTo:[0,400],
                        range:[.3,2.3*this.screen],
                        progress:val, 
                    },
                });
                
                {
                    const offset = 0;
                    this.mainType0Style = this.$parent.tweenCss({
                        scale:{
                            fromTo:[0,1],
                            range:[0.28+offset,.4*this.screen], 
                            progress:val,
                            easing:'easeElasticOut',
                        },
                    });
                    this.mainbottom0Style = this.$parent.tweenCss({
                        opacity:{
                            fromTo:[0,1],
                            range:[0.55+offset,.05*this.screen], 
                            progress:val,
                        },
                        scale:{
                            fromTo:[.5,1],
                            range:[0.55+offset,.1*this.screen], 
                            progress:val,
                        },
                    });
                    this.mainSize00Style = this.$parent.tweenCss({
                        scale:{
                            fromTo:[0.2,1],
                            range:[0.6+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[0.6+offset,.05*this.screen], 
                            progress:val,
                        },
                    });
                    this.mainSize01Style = this.$parent.tweenCss({
                        scale:{
                            fromTo:[0.2,1],
                            range:[0.63+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[0.63+offset,.05*this.screen], 
                            progress:val,
                        },
                    });
                    this.mainText00Style = this.$parent.tweenCss({
                        scale:{
                            fromTo:[0.2,1],
                            range:[0.62+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[0.62+offset,.05*this.screen], 
                            progress:val,
                        },
                    });
                    this.mainText01Style = this.$parent.tweenCss({
                        scale:{
                            fromTo:[0.2,1],
                            range:[0.65+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[0.65+offset,.05*this.screen], 
                            progress:val,
                        },
                    });
                }
                {
                    const offset = 0.4;
                    this.mainType1Style = this.$parent.tweenCss({
                        scale:{
                            fromTo:[0,1],
                            range:[0.28+offset,.4*this.screen], 
                            progress:val,
                            easing:'easeElasticOut',
                        },
                    });
                    this.mainbottom1Style = this.$parent.tweenCss({
                        opacity:{
                            fromTo:[0,1],
                            range:[0.55+offset,.05*this.screen], 
                            progress:val,
                        },
                        scale:{
                            fromTo:[.5,1],
                            range:[0.55+offset,.1*this.screen], 
                            progress:val,
                        },
                    });
                    this.mainSize10Style = this.$parent.tweenCss({
                        scale:{
                            fromTo:[0.2,1],
                            range:[0.6+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[0.6+offset,.05*this.screen], 
                            progress:val,
                        },
                    });
                    this.mainSize11Style = this.$parent.tweenCss({
                        scale:{
                            fromTo:[0.2,1],
                            range:[0.63+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[0.63+offset,.05*this.screen], 
                            progress:val,
                        },
                    });
                    this.mainText10Style = this.$parent.tweenCss({
                        scale:{
                            fromTo:[0.2,1],
                            range:[0.62+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[0.62+offset,.05*this.screen], 
                            progress:val,
                        },
                    });
                    this.mainText11Style = this.$parent.tweenCss({
                        scale:{
                            fromTo:[0.2,1],
                            range:[0.65+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[0.65+offset,.05*this.screen], 
                            progress:val,
                        },
                    });
                }
            }
        },
        data(){
            return{
                mainBgStyle:null,
                titleBgStyle:null,
                titleTextStyle:null,
                titleNumStyle:null,
                mainType0Style:null,
                mainSize00Style:null,
                mainSize01Style:null,
                mainbottom0Style:null,
                mainText00Style:null,
                mainText01Style:null,
            
                mainType1Style:null,
                mainSize10Style:null,
                mainSize11Style:null,
                mainbottom1Style:null,
                mainText10Style:null,
                mainText11Style:null,
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
    .ps-532{
        position:relative;
        width:640rpx;
        height:1671rpx;
        .chart-main{
            overflow: hidden;
            .bottom{
                transform-origin: center top;
            }
            .size{
                transform-origin: center bottom;
            }
        }
        .ps-534{
            position:absolute;
            left:41.25%;
            top:8.55775%;
            margin-left:-264rpx;
            margin-top:-143rpx;
            width:528rpx;
            height:286rpx;
            .ps-123{
                position:absolute;
                left:89.583333%;
                top:79.72028%;
                background:url("../assets/num02.ps-123.png") no-repeat center;
            }
            .ps-21{
                position:absolute;
                left:48.200758%;
                top:47.552448%;
                background:url("../assets/text.ps-21.png") no-repeat center;
            }
            .ps-538{
                position:absolute;
                left:45.170455%;
                top:38.986014%;
                background:url("../assets/bg1.ps-538.png") no-repeat center;
            }
        }
        .ps-540{
            position:absolute;
            left:50%;
            top:60.801915%;
            margin-left:-320rpx;
            margin-top:-655rpx;
            width:640rpx;
            height:1310rpx;
            .ps-544{
                position:absolute;
                left:50%;
                top:25.114504%;
                background:url("../assets/bg.ps-546.png") no-repeat center;
                background-image: none;
                .bg{
                    position: absolute;
                    top: 0;left: 0;
                    background:url("../assets/bg.ps-546.png") no-repeat center;
                }
                .ps-56{
                    position:absolute;
                    left:24.921875%;
                    top:8.738602%;
                    background:url("../assets/type.ps-56.png") no-repeat center;
                }
                .ps-548{
                    position:absolute;
                    left:50%;
                    top:53.191489%;
                    margin-left:-256rpx;
                    margin-top:-208rpx;
                    width:512rpx;
                    height:416rpx;
                    .ps-550{
                        position:absolute;
                        left:54.003906%;
                        top:44.711538%;
                        margin-left:-140.5rpx;
                        margin-top:-186rpx;
                        width:281rpx;
                        height:372rpx;
                        .ps-552{
                            position:absolute;
                            left:18.505338%;
                            top:64.247312%;
                            margin-left:-52rpx;
                            margin-top:-133rpx;
                            width:104rpx;
                            height:266rpx;
                            .ps-554{
                                position:absolute;
                                left:50%;
                                top:6.015038%;
                                background:url("../assets/text.ps-554.png") no-repeat center;
                            }
                            .ps-556{
                                position:absolute;
                                left:37.5%;
                                top:59.586466%;
                                background:url("../assets/size.ps-556.png") no-repeat center;
                            }
                        }
                        .ps-558{
                            position:absolute;
                            left:74.733096%;
                            top:50%;
                            margin-left:-71rpx;
                            margin-top:-186rpx;
                            width:142rpx;
                            height:372rpx;
                            .ps-560{
                                position:absolute;
                                left:50%;
                                top:6.989247%;
                                background:url("../assets/text.ps-560.png") no-repeat center;
                            }
                            .ps-103{
                                position:absolute;
                                left:38.732394%;
                                top:59.946237%;
                                background:url("../assets/size.ps-103.png") no-repeat center;
                            }
                        }
                    }
                    .ps-67{
                        position:absolute;
                        left:50%;
                        top:94.471154%;
                        background:url("../assets/bottom.ps-67.png") no-repeat center;
                    }
                }
                .ps-562{
                    position:absolute;
                    left:24.296875%;
                    top:93.009119%;
                    background:url("../assets/date.ps-562.png") no-repeat center;
                }
            }
            .ps-542{
                position:absolute;
                left:45%;
                top:78.664122%;
                margin-left:-288rpx;
                margin-top:-279.5rpx;
                width:576rpx;
                height:559rpx;
                .ps-105{
                    position:absolute;
                    left:27.690972%;
                    top:5.724508%;
                    background:url("../assets/type.ps-105.png") no-repeat center;
                }
                .ps-564{
                    position:absolute;
                    left:55.555556%;
                    top:54.740608%;
                    margin-left:-256rpx;
                    margin-top:-193rpx;
                    width:512rpx;
                    height:386rpx;
                    .ps-568{
                        position:absolute;
                        left:53.417969%;
                        top:44.170984%;
                        margin-left:-136.5rpx;
                        margin-top:-170.5rpx;
                        width:273rpx;
                        height:341rpx;
                        .ps-570{
                            position:absolute;
                            left:18.864469%;
                            top:62.463343%;
                            margin-left:-51.5rpx;
                            margin-top:-128rpx;
                            width:103rpx;
                            height:256rpx;
                            .ps-574{
                                position:absolute;
                                left:50%;
                                top:6.25%;
                                background:url("../assets/text.ps-574.png") no-repeat center;
                            }
                            .ps-110{
                                position:absolute;
                                left:36.893204%;
                                top:58.789063%;
                                background:url("../assets/size.ps-110.png") no-repeat center;
                            }
                        }
                        .ps-572{
                            position:absolute;
                            left:74.358974%;
                            top:50%;
                            margin-left:-70rpx;
                            margin-top:-170.5rpx;
                            width:140rpx;
                            height:341rpx;
                            .ps-576{
                                position:absolute;
                                left:50%;
                                top:7.624633%;
                                background:url("../assets/text.ps-576.png") no-repeat center;
                            }
                            .ps-114{
                                position:absolute;
                                left:42.5%;
                                top:60.557185%;
                                background:url("../assets/size.ps-114.png") no-repeat center;
                            }
                        }
                    }
                    .ps-108{
                        position:absolute;
                        left:50%;
                        top:93.911917%;
                        background:url("../assets/bottom.ps-108.png") no-repeat center;
                    }
                }
                .ps-566{
                    position:absolute;
                    left:26.996528%;
                    top:98.568873%;
                    background:url("../assets/date.ps-566.png") no-repeat center;
                }
            }
        }
    }
</style>