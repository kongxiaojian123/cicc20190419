<template>
    <div class="screen04 ps-165">
        <div class="main ps-175">
            <div class="bg1 ps-177"></div>
            <div class="bg0 ps-179"></div>
            <div class="item item05 ps-220">
                <div class="bg ps-15"></div>
                <div class="text14 ps-241"></div>
                <div class="text13 ps-240"></div>
                <div class="text12 ps-239"></div>
                <div class="text11 ps-238"></div>
                <div class="text10 ps-237"></div>
                <div class="text9 ps-236"></div>
                <div class="text8 ps-235"></div>
                <div class="text7 ps-234"></div>
                <div class="text6 ps-233"></div>
                <div class="text5 ps-232"></div>
                <div class="text4 ps-231"></div>
                <div class="text3 ps-230"></div>
                <div class="text2 ps-229"></div>
                <div class="text1 ps-228"></div>
                <div class="text0 ps-227"></div>
                <div class="type ps-225"></div>
            </div>
            <div class="item item04 ps-212">
                <div class="bg ps-14"></div>
                <div class="text1 ps-217"></div>
                <div class="text0 ps-216"></div>
                <div class="type ps-214"></div>
            </div>
            <div class="item item03 ps-207">
                <div class="bg ps-13"></div>
                <div class="text0 ps-211"></div>
                <div class="type ps-209"></div>
            </div>
            <div class="item item02 ps-198">
                <div class="bg ps-12"></div>
                <div class="text2 ps-204"></div>
                <div class="text1 ps-203"></div>
                <div class="text0 ps-202"></div>
                <div class="type ps-200"></div>
            </div>
            <div class="item item01 ps-187">
                <div class="bg ps-191"></div>
                <div class="text1 ps-194"></div>
                <div class="text0 ps-196"></div>
                <div class="type ps-189"></div>
            </div>
            <div class="item item00 ps-183">
                <div class="bg ps-43"></div>
                <div class="text0 ps-46"></div>
                <div class="type ps-185"></div>
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
            }
        },
        data(){
            return{
                mainNumStyle:null,
                mainBgStyle:null,
                mainTextStyle:null,
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
            background:url("../assets/bg.ps-173.png") no-repeat center;
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
                    background:url("../assets/bg.ps-43.png") no-repeat center;
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
                    background:url("../assets/bg.ps-191.png") no-repeat center;
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
                    background:url("../assets/bg.ps-12.png") no-repeat center;
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
                    background:url("../assets/bg.ps-13.png") no-repeat center;
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
                    background:url("../assets/bg.ps-14.png") no-repeat center;
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
                    background:url("../assets/bg.ps-15.png") no-repeat center;
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