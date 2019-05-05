<template>
    <div class="screen08 ps-213">
        <div class="main ps-219">
            <div class="data ps-221">
                <span class="bg" :style="dataBgStyle"></span>
                <div class="title ps-223" :style="dataTitleStype"></div>
                <div class="chart-main ps-227">
                    <canvas class="canvas pie ps-23" ref="canvas" :style="dataPieStype"></canvas>
                    <div class="text ps-36" :style="dataTextStype"></div>
                </div>
            </div>
            <div class="company ps-229">
                <span class="bg" :style="companyBgStyle"></span>
                <div class="main ps-233">
                    <div class="type4 ps-181" :style="companyText4Style"></div>
                    <div class="type3 ps-237" :style="companyText3Style"></div>
                    <div class="type2 ps-177" :style="companyText2Style"></div>
                    <div class="type1 ps-175" :style="companyText1Style"></div>
                    <div class="type0 ps-235" :style="companyText0Style"></div>
                </div>
            </div>
        </div>
        <div class="title ps-217">
            <div class="bg1 ps-134" :style="titleBgStyle"></div>
            <div class="text ps-35" :style="titleTextStyle"></div>
            <div class="num_08 ps-215" :style="titleNumStyle"></div>
        </div>
        </div>
</template>
<script >
    import Pie from './lib/pie.ts';
    let pie;
    export default {
        props:['progress','screen'],
        watch: {
            progress(val) {
                this.titleNumStyle = this.$parent.tweenCss({
                    translateX: {
                        fromTo: [-50, 50],
                        range: [0, .5],
                        progress: val,
                    },
                    translateY: {
                        fromTo: [-100, 50],
                        range: [0, .5],
                        progress: val,
                    },
                    scale: {
                        fromTo: [1.2, .8],
                        range: [0, .5],
                        progress: val,
                    },
                });
                this.titleBgStyle = this.$parent.tweenCss({
                    translateX: {
                        fromTo: [100, -30],
                        range: [0, .5],
                        progress: val,
                    },
                    translateY: {
                        fromTo: [-100, 30],
                        range: [0, .5],
                        progress: val,
                    },
                    rotateZ: {
                        fromTo: [10, -10],
                        range: [0, .5],
                        progress: val,
                    },
                });
                this.titleTextStyle = this.$parent.tweenCss({
                    opacity: {
                        fromTo: [0, 1],
                        range: [0.06, .1 * this.screen],
                        progress: val,
                    },
                    translateY: {
                        fromTo: [-30, 30],
                        range: [0, .5],
                        progress: val,
                    },
                    scale: {
                        fromTo: [.3, 1],
                        range: [0.06, .2 * this.screen],
                        progress: val,
                        easing: 'easeBackOut'
                    }
                });
                this.dataBgStyle = this.$parent.tweenCss({
                    translateY: {
                        fromTo: [80, -80],
                        range: [0, .6],
                        progress: val,
                    },
                });
                pie.render({
                    progress:this.$parent.tween({
                        progress:{
                            fromTo:[0,1],
                            range:[.29,.1*this.screen],
                            progress:val,
                        },
                    }).progress,
                    data:this.pieData
                });
                this.dataPieStype=this.$parent.tweenCss({
                    opacity:{
                        fromTo:[0,1],
                        range:[.29,.05*this.screen],
                        progress:val,
                    },
                    scale:{
                        fromTo:[.1,1],
                        range:[.29,.1*this.screen],
                        progress:val,
                        easing:'easeBackOut'
                    },
                });
                this.dataTextStype=this.$parent.tweenCss({
                    opacity:{
                        fromTo:[0,1],
                        range:[.31,.05*this.screen],
                        progress:val,
                    },
                    scale:{
                        fromTo:[1.2,1],
                        range:[.31,.1*this.screen],
                        progress:val,
                        easing:'easeBackOut'
                    },
                });
                this.dataTitleStype=this.$parent.tweenCss({
                    opacity:{
                        fromTo:[0,1],
                        range:[.23,.1*this.screen],
                        progress:val,
                    },
                    scale:{
                        fromTo:[.3,1],
                        range:[.23,.2*this.screen],
                        progress:val,
                        easing:'easeBackOut'
                    },
                });

                this.companyBgStyle=this.$parent.tweenCss({
                    translateY:{
                        fromTo:[-300,800],
                        range:[.35,1.4],
                        progress:val,
                    },
                });
                this.companyText0Style=this.$parent.tweenCss({
                    opacity:{
                        fromTo:[0,1],
                        range:[.47,.1*this.screen],
                        progress:val,
                    },
                    scale:{
                        fromTo:[1.3,1],
                        range:[.47,.2*this.screen],
                        progress:val,
                        easing:'easeBackOut'
                    },
                });
                this.companyText1Style=this.$parent.tweenCss({
                    opacity:{
                        fromTo:[0,1],
                        range:[.56,.1*this.screen],
                        progress:val,
                    },
                    scale:{
                        fromTo:[1.3,1],
                        range:[.56,.2*this.screen],
                        progress:val,
                        easing:'easeBackOut'
                    },
                });
                this.companyText2Style=this.$parent.tweenCss({
                    opacity:{
                        fromTo:[0,1],
                        range:[.69,.1*this.screen],
                        progress:val,
                    },
                    scale:{
                        fromTo:[1.3,1],
                        range:[.69,.2*this.screen],
                        progress:val,
                        easing:'easeBackOut'
                    },
                });
                this.companyText3Style=this.$parent.tweenCss({
                    opacity:{
                        fromTo:[0,1],
                        range:[.82,.1*this.screen],
                        progress:val,
                    },
                    scale:{
                        fromTo:[1.3,1],
                        range:[.82,.2*this.screen],
                        progress:val,
                        easing:'easeBackOut'
                    },
                });
                this.companyText4Style=this.$parent.tweenCss({
                    opacity:{
                        fromTo:[0,1],
                        range:[.95,.1*this.screen],
                        progress:val,
                    },
                    scale:{
                        fromTo:[1.3,1],
                        range:[.95,.2*this.screen],
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

                dataBgStyle:null,
                dataPieStype:null,
                dataTextStype:null,
                dataTitleStype:null,
                companyBgStyle:null,
                companyText0Style:null,
                companyText1Style:null,
                companyText2Style:null,
                companyText3Style:null,
                companyText4Style:null,
                pieData:[
                    {range:[0,0.25],color:'#860c10',},
                    {range:[0.25,0.12],color:'#d58d53',},
                    {range:[0.37,0.07],color:'#0f4b80',},
                    {range:[0.44,0.02],color:'#a3805c',},
                    {range:[0.46,0.03],color:'#c6c9d1',},
                    {range:[0.49,0.47],color:'#c6a572',},
                    {range:[0.96,0.03],color:'#d9bc90',},
                    {range:[0.99,0.01],color:'#a81e23',},
                ],
            }
        },
        mounted(){
            pie=new Pie(this.$refs.canvas);
        },
        methods:{
            
        },
        components:{
            
        }
    };
</script>
<style lang="postcss" scoped>
    .ps-213{
        position: relative;
        width: 640rpx;
        height: 3096rpx;
        .ps-217{
            position:absolute;
            left:50.078125%;
            top:4.376615%;
            margin-left:-246.5rpx;
            margin-top:-135.5rpx;
            width:493rpx;
            height:271rpx;
            .ps-215{
                position:absolute;
                left:88.742394%;
                top:21.402214%;
                background:url("../assets/num_08.ps-215.png") no-repeat center;
            }
            .ps-35{
                position:absolute;
                left:44.624746%;
                top:63.468635%;
                background:url("../assets/text.ps-35.png") no-repeat center;
            }
            .ps-134{
                position:absolute;
                left:39.046653%;
                top:63.468635%;
                background:url("../assets/bg1.ps-134.png") no-repeat center;
            }
        }
        .ps-219{
            position:absolute;
            left:50%;
            top:55.927003%;
            margin-left:-320rpx;
            margin-top:-1364.5rpx;
            width:640rpx;
            height:2729rpx;
            .ps-221{
                position:absolute;
                left:50%;
                top:12.60535%;
                background:url("../assets/bg.ps-225.png") no-repeat center;
                background-image: none;
                span{
                    position: absolute;
                    top: 0;
                    left: 0;
                    background:url("../assets/bg.ps-225.png") no-repeat center;
                }
                .ps-227{
                    position:absolute;
                    left:48.984375%;
                    top:59.593023%;
                    margin-left:-272.5rpx;
                    margin-top:-219rpx;
                    width:545rpx;
                    height:438rpx;
                    .ps-36{
                        position:absolute;
                        left:0;
                        top:0;
                        width:100%;
                        height:100%;
                        background:url("../assets/text.ps-36.png") no-repeat center;
                        background-size:cover;
                    }
                    .ps-23{
                        left:51.192661%;
                        top:51.940639%;
                    }
                }
                .ps-223{
                    position:absolute;
                    left:47.109375%;
                    top:11.264535%;
                    background:url("../assets/title.ps-223.png") no-repeat center;
                }
            }
            .ps-229{
                position:absolute;
                left: 0;
                top:63.118358%;
                width: 100%;
                height: 2013rpx;
                margin-top: -1006rpx;
                overflow: hidden;
                .bg{
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: url("../assets/bg.ps-231.jpg") no-repeat center;
                }
                .ps-233{
                    position:absolute;
                    left:50%;
                    top:50.496771%;
                    width: 552rpx;
                    height: 1775rpx;
                    margin-left: -552/2rpx;
                    margin-top: -1775/2rpx;
                    background: rgba(255,255,255,.8);
                    > div{
                        transform-origin: center -20%;
                    }
                    .ps-235{
                        position:absolute;
                        left:50%;
                        top:9.633803%;
                        background:url("../assets/type0.ps-235.png") no-repeat center;
                    }
                    .ps-175{
                        position:absolute;
                        left:50%;
                        top:25.746479%;
                        background:url("../assets/type1.ps-175.png") no-repeat center;
                    }
                    .ps-177{
                        position:absolute;
                        left:50%;
                        top:44.957746%;
                        background:url("../assets/type2.ps-177.png") no-repeat center;
                    }
                    .ps-237{
                        position:absolute;
                        left:50%;
                        top:69.492958%;
                        background:url("../assets/type3.ps-237.png") no-repeat center;
                    }
                    .ps-181{
                        position:absolute;
                        left:50%;
                        top:90.507042%;
                        background:url("../assets/type4.ps-181.png") no-repeat center;
                    }
                }
            }
        }
    }
</style>