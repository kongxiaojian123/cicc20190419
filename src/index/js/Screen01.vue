<template>
    <div class="screen01 ps-436">
        <div class="main ps-444">
            <div class="type02 ps-468">
                <div class="date ps-476"></div>
                <div class="chart ps-474">
                    <div class="bottom ps-478" :style="mainBottom02Style"></div>
                    <div class="chart-main ps-480">
                        <div class="item1 ps-484">
                            <div class="size ps-492" :style="mainSize21Style"></div>
                            <div class="text ps-490" :style="mainText21Style"></div>
                        </div>
                        <div class="item0 ps-482">
                            <div class="size ps-488" :style="mainSize20Style"></div>
                            <div class="text ps-486" :style="mainText20Style"></div>
                        </div>
                    </div>
                </div>
                <div class="summary ps-472" :style="mainSummary02Style"></div>
                <div class="type ps-55" :style="mainType02Style"></div>
            </div>
            <div class="type01 ps-470">
                <div class="bg" :style="mainBgStyle"></div>
                <div class="date ps-448"></div>
                <div class="chart ps-454">
                    <div class="bottom ps-452" :style="mainBottom01Style"></div>
                    <div class="chart-main ps-456">
                        <div class="item1 ps-460">
                            <div class="size ps-23" :style="mainSize11Style"></div>
                            <div class="text ps-464" :style="mainText11Style"></div>
                        </div>
                        <div class="item0 ps-458">
                            <div class="size ps-22" :style="mainSize10Style"></div>
                            <div class="text ps-462" :style="mainText10Style"></div>
                        </div>
                    </div>
                </div>
                <div class="summary ps-450" :style="mainSummary01Style"></div>
                <div class="type ps-48" :style="mainType01Style"></div>
            </div>
        </div>
        <div class="title ps-438">
            <div class="bg1 ps-5" :style="titleBgStyle"></div>
            <div class="text ps-442" :style="titleTextStyle"></div>
            <div class="num_01 ps-120" :style="titleNumStyle"></div>
        </div>
        </div>
</template>
<script >
    export default {
        props:['progress','screen'],
        watch:{
            progress(val){
                this.titleTextStyle = this.$parent.tweenCss({
                    translateX:{
                        fromTo:[-100,0],
                        range:[0,.3*this.screen],
                        progress:val,
                        easing:'easeQuadOut'
                    },
                });
                this.titleBgStyle = this.$parent.tweenCss({
                    translateX:{
                        fromTo:[100,-45],
                        range:[0,1*this.screen],
                        progress:val,
                    },
                    translateY:{
                        fromTo:[45,-45],
                        range:[0,1*this.screen],
                        progress:val,
                    },
                });
                this.titleNumStyle = this.$parent.tweenCss({
                    translateX:{
                        fromTo:[-130,160],
                        range:[0,1.2*this.screen],
                        progress:val,
                    },
                    translateY:{
                        fromTo:[-30,100],
                        range:[0,1.2*this.screen],
                        progress:val, 
                    },
                    scale:{
                        fromTo:[1.5,1],
                        range:[0,.6*this.screen],
                        progress:val,
                        easing:'easeQuadOut'
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
                    this.mainType01Style = this.$parent.tweenCss({
                        translateX:{
                            fromTo:[-130,0],
                            range:[.27+offset,.25*this.screen],
                            progress:val, 
                            easing:'easeQuadOut'
                        },
                    });
                    this.mainSummary01Style = this.$parent.tweenCss({
                        opacity:{
                            fromTo:[0,1],
                            range:[.38+offset,.25*this.screen],
                            progress:val,
                        },
                        scale:{
                            fromTo:[1.6,1],
                            range:[.38+offset,.25*this.screen],
                            progress:val, 
                            easing:'easeBackOut'
                        },
                    });
                    this.mainBottom01Style = this.$parent.tweenCss({
                        opacity:{
                            fromTo:[0,1],
                            range:[.55+offset,.1*this.screen],
                            progress:val,
                        },
                        translateX:{
                            fromTo:[-30,0],
                            range:[.55+offset,.1*this.screen],
                            progress:val,
                        },
                    });
                    this.mainSize10Style = this.$parent.tweenCss({
                        translateX:{
                            fromTo:[-150,0],
                            range:[.6+offset,.1*this.screen],
                            progress:val,
                            easing:'easeQuadOut'
                        },
                        translateY:{
                            fromTo:[150,0],
                            range:[.6+offset,.1*this.screen],
                            progress:val,
                            easing:'easeQuadOut'
                        },
                    });
                    this.mainSize11Style = this.$parent.tweenCss({
                        translateX:{
                            fromTo:[-240,0],
                            range:[.63+offset,.1*this.screen],
                            progress:val,
                            easing:'easeQuadOut'
                        },
                        translateY:{
                            fromTo:[240,0],
                            range:[.63+offset,.1*this.screen],
                            progress:val,
                            easing:'easeQuadOut'
                        },
                    });
                    this.mainText10Style = this.$parent.tweenCss({
                        opacity:{
                            fromTo:[0,1],
                            range:[.63+offset,.1*this.screen],
                            progress:val,
                        },
                        translateY:{
                            fromTo:[30,0],
                            range:[.63+offset,.1*this.screen],
                            progress:val,
                        },
                    });
                    this.mainText11Style = this.$parent.tweenCss({
                        opacity:{
                            fromTo:[0,1],
                            range:[.66+offset,.1*this.screen],
                            progress:val,
                        },
                        translateY:{
                            fromTo:[30,0],
                            range:[.66+offset,.1*this.screen],
                            progress:val,
                        },
                    });
                }
                {
                    const offset = 0.4;
                    this.mainType02Style = this.$parent.tweenCss({
                        translateX:{
                            fromTo:[-130,0],
                            range:[.27+offset,.25*this.screen],
                            progress:val, 
                            easing:'easeQuadOut'
                        },
                    });
                    this.mainSummary02Style = this.$parent.tweenCss({
                        opacity:{
                            fromTo:[0,1],
                            range:[.38+offset,.25*this.screen],
                            progress:val,
                        },
                        scale:{
                            fromTo:[1.6,1],
                            range:[.38+offset,.25*this.screen],
                            progress:val, 
                            easing:'easeBackOut'
                        },
                    });
                    this.mainBottom02Style = this.$parent.tweenCss({
                        opacity:{
                            fromTo:[0,1],
                            range:[.55+offset,.1*this.screen],
                            progress:val,
                        },
                        translateX:{
                            fromTo:[-30,0],
                            range:[.55+offset,.1*this.screen],
                            progress:val,
                        },
                    });
                    this.mainSize20Style = this.$parent.tweenCss({
                        translateX:{
                            fromTo:[-170,0],
                            range:[.6+offset,.1*this.screen],
                            progress:val,
                            easing:'easeQuadOut'
                        },
                        translateY:{
                            fromTo:[170,0],
                            range:[.6+offset,.1*this.screen],
                            progress:val,
                            easing:'easeQuadOut'
                        },
                    });
                    this.mainSize21Style = this.$parent.tweenCss({
                        translateX:{
                            fromTo:[-240,0],
                            range:[.63+offset,.1*this.screen],
                            progress:val,
                            easing:'easeQuadOut'
                        },
                        translateY:{
                            fromTo:[240,0],
                            range:[.63+offset,.1*this.screen],
                            progress:val,
                            easing:'easeQuadOut'
                        },
                    });
                    this.mainText20Style = this.$parent.tweenCss({
                        opacity:{
                            fromTo:[0,1],
                            range:[.63+offset,.1*this.screen],
                            progress:val,
                        },
                        translateY:{
                            fromTo:[30,0],
                            range:[.63+offset,.1*this.screen],
                            progress:val,
                        },
                    });
                    this.mainText21Style = this.$parent.tweenCss({
                        opacity:{
                            fromTo:[0,1],
                            range:[.66+offset,.1*this.screen],
                            progress:val,
                        },
                        translateY:{
                            fromTo:[30,0],
                            range:[.66+offset,.1*this.screen],
                            progress:val,
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
                mainType01Style:null,
                mainSummary01Style:null,
                mainBottom01Style:null,
                mainSize10Style:null,
                mainSize11Style:null,
                mainText10Style:null,
                mainText11Style:null,


                mainType02Style:null,
                mainSummary02Style:null,
                mainBottom02Style:null,
                mainSize20Style:null,
                mainSize21Style:null,
                mainText20Style:null,
                mainText21Style:null
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
    .ps-436{
        position:relative;
        width:640rpx;
        height:1719rpx;
        .chart-main{
            overflow: hidden;
        }
        .ps-438{
            position:absolute;
            left:38.90625%;
            top:7.678883%;
            margin-left:-249rpx;
            margin-top:-132rpx;
            width:498rpx;
            height:264rpx;
            .ps-120{
                position:absolute;
                left:82.630522%;
                top:21.969697%;
                background:url("../assets/num_01.ps-120.png") no-repeat center;
            }
            .ps-442{
                position:absolute;
                left:50%;
                top:63.257576%;
                background:url("../assets/text.ps-442.png") no-repeat center;
            }
            .ps-5{
                position:absolute;
                left:57.128514%;
                top:73.295455%;
                background:url("../assets/bg1.ps-5.png") no-repeat center;
            }
        }
        .ps-444{
            position:absolute;
            left:50%;
            top:61.925538%;
            margin-left:-320rpx;
            margin-top:-654.5rpx;
            width:640rpx;
            height:1309rpx;
            .ps-470{
                position:absolute;
                left:50%;
                top:26.165011%;
                background:url("../assets/bg.ps-446.png") no-repeat center;
                background-image: none;
                .bg{
                    position: absolute;
                    top: 0;
                    left: 0;
                    background:url("../assets/bg.ps-446.png") no-repeat center;
                }
                .ps-48{
                    position:absolute;
                    left:24.921875%;
                    top:12.408759%;
                    background:url("../assets/type.ps-48.png") no-repeat center;
                }
                .ps-450{
                    position:absolute;
                    left:32.65625%;
                    top:26.20438%;
                    background:url("../assets/summary.ps-450.png") no-repeat center;
                }
                .ps-454{
                    position:absolute;
                    left:50.15625%;
                    top:60%;
                    margin-left:-258rpx;
                    margin-top:-168rpx;
                    width:516rpx;
                    height:336rpx;
                    .ps-456{
                        position:absolute;
                        left:55.329457%;
                        top:43.154762%;
                        margin-left:-230.5rpx;
                        margin-top:-145rpx;
                        width:461rpx;
                        height:290rpx;
                        .ps-458{
                            position:absolute;
                            left:20.824295%;
                            top:66.551724%;
                            margin-left:-96rpx;
                            margin-top:-97rpx;
                            width:192rpx;
                            height:194rpx;
                            .ps-462{
                                position:absolute;
                                left:77.34375%;
                                top:8.247423%;
                                background:url("../assets/text.ps-462.png") no-repeat center;
                            }
                            .ps-22{
                                position:absolute;
                                left:48.177083%;
                                top:62.113402%;
                                background:url("../assets/size.ps-22.png") no-repeat center;
                            }
                        }
                        .ps-460{
                            position:absolute;
                            left:66.37744%;
                            top:50%;
                            margin-left:-155rpx;
                            margin-top:-145rpx;
                            width:310rpx;
                            height:290rpx;
                            .ps-464{
                                position:absolute;
                                left:77.258065%;
                                top:8.965517%;
                                background:url("../assets/text.ps-464.png") no-repeat center;
                            }
                            .ps-23{
                                position:absolute;
                                left:41.612903%;
                                top:62.068966%;
                                background:url("../assets/size.ps-23.png") no-repeat center;
                            }
                        }
                    }
                    .ps-452{
                        position:absolute;
                        left:49.612403%;
                        top:92.857143%;
                        background:url("../assets/bottom.ps-452.png") no-repeat center;
                    }
                }
                .ps-448{
                    position:absolute;
                    left:24.296875%;
                    top:93.722628%;
                    background:url("../assets/date.png") no-repeat center;
                }
            }
            .ps-468{
                position:absolute;
                left:44.921875%;
                top:78.151261%;
                margin-left:-287.5rpx;
                margin-top:-286rpx;
                width:575rpx;
                height:572rpx;
                .ps-55{
                    position:absolute;
                    left:27.73913%;
                    top:5.594406%;
                    background:url("../assets/type.ps-55.png") no-repeat center;
                }
                .ps-472{
                    position:absolute;
                    left:36.26087%;
                    top:22.29021%;
                    background:url("../assets/summary.ps-472.png") no-repeat center;
                }
                .ps-474{
                    position:absolute;
                    left:55.478261%;
                    top:59.702797%;
                    margin-left:-256rpx;
                    margin-top:-161.5rpx;
                    width:512rpx;
                    height:323rpx;
                    .ps-480{
                        position:absolute;
                        left:53.417969%;
                        top:42.879257%;
                        margin-left:-218.5rpx;
                        margin-top:-138.5rpx;
                        width:437rpx;
                        height:277rpx;
                        .ps-482{
                            position:absolute;
                            left:25.743707%;
                            top:61.913357%;
                            margin-left:-112.5rpx;
                            margin-top:-105.5rpx;
                            width:225rpx;
                            height:211rpx;
                            .ps-486{
                                position:absolute;
                                left:80.666667%;
                                top:7.582938%;
                                background:url("../assets/text.ps-486.png") no-repeat center;
                            }
                            .ps-488{
                                position:absolute;
                                left:45.333333%;
                                top:60.900474%;
                                background:url("../assets/size.ps-488.png") no-repeat center;
                            }
                        }
                        .ps-484{
                            position:absolute;
                            left:67.84897%;
                            top:50%;
                            margin-left:-140.5rpx;
                            margin-top:-138.5rpx;
                            width:281rpx;
                            height:277rpx;
                            .ps-490{
                                position:absolute;
                                left:79.537367%;
                                top:9.386282%;
                                background:url("../assets/text.ps-490.png") no-repeat center;
                            }
                            .ps-492{
                                position:absolute;
                                left:44.30605%;
                                top:62.093863%;
                                background:url("../assets/size.ps-492.png") no-repeat center;
                            }
                        }
                    }
                    .ps-478{
                        position:absolute;
                        left:50%;
                        top:92.569659%;
                        background:url("../assets/bottom.ps-478.png") no-repeat center;
                    }
                }
                .ps-476{
                    position:absolute;
                    left:27.043478%;
                    top:98.601399%;
                    background:url("../assets/date.png") no-repeat center;
                }
            }
        }
    }
</style>