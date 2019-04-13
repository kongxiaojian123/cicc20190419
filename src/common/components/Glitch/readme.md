# Glitch 图像分割动画
[效果](http://www.jq22.com/demo/Glitch201804012158/)  
[项目实例](https://go.163.com/web/20181022_chimelong/index.html)

## 使用方法
```html
<template>
    <Glitch class="glitch"></Glitch>
</template>
```
```javascript
<script>
    import Loading from 'Components/Glitch/Glitch';
    export default {
        components:{
            Glitch,
        }
    };
</script>
```

修改切割的图片
```css
<style lang="postcss" scoped>
    .glitch>>>{
        .glitch-item1{
            background-image: url(../assets/question3/00.jpg);
        }
        .glitch-item2{
            background-image: url(../assets/question3/00.jpg);
        }
        .glitch-item3{
            background-image: url(../assets/question3/00.jpg);
        }
        .glitch-item4{
            background-image: url(../assets/question3/00.jpg);
        }
    }
</style>
```