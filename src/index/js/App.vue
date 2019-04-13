<template>
    <div class="app">
        sadsda
        <Loading :assets="loadAssets" @complete="loadComplete"/>
    </div>
</template>

<script>
    // import { Vue, Component, Watch, Emit, Prop, } from 'vue-property-decorator';
    import Loading from 'Components/loading/App.vue';
    export default {
        data(){
            return{
                loadAssets:require.context("../assets", true, /\.(png|jpg)$/i)
            }
        },
        methods:{
            loadComplete(){
                console.log(111);
            }
        },
        components:{
            Loading
        }
    };
</script>

<style lang="postcss" scoped>

</style>
