<template>
    <div class="screen-main">
        <Screen00 />
        <Screen01 />
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Watch, Emit, Prop, } from 'vue-property-decorator';
    import Screen00 from './screen00.vue';
    import Screen01 from './screen01.vue';
    @Component({components:{
        Screen00,Screen01,
    }})
    export default class App extends Vue {
    };
</script>

<style lang="postcss" scoped>
.screen-main{
    padding-top: 70rpx;
    .screen00{
        margin-bottom: 150rpx;
    }
    .screen01{
        margin-bottom: 85rpx;
    }
}
</style>
