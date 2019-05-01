<template>
    <div class="screen14 ps-271">
        <div class="btn ps-189" @click="$emit('scrollTo',0)"></div>
        <div class="main ps-187">
            <div class="bg2 ps-275"></div>
            <div class="bg1 ps-273"></div>
            <div class="bg0 ps-121"></div>
            <div class="text ps-277">
                <div class="text5 ps-283"></div>
                <div class="text4 ps-282"></div>
                <div class="text3 ps-281"></div>
                <div class="text2 ps-280"></div>
                <div class="text1 ps-279"></div>
            </div>
        </div>
        </div>
</template>
<script >
    export default {
        data(){
            return{
                
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
        }
    }
</style>