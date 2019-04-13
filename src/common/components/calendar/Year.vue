<template>
    <div class="year">
        <div class="heng"></div>
        <div class="n2"></div>
        <div class="n0"></div>
        <Brand v-bind:num="setCont10"></Brand>
        <Brand v-bind:num="setCont0"></Brand>
    </div>
</template>
<script>
import Brand from './Brand.vue';

export default {
    props:[
        'setCont0',
        'setCont10'
    ],
    data(){
        return{
        }
    },
    components:{
            Brand
        }
}
</script>
<style rel="stylesheet/scss"  lang="postcss" scoped>
 
   .heng{
       position: absolute;
       top:50%;
       z-index: 10;
       background: url(https://go.163.com/web/20190306_Global/static/nz.png) no-repeat;
   }
</style>
