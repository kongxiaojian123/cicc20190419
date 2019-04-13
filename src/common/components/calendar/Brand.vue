<template>
    <div class="brand">
        <div class=" bg" :class="bgCont"></div>
        <transition name="reverseBottom">
            <div class="bottom" :class="fontCont" v-if="chenges"></div>
        </transition>
        <transition name="reverse">
            <div class="top" :class="fontCont"  v-if="chenges"></div>
        </transition>
    </div>
</template>
<script>
/*
*  1 从父级获取num，设置bgCont图片
*  2 监测num变化
*  3 如有修改数据，把当前背景bgCont设置为前景fontCont，bgCont设置为修改后的图片
*  4 前景执行翻牌动画，动画结束后隐藏前景fontCont
*/
export default {
    props:['num'],
    data(){
        return{
            bgCont:"",
            fontCont:'',
            chenges:false,
        }
    },
    created(){
        this.bgCont = 'n'+this.num;  
    },
    watch:{
        num:function(val){
            this.fontCont = this.bgCont;
            this.bgCont = 'n'+this.num;
            this.chenges = true;
            setTimeout(() => {
                this.chenges = false;
            }, 300);

        }
    }
}

</script>
<style rel="stylesheet/scss"  lang="postcss"   scoped>

   .brand{
       width: 61rpx;
       height: 103rpx;
       left:30%;
       top:70%;
       perspective: 260;
       div{
           position: absolute;
           top:0;
       }
       .n0{
         background:url('https://go.163.com/web/20190306_Global/static/n0.png');
       }
       .n1{
         background:url('https://go.163.com/web/20190306_Global/static/n1.png');
       }
       .n2{
         background:url('https://go.163.com/web/20190306_Global/static/n2.png');
       }.n3{
         background:url('https://go.163.com/web/20190306_Global/static/n3.png');
       }
       .n4{
         background:url('https://go.163.com/web/20190306_Global/static/n4.png');
       }
       .n5{
         background:url('https://go.163.com/web/20190306_Global/static/n5.png');
       }
       .n6{
         background:url('https://go.163.com/web/20190306_Global/static/n6.png');
       }
       .n7{
         background:url('https://go.163.com/web/20190306_Global/static/n7.png');
       }
       .n8{
         background:url('https://go.163.com/web/20190306_Global/static/n8.png');
       }
       .n9{
         background:url('https://go.163.com/web/20190306_Global/static/n9.png');
       }
        .top{
            width: 100%;
            height:50%;
            background-size:100%;
            transform-origin:bottom;
        }
        .bottom{
            width: 100%;
            height:50%;
            top:50%;
            background-position-y: 100%;
            background-size:100%;
        }
   } 
   .reverse-leave-active{
       animation: reverse 0.5s ;
   }
   .reverseBottom-leave-active{
       animation: reverseBottom 0.5s ;
   }
@keyframes reverse {
    0%{
        transform: rotateX(0deg);
        opacity: 1;
    }
    75%{
        transform: rotateX(-90deg);
        opacity: 1;
    }
    100%{
        transform: rotateX(-180deg);
        opacity: 0;
    }
    
} 
@keyframes reverseBottom {
    0%{

    }
    80%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
    
} 
</style>
