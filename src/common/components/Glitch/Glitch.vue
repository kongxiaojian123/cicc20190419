<template>
    <div class="glitch">
        <div class="glitch-item glitch-item1"></div>
        <div class="glitch-item glitch-item2"></div>
        <div class="glitch-item glitch-item3"></div>
        <div class="glitch-item glitch-item4"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{

        },
        components:{

        }
    };
</script>

<style lang="postcss" scoped>
    .glitch{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        .glitch-item{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            overflow: hidden;
        }
        .glitch-item1{
            background-image: url(https://go.163.com/web/20181022_chimelong/assets/00.175ca98.jpg?c3e5d97);
            transform: translate3d(0,0,0) scale3d(-1,-1,1);
            animation: 2s glitch-anim-1 linear infinite;
        }
        .glitch-item2{
            background-image: url(https://go.163.com/web/20181022_chimelong/assets/00.175ca98.jpg?c3e5d97);
            animation: 2s glitch-anim-2 linear infinite;
        }
        .glitch-item3{
            background-image: url(https://go.163.com/web/20181022_chimelong/assets/00.175ca98.jpg?c3e5d97);
            transform: translate3d(0, 0, 0) scale3d(-1,-1,1);
            animation: 2s glitch-anim-3 linear infinite;
        }
        .glitch-item4{
            background-image: url(https://go.163.com/web/20181022_chimelong/assets/00.175ca98.jpg?c3e5d97);
            animation: 2s glitch-anim-flash linear infinite;
        }
    }
    @keyframes glitch-anim-1 {
        0%, 100% {
            opacity: 1;
            -webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
            clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
        }
        20% {
            -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
            clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
        }
        30% {
            -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
            clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
        }
        40% {
            -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
            clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
        }
        50% {
            -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
            clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
        }
        55% {
            -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
            clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
        }
        60% {
            -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
            clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
        }
        65% {
            -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
            clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
        }
        70% {
            -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
            clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
        }
        80% {
            -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
            clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
        }
        85% {
            -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 65%, 0 65%);
            clip-path: polygon(0 60%, 100% 60%, 100% 65%, 0 65%);
        }
        95% {
            -webkit-clip-path: polygon(0 72%, 100% 72%, 100% 78%, 0 78%);
            clip-path: polygon(0 72%, 100% 72%, 100% 78%, 0 78%);
        }
    }
    @keyframes glitch-anim-2 {
        0%, 100% {
            opacity: 1;
            transform: translate3d(0,0,0);
            -webkit-clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
            clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
        }
        10% {
            -webkit-clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
            clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
        }
        15% {
            -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
            clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
        }
        17% {
            -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
            clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
        }
        19% {
            -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
            clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
        }
        33% {
            -webkit-clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
            clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
        }
        35% {
            -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
            clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
        }
        40% {
            -webkit-clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
            clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
        }
        45% {
            -webkit-clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
            clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
        }
        49% {
            -webkit-clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
            clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
        }
        50% {
            -webkit-clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
            clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
        }
        55% {
            -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 35%, 0 35%);
            clip-path: polygon(0 15%, 100% 15%, 100% 35%, 0 35%);
        }
        60% {
            -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
            clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
        }
        70% {
            -webkit-clip-path: polygon(0 65%, 100% 65%, 100% 60%, 0 60%);
            clip-path: polygon(0 65%, 100% 65%, 100% 60%, 0 60%);
        }
        80% {
            -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 85%, 0 85%);
            clip-path: polygon(0 80%, 100% 80%, 100% 85%, 0 85%);
        }
        90% {
            -webkit-clip-path: polygon(0 55%, 100% 55%, 100% 65%, 0 65%);
            clip-path: polygon(0 55%, 100% 55%, 100% 65%, 0 65%);
        }
    }
    @keyframes glitch-anim-3 {
        0%, 100% {
            opacity: 1;
            -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
            clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
        }
        5% {
            -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
            clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
        }
        11% {
            -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
            clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
        }
        20% {
            -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
            clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
        }
        25% {
            -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
            clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
        }
        35% {
            -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
            clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
        }
        42% {
            -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
            clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
        }
        48% {
            -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
            clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
        }
        50% {
            -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
            clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
        }
        56% {
            -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
            clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
        }
        61% {
            -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
            clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
        }
        68% {
            -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
            clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
        }
        72% {
            -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
            clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
        }
        77% {
            -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
            clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
        }
        81% {
            -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
            clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
        }
        86% {
            -webkit-clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
            clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
        }
        90% {
            -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
            clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
        }
        92% {
            -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
            clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
        }
        94% {
            -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
            clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
        }
    }
    @keyframes glitch-anim-flash {
        0%, 5% {
            opacity: 0.2;
            transform: translate3d(0,0,0);
        }
        5.5%, 100% {
            opacity: 0;
            transform: translate3d(0, 0, 0);
        }
    }
</style>