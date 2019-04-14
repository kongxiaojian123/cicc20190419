<template>
    <div class="screen00 ps-466">
        <div class="slogan ps-432">
            <div class="bg2 ps-428" :style="bg2Style"></div>
            <div class="bg1 ps-426" :style="bg1Style"></div>
            <div class="bg0 ps-430"></div>
            <div class="text ps-163" :style="textStyle"></div>
        </div>
        <div class="logo ps-434"></div>
        </div>
</template>
<script >
    export default {
        props:['progress'],
        watch:{
            progress(val){
                const progress = Math.max(val-1,0);
                this.bg2Style.transform=`scale(${1+progress/1.6})`;
                this.bg1Style.transform=`translateY(${progress*160}px)`;
                this.textStyle.transform=`translateY(${progress*60}px)`;
            }
        },
        data(){
            return{
                bg2Style:{
                    transform:null,
                },
                bg1Style:{
                    transform:null,
                },
                textStyle:{
                    transform:null,
                }
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
                background:url("../assets/bg0.ps-430.png") no-repeat center;
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