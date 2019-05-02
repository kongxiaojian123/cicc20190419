<template>
    <div class="screen14 ps-271">
        <div class="btn ps-189" @click="$emit('scrollTo',0)"></div>
        <div class="main ps-187">
            <div class="bg2 ps-275" :style="bg0Style"></div>
            <div class="bg1 ps-273" :style="bg0Style"></div>
            <div class="bg0 ps-121"></div>
            <div class="text ps-277">
                <div class="text5 ps-283" :style="text4Style"></div>
                <div class="text4 ps-282" :style="text3Style"></div>
                <div class="text3 ps-281" :style="text2Style"></div>
                <div class="text2 ps-280" :style="text1Style"></div>
                <div class="text1 ps-279" :style="text0Style"></div>
            </div>
        </div>
        </div>
</template>
<script >
    export default {
        props:['progress','screen'],
        watch: {
            progress(val) {
                this.bg0Style = this.$parent.tweenCss({
                    translateX: {
                        fromTo: [-50, 0],
                        range: [0, 1.056],
                        progress: val,
                    },
                    translateY: {
                        fromTo: [-100, 0],
                        range: [0, 1.056],
                        progress: val,
                    },
                });
                for(let i = 0;i<5;i++){
                    this[`text${i}Style`] = this.$parent.tweenCss({
                        opacity: {
                            fromTo: [0, 1],
                            range: [0.4+i*.09, .1*this.screen],
                            progress: val,
                        },
                        scale: {
                            fromTo: [1.3, 1],
                            range: [0.4+i*.09, .2*this.screen],
                            progress: val,
                            easing: 'easeBackOut'
                        },
                    });
                }
            }
        },
        data(){
            return{
                bg0Style:null,
                text0Style:null,
                text1Style:null,
                text2Style:null,
                text3Style:null,
                text4Style:null,
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
    .ps-271{
        position:relative;
        width:640rpx;
        height:1101rpx;
        .ps-187{
            position:absolute;
            left:50%;
            top:46.775658%;
            margin-left:-320rpx;
            margin-top:-515rpx;
            width:640rpx;
            height:1030rpx;
            .ps-277{
                position:absolute;
                left:50.46875%;
                top:44.514563%;
                margin-left:-239rpx;
                margin-top:-228.5rpx;
                width:478rpx;
                height:457rpx;
                > div{
                    transform-origin: -30rpx center;
                }
                .ps-279{
                    position:absolute;
                    left:17.991632%;
                    top:6.78337%;
                    background:url("../assets/text1.ps-279.png") no-repeat center;
                }
                .ps-280{
                    position:absolute;
                    left:25.41841%;
                    top:27.461707%;
                    background:url("../assets/text2.ps-280.png") no-repeat center;
                }
                .ps-281{
                    position:absolute;
                    left:50%;
                    top:49.452954%;
                    background:url("../assets/text3.ps-281.png") no-repeat center;
                }
                .ps-282{
                    position:absolute;
                    left:31.485356%;
                    top:71.334792%;
                    background:url("../assets/text4.ps-282.png") no-repeat center;
                }
                .ps-283{
                    position:absolute;
                    left:37.343096%;
                    top:93.435449%;
                    background:url("../assets/text5.ps-283.png") no-repeat center;
                }
            }
            .ps-121{
                position:absolute;
                left:50%;
                top:49.902913%;
                background:url("../assets/bg0.ps-121.png") no-repeat center;
            }
            .ps-273{
                position:absolute;
                left:86.484375%;
                top:23.543689%;
                background:url("../assets/bg1.ps-273.png") no-repeat center;
            }
            .ps-275{
                position:absolute;
                left:45.15625%;
                top:50%;
                background:url("../assets/bg2.ps-275.png") no-repeat center;
            }
        }
        .ps-189{
            position:absolute;
            left:51.25%;
            top:97.865577%;
            background:url("../assets/btn.ps-189.png") no-repeat center;
            animation: loop_ani 1.5s infinite ease-in-out;
        }
    }
    @keyframes loop_ani {
        50%{
            transform:scale(1.1);
        }
    }
</style>