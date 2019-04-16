<template>
    <div class="screen04 ps-165">
        <div class="main ps-175">
            <div class="bg2" :style="mainBg2Style"></div>
            <div class="bg1 ps-177"></div>
            <div class="bg0 ps-179"></div>
            <div class="item item05 ps-220">
                <div class="bg ps-15"      :style="item5BgStyle"></div>
                <div class="text14 ps-241" :style="item5Text14Style"></div>
                <div class="text13 ps-240" :style="item5Text13Style"></div>
                <div class="text12 ps-239" :style="item5Text12Style"></div>
                <div class="text11 ps-238" :style="item5Text11Style"></div>
                <div class="text10 ps-237" :style="item5Text10Style"></div>
                <div class="text9 ps-236"  :style="item5Text9Style"></div>
                <div class="text8 ps-235"  :style="item5Text8Style"></div>
                <div class="text7 ps-234"  :style="item5Text7Style"></div>
                <div class="text6 ps-233"  :style="item5Text6Style"></div>
                <div class="text5 ps-232"  :style="item5Text5Style"></div>
                <div class="text4 ps-231"  :style="item5Text4Style"></div>
                <div class="text3 ps-230"  :style="item5Text3Style"></div>
                <div class="text2 ps-229"  :style="item5Text2Style"></div>
                <div class="text1 ps-228"  :style="item5Text1Style"></div>
                <div class="text0 ps-227"  :style="item5Text0Style"></div>
                <div class="type ps-225"   :style="item5TypeStyle"></div>
            </div>
            <div class="item item04 ps-212">
                <div class="bg ps-14" :style="item4BgStyle"></div>
                <div class="text1 ps-217" :style="item4Text1Style"></div>
                <div class="text0 ps-216" :style="item4Text0Style"></div>
                <div class="type ps-214" :style="item4TypeStyle"></div>
            </div>
            <div class="item item03 ps-207">
                <div class="bg ps-13" :style="item3BgStyle"></div>
                <div class="text0 ps-211" :style="item3Text0Style"></div>
                <div class="type ps-209" :style="item3TypeStyle"></div>
            </div>
            <div class="item item02 ps-198">
                <div class="bg ps-12" :style="item2BgStyle"></div>
                <div class="text2 ps-204" :style="item2Text2Style"></div>
                <div class="text1 ps-203" :style="item2Text1Style"></div>
                <div class="text0 ps-202" :style="item2Text0Style"></div>
                <div class="type ps-200" :style="item2TypeStyle"></div>
            </div>
            <div class="item item01 ps-187">
                <div class="bg ps-191" :style="item1BgStyle"></div>
                <div class="text1 ps-194" :style="item1Text1Style"></div>
                <div class="text0 ps-196" :style="item1Text0Style"></div>
                <div class="type ps-189" :style="item1TypeStyle"></div>
            </div>
            <div class="item item00 ps-183">
                <div class="bg ps-43" :style="item0BgStyle"></div>
                <div class="text0 ps-46" :style="item0Text0Style"></div>
                <div class="type ps-185" :style="item0TypeStyle"></div>
            </div>
        </div>
        <div class="title ps-167">
            <div class="bg ps-171" :style="mainBgStyle"></div>
            <div class="text ps-10" :style="mainTextStyle"></div>
            <div class="num04 ps-169" :style="mainNumStyle"></div>
        </div>
        </div>
</template>
<script >
    let pixelScale;
    export default {
        props:['progress','screen'],
        watch:{
            progress(val){
                this.mainNumStyle = this.$parent.tweenCss({
                    translateX:{
                        fromTo:[400,-50],
                        range:[-.1,1.2*this.screen],
                        progress:val,
                        easing:'easeQuadOut'
                    },
                    translateY:{
                        fromTo:[-100,100],
                        range:[0,1.2*this.screen],
                        progress:val,
                    },
                    scale:{
                        fromTo:[2,1],
                        range:[-.05,.5*this.screen], 
                        progress:val,
                        easing:'easeQuadOut'
                    },
                    rotateZ:{
                        fromTo:[-30,0],
                        range:[-.05,.5*this.screen], 
                        progress:val,
                        easing:'easeQuadOut'
                    }
                });
                this.mainBgStyle = this.$parent.tweenCss({
                    translateY:{
                        fromTo:[-100,0],
                        range:[-.02,.5*this.screen],
                        progress:val,
                    },  
                    translateX:{
                        fromTo:[-200,0],
                        range:[0.1,.5*this.screen],
                        progress:val,
                        easing:'easeQuadOut'
                    },
                });
                this.mainTextStyle = this.$parent.tweenCss({
                    opacity:{
                        fromTo:[0,1],
                        range:[.1,.1*this.screen],
                        progress:val,
                    },  
                    translateX:{
                        fromTo:[100,0],
                        range:[0.1,.2*this.screen],
                        progress:val,
                        easing:'easeQuadOut'
                    },
                    translateY:{
                        fromTo:[-80,30],
                        range:[0.1,1*this.screen],
                        progress:val,
                    },
                });
                const bg2Style = this.$parent.tween({
                    data:{
                        fromTo:[0,360],
                        range:[0,5*this.screen],
                        progress:val,
                    },
                }).data;
                this.mainBg2Style = {
                    backgroundPosition:`${-bg2Style*pixelScale}px center`, 
                    transform:`translate3d(0,${(bg2Style-150)*pixelScale*1.5}px,0)`  
                };

                {
                    let offset = 0;
                    this.item0BgStyle = this.$parent.tweenCss({
                        scale:{
                            fromTo:[.3,1],
                            range:[0.2+offset,.2*this.screen],
                            progress:val,
                            easing:'easeBackOut'
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[0.2+offset,.1*this.screen],
                            progress:val,
                        },
                    });
                    this.item0TypeStyle = this.$parent.tweenCss({
                        translateX:{
                            fromTo:[100,0],
                            range:[0.22+offset,.1*this.screen],
                            progress:val,
                            easing:'easeQuadOut'
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[0.22+offset,.1*this.screen],
                            progress:val,
                        },
                    });
                    for(let i=0;i<1;i++){
                        offset+=0.03;
                        this[`item0Text${i}Style`] = this.$parent.tweenCss({
                            translateX:{
                                fromTo:[50,0],
                                range:[0.22+offset,.1*this.screen],
                                progress:val,
                                easing:'easeQuadOut'
                            },
                            opacity:{
                                fromTo:[0,1],
                                range:[0.22+offset,.1*this.screen],
                                progress:val,
                            },
                        });
                    }
                }
                {
                    let offset = 0.1;
                    this.item1BgStyle = this.$parent.tweenCss({
                        scale:{
                            fromTo:[.3,1],
                            range:[0.2+offset,.2*this.screen],
                            progress:val,
                            easing:'easeBackOut'
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[0.2+offset,.1*this.screen],
                            progress:val,
                        },
                    });
                    this.item1TypeStyle = this.$parent.tweenCss({
                        translateX:{
                            fromTo:[-100,0],
                            range:[0.22+offset,.1*this.screen],
                            progress:val,
                            easing:'easeQuadOut'
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[0.22+offset,.1*this.screen],
                            progress:val,
                        },
                    });
                    for(let i=0;i<2;i++){
                        offset+=0.02;
                        this[`item1Text${i}Style`] = this.$parent.tweenCss({
                            translateX:{
                                fromTo:[50,0],
                                range:[0.22+offset,.1*this.screen],
                                progress:val,
                                easing:'easeQuadOut'
                            },
                            opacity:{
                                fromTo:[0,1],
                                range:[0.22+offset,.1*this.screen],
                                progress:val,
                            },
                        });
                    }
                }
                {
                    let offset = 0.21;
                    this.item2BgStyle = this.$parent.tweenCss({
                        scale:{
                            fromTo:[.3,1],
                            range:[0.2+offset,.2*this.screen],
                            progress:val,
                            easing:'easeBackOut'
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[0.2+offset,.1*this.screen],
                            progress:val,
                        },
                    });
                    this.item2TypeStyle = this.$parent.tweenCss({
                        translateX:{
                            fromTo:[100,0],
                            range:[0.22+offset,.1*this.screen],
                            progress:val,
                            easing:'easeQuadOut'
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[0.22+offset,.1*this.screen],
                            progress:val,
                        },
                    });
                    for(let i=0;i<3;i++){
                        offset+=0.02;
                        this[`item2Text${i}Style`] = this.$parent.tweenCss({
                            translateX:{
                                fromTo:[50,0],
                                range:[0.22+offset,.1*this.screen],
                                progress:val,
                                easing:'easeQuadOut'
                            },
                            opacity:{
                                fromTo:[0,1],
                                range:[0.22+offset,.1*this.screen],
                                progress:val,
                            },
                        });
                    }
                }
                {
                    let offset = 0.34;
                    this.item3BgStyle = this.$parent.tweenCss({
                        scale:{
                            fromTo:[.3,1],
                            range:[0.2+offset,.2*this.screen],
                            progress:val,
                            easing:'easeBackOut'
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[0.2+offset,.1*this.screen],
                            progress:val,
                        },
                    });
                    this.item3TypeStyle = this.$parent.tweenCss({
                        translateX:{
                            fromTo:[-100,0],
                            range:[0.22+offset,.1*this.screen],
                            progress:val,
                            easing:'easeQuadOut'
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[0.22+offset,.1*this.screen],
                            progress:val,
                        },
                    });
                    for(let i=0;i<1;i++){
                        offset+=0.02;
                        this[`item3Text${i}Style`] = this.$parent.tweenCss({
                            translateX:{
                                fromTo:[50,0],
                                range:[0.22+offset,.1*this.screen],
                                progress:val,
                                easing:'easeQuadOut'
                            },
                            opacity:{
                                fromTo:[0,1],
                                range:[0.22+offset,.1*this.screen],
                                progress:val,
                            },
                        });
                    }
                }
                {
                    let offset = 0.43;
                    this.item4BgStyle = this.$parent.tweenCss({
                        scale:{
                            fromTo:[.3,1],
                            range:[0.2+offset,.2*this.screen],
                            progress:val,
                            easing:'easeBackOut'
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[0.2+offset,.1*this.screen],
                            progress:val,
                        },
                    });
                    this.item4TypeStyle = this.$parent.tweenCss({
                        translateX:{
                            fromTo:[100,0],
                            range:[0.22+offset,.1*this.screen],
                            progress:val,
                            easing:'easeQuadOut'
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[0.22+offset,.1*this.screen],
                            progress:val,
                        },
                    });
                    for(let i=0;i<2;i++){
                        offset+=0.02;
                        this[`item4Text${i}Style`] = this.$parent.tweenCss({
                            translateX:{
                                fromTo:[50,0],
                                range:[0.22+offset,.1*this.screen],
                                progress:val,
                                easing:'easeQuadOut'
                            },
                            opacity:{
                                fromTo:[0,1],
                                range:[0.22+offset,.1*this.screen],
                                progress:val,
                            },
                        });
                    }
                }
                {
                    let offset = 0.51;
                    this.item5BgStyle = this.$parent.tweenCss({
                        scale:{
                            fromTo:[.3,1],
                            range:[0.2+offset,.2*this.screen],
                            progress:val,
                            easing:'easeBackOut'
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[0.2+offset,.1*this.screen],
                            progress:val,
                        },
                    });
                    this.item5TypeStyle = this.$parent.tweenCss({
                        translateX:{
                            fromTo:[100,0],
                            range:[0.22+offset,.1*this.screen],
                            progress:val,
                            easing:'easeQuadOut'
                        },
                        opacity:{
                            fromTo:[0,1],
                            range:[0.22+offset,.1*this.screen],
                            progress:val,
                        },
                    });
                    for(let i=0;i<15;i++){
                        offset+=0.016;
                        this[`item5Text${i}Style`] = this.$parent.tweenCss({
                            translateX:{
                                fromTo:[50,0],
                                range:[0.22+offset,.1*this.screen],
                                progress:val,
                                easing:'easeQuadOut'
                            },
                            opacity:{
                                fromTo:[0,1],
                                range:[0.22+offset,.1*this.screen],
                                progress:val,
                            },
                        });
                    }
                }
            }
        },
        data(){
            return{
                mainNumStyle:null,
                mainBgStyle:null,
                mainTextStyle:null,
                mainBg2Style:null,

                item0BgStyle:null,
                item0TypeStyle:null,
                item0Text0Style:null,

                item1BgStyle:null,
                item1TypeStyle:null,
                item1Text0Style:null,
                item1Text1Style:null,

                item2BgStyle:null,
                item2TypeStyle:null,
                item2Text0Style:null,
                item2Text1Style:null,
                item2Text2Style:null,

                item3BgStyle:null,
                item3TypeStyle:null,
                item3Text0Style:null,

                item4BgStyle:null,
                item4TypeStyle:null,
                item4Text0Style:null,
                item4Text1Style:null,

                item5BgStyle:null,
                item5Text14Style:null,
                item5Text13Style:null,
                item5Text12Style:null,
                item5Text11Style:null,
                item5Text10Style:null,
                item5Text9Style:null,
                item5Text8Style:null,
                item5Text7Style:null,
                item5Text6Style:null,
                item5Text5Style:null,
                item5Text4Style:null,
                item5Text3Style:null,
                item5Text2Style:null,
                item5Text1Style:null,
                item5Text0Style:null,
                item5TypeStyle:null,
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
    .ps-165{
        position:relative;
        width:640rpx;
        height:2982rpx;
        .ps-167{
            position:absolute;
            left:49.6875%;
            top:5.063716%;
            margin-left:-263rpx;
            margin-top:-151rpx;
            width:526rpx;
            height:302rpx;
            .ps-169{
                position:absolute;
                left:11.121673%;
                top:19.205298%;
                background:url("../assets/num04.ps-169.png") no-repeat center;
            }
            .ps-10{
                position:absolute;
                left:46.292776%;
                top:60.264901%;
                background:url("../assets/text.ps-10.png") no-repeat center;
            }
            .ps-171{
                position:absolute;
                left:55.418251%;
                top:66.721854%;
                background:url("../assets/bg.ps-171.png") no-repeat center;
            }
        }
        .ps-175{
            position:absolute;
            left:50%;
            top:57.075788%;
            width: 640rpx;
            height: 2560rpx;
            margin-left: -640/2rpx;
            margin-top: -2560/2rpx;
            .bg2{
                position: absolute;
                top: 0;left: 0;
                width: 100%;height: 100%;
                -webkit-mask:url("../assets/bg.mask.ps-173.png") no-repeat; 
                -webkit-mask-size:contain;
                background:url("../assets/bg.ps-173.jpg") no-repeat left center;
                background-size: cover;
            }
            .ps-183{
                position:absolute;
                left:50.625%;
                top:6.289063%;
                margin-left:-254rpx;
                margin-top:-91rpx;
                width:508rpx;
                height:182rpx;
                .ps-185{
                    position:absolute;
                    left:12.598425%;
                    top:10.714286%;
                    background:url("../assets/type.ps-185.png") no-repeat center;
                }
                .ps-46{
                    position:absolute;
                    left:46.358268%;
                    top:57.142857%;
                    background:url("../assets/text0.ps-46.png") no-repeat center;
                }
                .ps-43{
                    position:absolute;
                    left:50%;
                    top:57.142857%;
                    width: 508rpx;
                    height: 156rpx;
                    margin-left: -508/2rpx;
                    margin-top: -156/2rpx;
                    background:rgba(#fff,.9);
                }
            }
            .ps-187{
                position:absolute;
                left:50.625%;
                top:18.691406%;
                margin-left:-254rpx;
                margin-top:-165.5rpx;
                width:508rpx;
                height:331rpx;
                .ps-189{
                    position:absolute;
                    left:76.181102%;
                    top:5.891239%;
                    background:url("../assets/type.ps-189.png") no-repeat center;
                }
                .ps-196{
                    position:absolute;
                    left:38.681102%;
                    top:31.41994%;
                    background:url("../assets/text0.ps-196.png") no-repeat center;
                }
                .ps-194{
                    position:absolute;
                    left:41.240157%;
                    top:72.205438%;
                    background:url("../assets/text1.ps-194.png") no-repeat center;
                }
                .ps-191{
                    position:absolute;
                    left:50%;
                    top:52.870091%;
                    width: 508rpx;
                    height: 312rpx;
                    margin-left: -508/2rpx;
                    margin-top: -312/2rpx;
                    background:rgba(#fff,.9);
                }
            }
            .ps-198{
                position:absolute;
                left:50.625%;
                top:35.351563%;
                margin-left:-254rpx;
                margin-top:-201rpx;
                width:508rpx;
                height:402rpx;
                .ps-200{
                    position:absolute;
                    left:22.244094%;
                    top:4.850746%;
                    background:url("../assets/type.ps-200.png") no-repeat center;
                }
                .ps-202{
                    position:absolute;
                    left:49.114173%;
                    top:25.995025%;
                    background:url("../assets/text0.ps-202.png") no-repeat center;
                }
                .ps-203{
                    position:absolute;
                    left:49.704724%;
                    top:54.104478%;
                    background:url("../assets/text1.ps-203.png") no-repeat center;
                }
                .ps-204{
                    position:absolute;
                    left:49.114173%;
                    top:82.462687%;
                    background:url("../assets/text2.ps-204.png") no-repeat center;
                }
                .ps-12{
                    position:absolute;
                    left:50%;
                    top:52.487562%;
                    width: 508rpx;
                    height: 382rpx;
                    margin-left: -508/2rpx;
                    margin-top: -382/2rpx;
                    background:rgba(#fff,.9);
                }
            }
            .ps-207{
                position:absolute;
                left:50.625%;
                top:48.886719%;
                margin-left:-254rpx;
                margin-top:-85.5rpx;
                width:508rpx;
                height:171rpx;
                .ps-209{
                    position:absolute;
                    left:85.925197%;
                    top:11.403509%;
                    background:url("../assets/type.ps-209.png") no-repeat center;
                }
                .ps-211{
                    position:absolute;
                    left:43.996063%;
                    top:59.94152%;
                    background:url("../assets/text0.ps-211.png") no-repeat center;
                }
                .ps-13{
                    position:absolute;
                    left:50%;
                    top:55.847953%;
                    width: 508rpx;
                    height: 151rpx;
                    margin-left: -508/2rpx;
                    margin-top: -151/2rpx;
                    background:rgba(#fff,.9);
                }
            }
            .ps-212{
                position:absolute;
                left:50.625%;
                top:59.257812%;
                margin-left:-254rpx;
                margin-top:-119rpx;
                width:508rpx;
                height:238rpx;
                .ps-214{
                    position:absolute;
                    left:12.5%;
                    top:8.193277%;
                    background:url("../assets/type.ps-214.png") no-repeat center;
                }
                .ps-216{
                    position:absolute;
                    left:51.377953%;
                    top:42.857143%;
                    background:url("../assets/text0.ps-216.png") no-repeat center;
                }
                .ps-217{
                    position:absolute;
                    left:41.043307%;
                    top:81.722689%;
                    background:url("../assets/text1.ps-217.png") no-repeat center;
                }
                .ps-14{
                    position:absolute;
                    left:50%;
                    top:53.991597%;
                    
                    width: 508rpx;
                    height: 219rpx;
                    margin-left: -508/2rpx;
                    margin-top: -219/2rpx;
                    background:rgba(#fff,.9);
                }
            }
            .ps-220{
                position:absolute;
                left:50.625%;
                top:81.503906%;
                margin-left:-254rpx;
                margin-top:-390.5rpx;
                width:508rpx;
                height:781rpx;
                .ps-225{
                    position:absolute;
                    left:85.925197%;
                    top:2.496799%;
                    background:url("../assets/type.ps-225.png") no-repeat center;
                }
                .ps-227{
                    position:absolute;
                    left:24.311024%;
                    top:10.691421%;
                    background:url("../assets/text0.ps-227.png") no-repeat center;
                }
                .ps-228{
                    position:absolute;
                    left:17.224409%;
                    top:17.861716%;
                    background:url("../assets/text1.ps-228.png") no-repeat center;
                }
                .ps-229{
                    position:absolute;
                    left:43.602362%;
                    top:23.367478%;
                    background:url("../assets/text2.ps-229.png") no-repeat center;
                }
                .ps-230{
                    position:absolute;
                    left:29.330709%;
                    top:28.745198%;
                    background:url("../assets/text3.ps-230.png") no-repeat center;
                }
                .ps-231{
                    position:absolute;
                    left:34.055118%;
                    top:34.122919%;
                    background:url("../assets/text4.ps-231.png") no-repeat center;
                }
                .ps-232{
                    position:absolute;
                    left:38.681102%;
                    top:39.50064%;
                    background:url("../assets/text5.ps-232.png") no-repeat center;
                }
                .ps-233{
                    position:absolute;
                    left:34.055118%;
                    top:44.878361%;
                    background:url("../assets/text6.ps-233.png") no-repeat center;
                }
                .ps-234{
                    position:absolute;
                    left:48.425197%;
                    top:50.256082%;
                    background:url("../assets/text7.ps-234.png") no-repeat center;
                }
                .ps-235{
                    position:absolute;
                    left:36.515748%;
                    top:55.633803%;
                    background:url("../assets/text8.ps-235.png") no-repeat center;
                }
                .ps-236{
                    position:absolute;
                    left:17.224409%;
                    top:65.877081%;
                    background:url("../assets/text9.ps-236.png") no-repeat center;
                }
                .ps-237{
                    position:absolute;
                    left:19.783465%;
                    top:71.766965%;
                    background:url("../assets/text10.ps-237.png") no-repeat center;
                }
                .ps-238{
                    position:absolute;
                    left:34.055118%;
                    top:77.144686%;
                    background:url("../assets/text11.ps-238.png") no-repeat center;
                }
                .ps-239{
                    position:absolute;
                    left:31.692913%;
                    top:82.522407%;
                    background:url("../assets/text12.ps-239.png") no-repeat center;
                }
                .ps-240{
                    position:absolute;
                    left:40.059055%;
                    top:87.900128%;
                    background:url("../assets/text13.ps-240.png") no-repeat center;
                }
                .ps-241{
                    position:absolute;
                    left:43.602362%;
                    top:93.277849%;
                    background:url("../assets/text14.ps-241.png") no-repeat center;
                }
                .ps-15{
                    position:absolute;
                    left:50%;
                    top:51.216389%;
                    width: 508rpx;
                    height: 762rpx;
                    margin-left: -508/2rpx;
                    margin-top: -762/2rpx;
                    background:rgba(#fff,.9);
                }
            }
            .ps-179{
                position:absolute;
                left:14.921875%;
                top:23.730469%;
                background:url("../assets/bg0.ps-179.png") no-repeat center;
            }
            .ps-177{
                position:absolute;
                left:75.625%;
                top:75.917969%;
                background:url("../assets/bg1.ps-177.png") no-repeat center;
            }
        }
    }
</style>