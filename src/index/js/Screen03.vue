<template>
    <div class="screen03 ps-578">
        <div class="main ps-584">
            <div class="type02 ps-588">
                <div class="date ps-592"></div>
                <div class="chart ps-1094" :style="mainChart1style">
                    <div class="chart-main ps-1093">
                        <div class="item2 ps-1078">
                            <div class="size ps-1076">
                                <div class="bg ps-347"><span :style="mainSize12Style"></span></div>
                                <div class="mask ps-1111"></div>
                            </div>
                            <div class="text ps-1095" :style="mainText12Style"></div>
                        </div>
                        <div class="item1 ps-1085">
                            <div class="size ps-1083">
                                <div class="bg ps-251"><span :style="mainSize11Style"></span></div>
                                <div class="mask ps-1113"></div>
                            </div>
                            <div class="text ps-1097" :style="mainText11Style"></div>
                        </div>
                        <div class="item0 ps-1092">
                            <div class="size ps-1090">
                                <div class="bg ps-195"><span :style="mainSize10Style"></span></div>
                                <div class="mask ps-1112"></div>
                            </div>
                            <div class="text ps-1099" :style="mainText10Style"></div>
                        </div>
                    </div>
                </div>
                <div class="type ps-96" :style="mainType1style"></div>
            </div>
            <div class="type01 ps-586">
                <div class="date ps-590"></div>
                <div class="chart ps-1041" :style="mainChart0style">
                    <div class="chart-main ps-1043">
                        <div class="item2 ps-1055">
                            <div class="size ps-1059">
                                <div class="bg ps-77"><span :style="mainSize02Style"></span></div>
                                <div class="mask ps-1110"></div>
                            </div>
                            <div class="text ps-1063" :style="mainText02Style"></div>
                        </div>
                        <div class="item1 ps-1053">
                            <div class="size ps-1057">
                                <div class="bg ps-1067"><span :style="mainSize01Style"></span></div>
                                <div class="mask ps-1109"></div>
                            </div>
                            <div class="text ps-1061" :style="mainText01Style"></div>
                        </div>
                        <div class="item0 ps-1045">
                            <div class="size ps-1047">
                                <div class="bg ps-1051"><span :style="mainSize00Style"></span></div>
                                <div class="mask ps-1108"></div>
                            </div>
                            <div class="text ps-1049" :style="mainText00Style"></div>
                        </div>
                    </div>
                </div>
                <div class="type ps-89" :style="mainType0style"></div>
            </div>
        </div>
        <div class="title ps-580">
            <div class="bg1 ps-582" :style="titleBgStyle"></div>
            <div class="text ps-88" :style="titleTextStyle"></div>
            <div class="num03 ps-126" :style="titleNumStyle"></div>
        </div>
        </div>
</template>
<script >
    export default {
        props:['progress','screen'],
        watch:{
            progress(val){
                this.titleTextStyle = this.$parent.tweenCss({
                    opacity:{
                        fromTo:[0,1],
                        range:[.05,.2*this.screen], 
                        progress:val,
                    },
                    rotateZ:{
                        fromTo:[-10,0],
                        range:[.05,.3*this.screen], 
                        progress:val,
                        easing:'easeQuadOut'
                    },
                });
                this.titleBgStyle = this.$parent.tweenCss({
                    opacity:{
                        fromTo:[0,1],
                        range:[.15,.1*this.screen], 
                        progress:val,
                    },
                    rotateZ:{
                        fromTo:[8,0],
                        range:[.15,.3*this.screen], 
                        progress:val,
                        easing:'easeQuadOut'
                    },
                    translateX:{
                        fromTo:[0,-100],
                        range:[.15,1.2], 
                        progress:val,
                    },
                });
                this.titleNumStyle = this.$parent.tweenCss({
                    translateY:{
                        fromTo:[-150,150],
                        range:[-.1,1.3], 
                        progress:val,
                    },
                    translateX:{
                        fromTo:[-30,30],
                        range:[-.1,1.3], 
                        progress:val,
                    },
                    scale:{
                        fromTo:[1.5,1],
                        range:[0,.3*this.screen], 
                        progress:val,
                        easing:'easeQuadOut'
                    }, 
                });
                {
                    const offset = 0;
                    this.mainType0style = this.$parent.tweenCss({
                        translateX:{
                            fromTo:[-100,0],
                            range:[.23+offset,.25*this.screen], 
                            progress:val,
                            easing:'easeBounceOut',
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[.23+offset,.1*this.screen], 
                            progress:val,
                        },
                    });
                    this.mainChart0style = this.$parent.tweenCss({
                        scale:{
                            fromTo:[.3,1],
                            range:[.48+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[.48+offset,.05*this.screen], 
                            progress:val,
                        },
                    });
                    this.mainSize00Style = this.$parent.tweenCss({
                        translateY:{
                            fromTo:[85,0],
                            range:[.52+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                    });
                    this.mainSize01Style = this.$parent.tweenCss({
                        translateY:{
                            fromTo:[160,0],
                            range:[.52+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                    });
                    this.mainSize02Style = this.$parent.tweenCss({
                        translateY:{
                            fromTo:[225,0],
                            range:[.56+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                    });
                    this.mainText00Style = this.$parent.tweenCss({
                        scale:{
                            fromTo:[.5,1],
                            range:[.54+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[.54+offset,.05*this.screen], 
                            progress:val,
                        }
                    });
                    this.mainText01Style = this.$parent.tweenCss({
                        scale:{
                            fromTo:[.5,1],
                            range:[.54+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[.54+offset,.05*this.screen], 
                            progress:val,
                        }
                    });
                    this.mainText02Style = this.$parent.tweenCss({
                        scale:{
                            fromTo:[.5,1],
                            range:[.58+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[.58+offset,.05*this.screen], 
                            progress:val,
                        }
                    });
                }
                {
                    const offset = 0.41;
                    this.mainType1style = this.$parent.tweenCss({
                        translateX:{
                            fromTo:[-100,0],
                            range:[.23+offset,.25*this.screen], 
                            progress:val,
                            easing:'easeBounceOut',
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[.23+offset,.1*this.screen], 
                            progress:val,
                        },
                    });
                    this.mainChart1style = this.$parent.tweenCss({
                        scale:{
                            fromTo:[.3,1],
                            range:[.48+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[.48+offset,.05*this.screen], 
                            progress:val,
                        },
                    });
                    this.mainSize10Style = this.$parent.tweenCss({
                        translateY:{
                            fromTo:[85,0],
                            range:[.52+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                    });
                    this.mainSize11Style = this.$parent.tweenCss({
                        translateY:{
                            fromTo:[160,0],
                            range:[.52+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                    });
                    this.mainSize12Style = this.$parent.tweenCss({
                        translateY:{
                            fromTo:[225,0],
                            range:[.56+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                    });
                    this.mainText10Style = this.$parent.tweenCss({
                        scale:{
                            fromTo:[.5,1],
                            range:[.54+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[.54+offset,.05*this.screen], 
                            progress:val,
                        }
                    });
                    this.mainText11Style = this.$parent.tweenCss({
                        scale:{
                            fromTo:[.5,1],
                            range:[.54+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[.54+offset,.05*this.screen], 
                            progress:val,
                        }
                    });
                    this.mainText12Style = this.$parent.tweenCss({
                        scale:{
                            fromTo:[.5,1],
                            range:[.58+offset,.1*this.screen], 
                            progress:val,
                            easing:'easeBackOut',
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[.58+offset,.05*this.screen], 
                            progress:val,
                        }
                    });
                }
            }
        },
        data(){
            return{
                titleTextStyle:null,
                titleBgStyle:null,
                titleNumStyle:null,
                mainType0style:null,
                mainChart0style:null,
                mainType1style:null,
                mainChart1style:null,

                mainSize00Style:null,
                mainSize01Style:null,
                mainSize02Style:null,
                mainText00Style:null,
                mainText01Style:null,
                mainText02Style:null,

                mainSize10Style:null,
                mainSize11Style:null,
                mainSize12Style:null,
                mainText10Style:null,
                mainText11Style:null,
                mainText12Style:null,
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
    .ps-578{
        position:relative;
        width:572rpx;
        height:1825rpx;
        .title{
            .text{
                transform-origin: -200% 300%; 
            }
            .bg1{
                transform-origin: 200% 300%; 
            }
        }
        .main{
            .bg{
                overflow: hidden;
                background: none !important;
                padding-top: 20rpx;
                span{
                    position: absolute;
                    bottom: 0;left: 0;
                }
            }
        }
        .ps-580{
            position:absolute;
            left:52.185315%;
            top:7.534247%;
            margin-left:-273.5rpx;
            margin-top:-137.5rpx;
            width:547rpx;
            height:275rpx;
            .ps-126{
                position:absolute;
                left:89.945155%;
                top:21.090909%;
                background:url("../assets/num03.ps-126.png") no-repeat center;
            }
            .ps-88{
                position:absolute;
                left:46.526508%;
                top:60.545455%;
                background:url("../assets/text.ps-88.png") no-repeat center;
            }
            .ps-582{
                position:absolute;
                left:44.058501%;
                top:60.545455%;
                background:url("../assets/bg1.ps-582.png") no-repeat center;
            }
        }
        .ps-584{
            position:absolute;
            left:48.426573%;
            top:60%;
            margin-left:-277rpx;
            margin-top:-730rpx;
            width:554rpx;
            height:1460rpx;
            .ps-586{
                position:absolute;
                left:50%;
                top:23.219178%;
                margin-left:-277rpx;
                margin-top:-339rpx;
                width:554rpx;
                height:678rpx;
                .ps-89{
                    position:absolute;
                    left:49.097473%;
                    top:4.719764%;
                    background:url("../assets/type.ps-89.png") no-repeat center;
                }
                .ps-1041{
                    position:absolute;
                    left:61.01083%;
                    top:56.415929%;
                    background:url("../assets/bg.ps-1105.png") no-repeat center;
                    .ps-1043{
                        position:absolute;
                        left:57.75463%;
                        top:43.839836%;
                        margin-left:-171.5rpx;
                        margin-top:-213.5rpx;
                        width:343rpx;
                        height:427rpx;
                        .ps-1045{
                            position:absolute;
                            left:17.201166%;
                            top:81.498829%;
                            margin-left:-59rpx;
                            margin-top:-79rpx;
                            width:118rpx;
                            height:158rpx;
                            .ps-1049{
                                position:absolute;
                                left:50%;
                                top:11.075949%;
                                background:url("../assets/text.ps-1049.png") no-repeat center;
                            }
                            .ps-1047{
                                position:absolute;
                                left:57.20339%;
                                top:62.025316%;
                                margin-left:-24.5rpx;
                                margin-top:-60rpx;
                                width:49rpx;
                                height:120rpx;
                                .ps-1108{
                                    position:absolute;
                                    left:50%;
                                    top:92.5%;
                                    background:url("../assets/mask.png") no-repeat center;
                                }
                                .ps-1051{
                                    position:absolute;
                                    left:51.020408%;
                                    top:49.166667%;
                                    margin-top: -20-118/2rpx;
                                    background:url("../assets/bg.ps-1051.png") no-repeat center;
                                    span{
                                    background:url("../assets/bg.ps-1051.png") no-repeat center;
                                    }
                                }
                            }
                        }
                        .ps-1053{
                            position:absolute;
                            left:41.982507%;
                            top:60.187354%;
                            margin-left:-59rpx;
                            margin-top:-121rpx;
                            width:118rpx;
                            height:242rpx;
                            .ps-1061{
                                position:absolute;
                                left:50%;
                                top:7.231405%;
                                background:url("../assets/text.ps-1061.png") no-repeat center;
                            }
                            .ps-1057{
                                position:absolute;
                                left:52.118644%;
                                top:59.917355%;
                                margin-left:-24.5rpx;
                                margin-top:-97rpx;
                                width:49rpx;
                                height:194rpx;
                                .ps-1109{
                                    position:absolute;
                                    left:50%;
                                    top:95.360825%;
                                    background:url("../assets/mask.png") no-repeat center;
                                }
                                .ps-1067{
                                    position:absolute;
                                    left:48.979592%;
                                    top:49.484536%;
                                    margin-top: -20-192/2rpx;
                                    background:url("../assets/bg.ps-1067.png") no-repeat center;
                                    span{
                                    background:url("../assets/bg.ps-1067.png") no-repeat center;
                                    }
                                }
                            }
                        }
                        .ps-1055{
                            position:absolute;
                            left:71.137026%;
                            top:38.056206%;
                            margin-left:-99rpx;
                            margin-top:-162.5rpx;
                            width:198rpx;
                            height:325rpx;
                            .ps-1063{
                                position:absolute;
                                left:50%;
                                top:9.076923%;
                                background:url("../assets/text.ps-1063.png") no-repeat center;
                            }
                            .ps-1059{
                                position:absolute;
                                left:42.676768%;
                                top:60.461538%;
                                margin-left:-24.5rpx;
                                margin-top:-128.5rpx;
                                width:49rpx;
                                height:257rpx;
                                .ps-1110{
                                    position:absolute;
                                    left:50%;
                                    top:96.498054%;
                                    background:url("../assets/mask.png") no-repeat center;
                                }
                                .ps-77{
                                    position:absolute;
                                    left:48.979592%;
                                    top:49.805447%;
                                    margin-top: -20-256/2rpx;
                                    background:url("../assets/bg.ps-77.png") no-repeat center;
                                    span{
                                        background:url("../assets/bg.ps-77.png") no-repeat center;
                                    }
                                }
                            }
                        }
                    }
                }
                .ps-590{
                    position:absolute;
                    left:28.068592%;
                    top:98.820059%;
                    background:url("../assets/date.png") no-repeat center;
                }
            }
            .ps-588{
                position:absolute;
                left:50%;
                top:76.164384%;
                margin-left:-277rpx;
                margin-top:-348rpx;
                width:554rpx;
                height:696rpx;
                .ps-96{
                    position:absolute;
                    left:49.097473%;
                    top:4.597701%;
                    background:url("../assets/type.ps-96.png") no-repeat center;
                }
                .ps-1094{
                    position:absolute;
                    left:61.01083%;
                    top:56.393678%;
                    background:url("../assets/bg.ps-1105.png") no-repeat center;
                    .ps-1093{
                        position:absolute;
                        left:54.282407%;
                        top:46.201232%;
                        margin-left:-114.5rpx;
                        margin-top:-202rpx;
                        width:229rpx;
                        height:404rpx;
                        .ps-1092{
                            position:absolute;
                            left:10.917031%;
                            top:83.539604%;
                            margin-left:-25rpx;
                            margin-top:-66.5rpx;
                            width:50rpx;
                            height:133rpx;
                            .ps-1099{
                                position:absolute;
                                left:45%;
                                top:10.902256%;
                                background:url("../assets/text.ps-1099.png") no-repeat center;
                            }
                            .ps-1090{
                                position:absolute;
                                left:51%;
                                top:67.293233%;
                                margin-left:-24.5rpx;
                                margin-top:-43.5rpx;
                                width:49rpx;
                                height:87rpx;
                                .ps-1112{
                                    position:absolute;
                                    left:50%;
                                    top:89.655172%;
                                    background:url("../assets/mask.png") no-repeat center;
                                }
                                .ps-195{
                                    position:absolute;
                                    left:48.979592%;
                                    top:48.275862%;
                                    margin-top: -20-84/2rpx;
                                    background:url("../assets/bg.ps-195.png") no-repeat center;
                                    span{
                                        background:url("../assets/bg.ps-195.png") no-repeat center;
                                    }
                                }
                            }
                        }
                        .ps-1085{
                            position:absolute;
                            left:45.196507%;
                            top:63.613861%;
                            margin-left:-25.5rpx;
                            margin-top:-98rpx;
                            width:51rpx;
                            height:196rpx;
                            .ps-1097{
                                position:absolute;
                                left:45.098039%;
                                top:7.397959%;
                                background:url("../assets/text.ps-1097.png") no-repeat center;
                            }
                            .ps-1083{
                                position:absolute;
                                left:51.960784%;
                                top:63.265306%;
                                margin-left:-24.5rpx;
                                margin-top:-72rpx;
                                width:49rpx;
                                height:144rpx;
                                .ps-1113{
                                    position:absolute;
                                    left:50%;
                                    top:93.75%;
                                    background:url("../assets/mask.png") no-repeat center;
                                }
                                .ps-251{
                                    position:absolute;
                                    left:46.938776%;
                                    top:48.958333%;
                                    margin-top: -20-141/2rpx;
                                    background:url("../assets/bg.ps-251.png") no-repeat center;
                                    span{
                                        background:url("../assets/bg.ps-251.png") no-repeat center;
                                    }
                                }
                            }
                        }
                        .ps-1078{
                            position:absolute;
                            left:82.969432%;
                            top:37.376238%;
                            margin-left:-39rpx;
                            margin-top:-151rpx;
                            width:78rpx;
                            height:302rpx;
                            .ps-1095{
                                position:absolute;
                                left:50%;
                                top:8.112583%;
                                background:url("../assets/text.ps-1095.png") no-repeat center;
                            }
                            .ps-1076{
                                position:absolute;
                                left:46.794872%;
                                top:61.589404%;
                                margin-left:-24.5rpx;
                                margin-top:-116rpx;
                                width:49rpx;
                                height:232rpx;
                                .ps-1111{
                                    position:absolute;
                                    left:50%;
                                    top:96.12069%;
                                    background:url("../assets/mask.png") no-repeat center;
                                }
                                .ps-347{
                                    position:absolute;
                                    left:50%;
                                    top:49.353448%;
                                    margin-top: -20-229/2rpx;
                                    background:url("../assets/bg.ps-347.png") no-repeat center;
                                    span{
                                        background:url("../assets/bg.ps-347.png") no-repeat center;
                                    }
                                }
                            }
                        }
                    }
                }
                .ps-592{
                    position:absolute;
                    left:28.068592%;
                    top:98.850575%;
                    background:url("../assets/date.png") no-repeat center;
                }
            }
        }
    }
</style>