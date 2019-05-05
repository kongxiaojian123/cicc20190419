<template>
    <div class="screen00 ps-466" :class="{ani:ani}">
        <div class="slogan ps-432">
            <div class="bg2 ps-428" :style="bg2Style"><span></span></div>
            <div class="bg1 ps-426" :style="bg1Style"><span></span></div>
            <div class="bg0 ps-430" :style="bg0Style"></div>
            <div class="text ps-163">
                <div class="text2" :style="text2Style"><span></span></div>
                <div class="text1" :style="text1Style"><span></span></div>
                <div class="text0" :style="text0Style"><span></span></div>
            </div>
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
                        range:[1.1,1.5],
                        progress:val,
                    },
                });
                this.bg1Style = this.$parent.tweenCss({
                    translateY:{
                        fromTo:[0,450],
                        range:[1.1,1.5],
                        progress:val, 
                    },
                    translateX:{
                        fromTo:[0,-30],
                        range:[1.1,1.5],
                        progress:val, 
                    }
                });
                this.text0Style = this.$parent.tweenCss({
                    translateY:{
                        fromTo:[0,-50],
                        range:[1.1,.8],
                        progress:val,
                    },
                    translateX:{
                        fromTo:[0,150],
                        range:[1.1,.8],
                        progress:val,
                    }
                });
                this.text1Style = this.$parent.tweenCss({
                    translateX:{
                        fromTo:[0,100],
                        range:[1.1,.8],
                        progress:val,
                    }
                });
                this.text2Style = this.$parent.tweenCss({
                    translateY:{
                        fromTo:[0,50],
                        range:[1.1,.8],
                        progress:val,
                    },
                    translateX:{
                        fromTo:[0,50],
                        range:[1.1,.8],
                        progress:val,
                    }
                });
                this.bg0Style={
                    transform:`translate3d(0,0,0)`,
                    backgroundPosition:`left ${
                        this.$parent.tween({
                            backgroundPosition:{
                                fromTo:[0,-100],
                                range:[1.1,1],
                                progress:val, 
                            }
                        }).backgroundPosition
                    }px`,
                }
            }
        },
        data(){
            return{
                ani:false,
                bg2Style:null,
                bg1Style:null,
                text0Style:null,
                text1Style:null,
                text2Style:null,
                bg0Style:null,
            }
        },
        mounted(){
            this.ani = true;
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
        &.ani{
            .ps-163{
                .text0{
                    span{
                        animation: init_ani .8s ease-out forwards;
                    }
                }
                .text1{
                    span{
                        animation: init_ani .8s .3s ease-out forwards;
                    }
                }
                .text2{
                    span{
                        animation: init_ani .8s .6s ease-out forwards;
                    }
                }
            }
            .bg2{
                span{
                    animation: init_ani 1s .3s ease-out forwards;
                }
            }
        }
        .ps-163{
            .text0{
                position: absolute;
                top: 0;
                left: 0;
                span{
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: url("../assets/slogan0.png") no-repeat center;
                    transform:translateX(150rpx);
                    opacity: 0;
                }
            } 
            .text1{
                position: absolute;
                left: 0;
                top: 50%;
                span{
                    position: absolute;
                    top: 50%;
                    left: 0;
                    background: url("../assets/slogan1.png") no-repeat center;
                    transform:translateX(150rpx);
                    opacity: 0;
                }
                
            }
            .text2{
                position: absolute;
                bottom: 0;
                left: 0;
                span{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    background: url("../assets/slogan2.png") no-repeat center;
                    transform:translateX(150rpx);
                    opacity: 0;
                }
            }
        }
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
                width: 301rpx;
                height: 259rpx;
                margin-left: -301/2rpx;
                margin-top: -259/2rpx;
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
                background-image: none;
                span{
                    position: absolute;
                    top: 0;
                    left: 0;
                    background:url("../assets/bg1.ps-426.png") no-repeat center;
                    transform:translateY(-20rpx);
                    animation:loop_ani 2s ease-in-out infinite;
                }
            }
            .ps-428{
                position:absolute;
                left:54.375%;
                top:45.045455%;
                background:url("../assets/bg2.ps-428.png") no-repeat center;
                background-image: none;
                span{
                    position: absolute;
                    top: 0;
                    left: 0;
                    background:url("../assets/bg2.ps-428.png") no-repeat center;
                    transform:scale(1.3);
                    opacity: 0;
                }
            }
        }
    }
    @keyframes loop_ani {
        50%{
            transform:none;
            opacity: 1;
        }
    }
    @keyframes init_ani {
        100%{
            transform:none;
            opacity: 1;
        }
    }
</style>