///<reference path="../../../project.d.ts" />
import 'Css/base.css';
import '../css/index.css';
import  'Js/config.share';//分享
import  'Js/config.filter';//配置axios
import Vue from 'vue';
import App from './App.vue';
new Vue({
    el:"#app",
    template: '<App/>',
    components:{
        App
    }
});
