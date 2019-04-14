<template>
    <div class="app">
        <Screen v-if="pageIndex===0"></Screen>
        <Loading v-if="pageIndex===-1" :assets="loadAssets" @complete="loadComplete"/>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Watch, Emit, Prop, } from 'vue-property-decorator';
    import Loading from 'loading/App.vue';
    import Screen from './Screen.vue';
    @Component({components:{
        Loading,Screen
    }})
    export default class App extends Vue {
        private loadAssets:RequireContext=require.context("../assets", true, /\.(png|jpg)$/i);
        private pageIndex:number=-1;
        private loadComplete(){
            this.setPage(0);
        }
        private setPage(index:number){
            this.pageIndex = index;
        }
    };
</script>

<style lang="postcss" scoped>
.app{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
