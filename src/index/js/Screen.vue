<template>
    <div class="screen-main">
        <Screen00 />
        <Screen01 />
        <Screen02 />
        <Screen03 />
        <Screen04 />
        <Screen05 />
        <Screen06 />
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Watch, Emit, Prop, } from 'vue-property-decorator';
    import Screen00 from './screen00.vue';
    import Screen01 from './screen01.vue';
    import Screen02 from './screen02.vue';
    import Screen03 from './screen03.vue';
    import Screen04 from './screen04.vue';
    import Screen05 from './screen05.vue';
    import Screen06 from './screen06.vue';
    @Component({components:{
        Screen00,Screen01,Screen02,Screen03,Screen04,Screen05,Screen06,
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
    .screen02{
        margin-bottom: 150rpx;
    }
    .screen03{
        margin-bottom: 100rpx;
    }
    .screen04{
        margin-bottom: 140rpx;
    }
    .screen05{
        margin-bottom: 150rpx;
    }
    .screen06{
        margin-bottom: 100rpx;
    }
}
</style>
