<template>
    <div class="screen00 ps-466">
        <div class="slogan ps-432">
            <div class="bg2 ps-428" :style="bg2Style"></div>
            <div class="bg1 ps-426" :style="bg1Style"></div>
            <div class="bg0 ps-430" :style="bg0Style"></div>
            <div class="text ps-163" :style="textStyle"></div>
        </div>
        <div class="logo ps-434"></div>
        </div>
</template>
<script >
    export default {
        props:['progress','screen'],
        watch:{
            progress(val){
                this.bg2Style = this.$parent.tweenCss({
                    scale:{
                        fromTo:[1,2],
                        range:[1,1.5],
                        progress:val,
                    },
                });
                this.bg1Style = this.$parent.tweenCss({
                    translateY:{
                        fromTo:[0,450],
                        range:[1,1.5],
                        progress:val, 
                    },
                    translateX:{
                        fromTo:[0,-30],
                        range:[1,1.5],
                        progress:val, 
                    }
                });
                this.textStyle = this.$parent.tweenCss({
                    translateY:{
                        fromTo:[0,60],
                        range:[1,.8],
                        progress:val, 
                    }
                });
                this.bg0Style={
                    backgroundPosition:`left ${
                        this.$parent.tween({
                            backgroundPosition:{
                                fromTo:[0,-100],
                                range:[1,1],
                                progress:val, 
                            }
                        }).backgroundPosition
                    }px`,
                }
            }
        },
        data(){
            return{
                bg2Style:null,
                bg1Style:null,
                textStyle:null,
                bg0Style:null,
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
    .ps-466{
        position:relative;
        width:640rpx;
        height:1188rpx;
        .ps-434{
            position:absolute;
            left:29.609375%;
            top:2.693603%;
            background:url("../assets/logo.ps-434.png") no-repeat center;
        }
        .ps-432{
            position:absolute;
            left:50%;
            top:53.703704%;
            margin-left:-320rpx;
            margin-top:-550rpx;
            width:640rpx;
            height:1100rpx;
            .ps-163{
                position:absolute;
                left:61.484375%;
                top:50.227273%;
                background:url("../assets/text.ps-163.png") no-repeat center;
            }
            .ps-430{
                position:absolute;
                left:62.265625%;
                top:50%;
                width: 483rpx; 
                height: 1100rpx;
                margin-left: -483/2rpx;
                margin-top: -1100/2rpx;
                -webkit-mask:url("../assets/bg0.mask.ps-430.png") no-repeat;
                -webkit-mask-size:contain; 
                background: url("../assets/bg0.ps-430.jpg")left top no-repeat;
                background-size: cover;
            }
            .ps-426{
                position:absolute;
                left:9.21875%;
                top:65.454545%;
                background:url("../assets/bg1.ps-426.png") no-repeat center;
            }
            .ps-428{
                position:absolute;
                left:54.375%;
                top:45.045455%;
                background:url("../assets/bg2.ps-428.png") no-repeat center;
            }
        }
    }
</style>