<template>
    <div class="screen06">
        <div class="bg ps-293"></div>
        <div class="ps-254">
            <div class="main ps-264" :style="chartStyle">
                <div class="chart ps-271">
                    <div class="title ps-273" :style="chartTitleStyle"></div>
                    <canvas class="canvas pie ps-31" ref="canvas0" :style="chartPie0Style"/>
                    <canvas class="canvas pie ps-31" ref="canvas1" :style="chartPie1Style"/>
                    <canvas class="canvas pie ps-31" ref="canvas2" :style="chartPie2Style"/>
                    <div class="text2 ps-285" :style="chartText2Style"></div>
                    <div class="text1 ps-283" :style="chartText1Style"></div>
                    <div class="text0 ps-277" :style="chartText0Style"></div>
                </div>
                <div class="summary ps-266">
                    <div class="text2 ps-270"  :style="mainSummary2Style"></div>
                    <div class="text1 ps-269"  :style="mainSummary1Style"></div>
                    <div class="text0 ps-268"  :style="mainSummary0Style"></div>
                </div>
            </div>
            <div class="title ps-256">
                <div class="bg ps-26" :style="titleBgStyle"></div>
                <div class="text ps-28" :style="titleTextStyle"></div>
                <div class="num06 ps-260" :style="titleNumStyle"></div>
            </div>
        </div>
    </div>
</template>
<script >
import Pie from './lib/pie.ts';
    let pie0,pie1,pie2;
    export default {
        props:['progress','screen'],
        watch:{
            progress(val){
                pie0.render({ 
                    progress:this.$parent.tween({
                        progress:{
                            fromTo:[0,1],
                            range:[.48,.1*this.screen],
                            progress:val,
                        },
                    }).progress,
                    data:this.pieData0
                });
                this.titleNumStyle=this.$parent.tweenCss({
                    translateY:{
                        fromTo:[-180,50],
                        range:[0,1.3],
                        progress:val,
                        easing:"easeQuadOut"
                    },
                    translateX:{
                        fromTo:[130,-100],
                        range:[0,1.3],
                        progress:val,
                    },
                });
                this.titleBgStyle=this.$parent.tweenCss({
                    translateY:{
                        fromTo:[-50,50],
                        range:[0,1.3],
                        progress:val,
                        easing:"easeQuadOut"
                    },
                    translateX:{
                        fromTo:[-30,100],
                        range:[0,1.3],
                        progress:val,
                    },
                });
                this.titleTextStyle=this.$parent.tweenCss({
                    opacity:{
                        fromTo:[0,1],
                        range:[.05,.1*this.screen],
                        progress:val,
                    },
                    translateX:{
                        fromTo:[-200,0],
                        range:[.05,.3*this.screen],
                        progress:val,
                        easing:"easeBackOut"
                    },
                });
                for(let i=0;i<3;i++){
                    this[`mainSummary${i}Style`]=this.$parent.tweenCss({
                        opacity:{
                            fromTo:[0,1],
                            range:[.23+i*.01,.1*this.screen],
                            progress:val,
                        },
                        scale:{
                            fromTo:[1.5,1],
                            range:[.23+i*.01,.15*this.screen],
                            progress:val,
                            easing:"easeBackOut"
                        },
                    });
                }
                this.chartStyle=this.$parent.tweenCss({
                    translateY:{
                        fromTo:[0,1150],
                        range:[.43,.8],
                        progress:val, 
                        easing:'easeSinInOut'
                    },
                });
                this.chartTitleStyle=this.$parent.tweenCss({
                    opacity:{
                        fromTo:[0,1],
                        range:[.32,.1*this.screen],
                        progress:val, 
                    },
                    translateX:{
                        fromTo:[150,0],
                        range:[.32,.2*this.screen],
                        progress:val, 
                        easing:'easeBackOut'
                    },
                });
                this.chartPie0Style=this.$parent.tweenCss({
                    opacity:{
                        fromTo:[0,1],
                        range:[.48,.05*this.screen],
                        progress:val, 
                    },
                    scale:{
                        fromTo:[.1,1],
                        range:[.48,.1*this.screen],
                        progress:val, 
                        easing:'easeBackOut'
                    },
                });
                if(val<.73){
                    this.chartText0Style=this.$parent.tweenCss({
                        opacity:{
                            fromTo:[0,1],
                            range:[.5,.05*this.screen],
                            progress:val, 
                        },
                        scale:{
                            fromTo:[1.3,1],
                            range:[.5,.2*this.screen],
                            progress:val, 
                            easing:'easeBackOut'
                        },
                    });
                }else{
                    this.chartText0Style=this.$parent.tweenCss({
                        opacity:{
                            fromTo:[1,0],
                            range:[.73,.05*this.screen],
                            progress:val, 
                        },
                    });
                }

                this.chartPie1Style=this.$parent.tweenCss({
                    opacity:{
                        fromTo:[0,1],
                        range:[.7,.05*this.screen],
                        progress:val, 
                    },
                    scale:{
                        fromTo:[1.3,1],
                        range:[.7,.1*this.screen],
                        progress:val,
                    },
                });
                if(val<.95){
                    this.chartText1Style=this.$parent.tweenCss({
                        opacity:{
                            fromTo:[0,1],
                            range:[.73,.05*this.screen],
                            progress:val, 
                        },
                        scale:{
                            fromTo:[1.3,1],
                            range:[.73,.2*this.screen],
                            progress:val, 
                            easing:'easeBackOut'
                        },
                    });
                }else{
                    this.chartText1Style=this.$parent.tweenCss({
                        opacity:{
                            fromTo:[1,0],
                            range:[.93,.05*this.screen],
                            progress:val, 
                        },
                    });
                }
                this.chartPie2Style=this.$parent.tweenCss({
                    opacity:{
                        fromTo:[0,1],
                        range:[.9,.05*this.screen],
                        progress:val, 
                    },
                    scale:{
                        fromTo:[1.3,1],
                        range:[.9,.1*this.screen],
                        progress:val,
                    },
                });
                this.chartText2Style=this.$parent.tweenCss({
                    opacity:{
                        fromTo:[0,1],
                        range:[.93,.05*this.screen],
                        progress:val, 
                    },
                    scale:{
                        fromTo:[1.3,1],
                        range:[.93,.2*this.screen],
                        progress:val, 
                        easing:'easeBackOut'
                    },
                });
            }
        },
        data(){
            return{
                titleBgStyle:null,
                titleTextStyle:null,
                titleNumStyle:null,
                mainSummary0Style:null,
                mainSummary1Style:null,
                mainSummary2Style:null,
                chartTitleStyle:null,
                chartStyle:null,
                chartPie0Style:null,
                chartText0Style:null,
                chartPie1Style:null,
                chartText1Style:null,
                chartPie2Style:null,
                chartText2Style:null,

                pieData0:[
                    {range:[0,0.36],color:'#860c10',},
                    {range:[0.36,0.64],color:'#c0a16e',},
                ],
                pieData1:[
                    {range:[0.32,0.04],color:'#a81e23',},
                    {range:[0.97,0.03],color:'#cfae81',},
                ],
                pieData2:[
                    {range:[0,0.11],color:'#095183',},
                    {range:[0.11,0.07],color:'#b6171e',},
                    {range:[0.86,0.11],color:'#aa1e23',},
                    {range:[0.97,0.015],color:'#666666',},
                    {range:[0.985,0.015],color:'#cfae81',},
                ]
            }
        },
        mounted(){
            pie0=new Pie(this.$refs.canvas0);
            pie1=new Pie(this.$refs.canvas1);
            pie2=new Pie(this.$refs.canvas2);
            pie1.render({
                progress:1,
                data:this.pieData1
            });
            pie2.render({
                progress:1,
                data:this.pieData2
            });
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
.screen06{
    position: relative;
    width: 640rpx;
    height: 2400rpx;
}
    .ps-293{
        position:absolute;
        left: 0;
        top:58.667737%;
        width: 640rpx;
        height: 2560rpx;
        margin-top: -2560/2rpx;
        -webkit-mask: url("../assets/bg.mask.ps-173.png") no-repeat center;
        -webkit-mask-size: contain;
        background:url("../assets/bg.ps-293.jpg") no-repeat center;
        background-size: cover;
    }
    .ps-254{
        position:relative;
        width:640rpx;
        height:1869rpx;
        .ps-256{
            position:absolute;
            left:40.859375%;
            top:7.463884%;
            margin-left:-261.5rpx;
            margin-top:-139.5rpx;
            width:523rpx;
            height:279rpx;
            .ps-260{
                position:absolute;
                left:89.388145%;
                top:79.21147%;
                background:url("../assets/num06.ps-260.png") no-repeat center;
            }
            .ps-28{
                position:absolute;
                left:47.418738%;
                top:51.792115%;
                background:url("../assets/text.ps-28.png") no-repeat center;
            }
            .ps-26{
                position:absolute;
                left:41.108987%;
                top:39.605735%;
                background:url("../assets/bg.ps-26.png") no-repeat center;
            }
        }
        .ps-264{
            position:absolute;
            left:50.15625%;
            top:42.455859%;
            margin-left:-277rpx;
            margin-top:-413.5rpx;
            width:554rpx;
            height:827rpx;
            .ps-266{
                position:absolute;
                left:46.570397%;
                top:9.794438%;
                margin-left:-225rpx;
                margin-top:-81rpx;
                width:450rpx;
                height:162rpx;
                .ps-268{
                    position:absolute;
                    left:38%;
                    top:18.209877%;
                    background:url("../assets/text0.ps-268.png") no-repeat center;
                }
                .ps-269{
                    position:absolute;
                    left:50%;
                    top:56.481481%;
                    background:url("../assets/text1.ps-269.png") no-repeat center;
                }
                .ps-270{
                    position:absolute;
                    left:16.888889%;
                    top:87.962963%;
                    background:url("../assets/text2.ps-270.png") no-repeat center;
                }
            }
            .ps-271{
                position:absolute;
                left:50%;
                top:66.62636%;
                margin-left:-277rpx;
                margin-top:-276rpx;
                width:554rpx;
                height:552rpx;
                .ps-277{
                    position:absolute;
                    left:49.00722%;
                    top:68.75%;
                    background:url("../assets/text0.ps-277.png") no-repeat center;
                }
                .ps-283{
                    position:absolute;
                    left:50%;
                    top:65.57971%;
                    background:url("../assets/text1.ps-283.png") no-repeat center;
                }
                .ps-285{
                    position:absolute;
                    left:50.090253%;
                    top:57.699275%;
                    background:url("../assets/text2.ps-285.png") no-repeat center;
                }
                .ps-31{
                    position:absolute;
                    left:49.819495%;
                    top:64.945652%;
                    /* background:url("../assets/canvas.ps-31.png") no-repeat center;
                    background-image: none; */
                }
                .ps-273{
                    position:absolute;
                    left:34.115523%;
                    top:2.626812%;
                    background:url("../assets/title.ps-273.png") no-repeat center;
                }
            }
        }
    }
</style>