<template>
    <form class="data-form" ref="form">
        <slot></slot>
        <input type="button" class="submit" value="提交" @click="submit">
    </form>
</template>
<script>
    function getFormData(form) {
        const data = {};
        const formData = Array.from(
            form.getElementsByTagName('input')
        ).concat(Array.from(
            form.getElementsByTagName('select')
        ));
        for(let i = 0;i<formData.length;i++){
            const item = formData[i];
            if(item.name){
                if(item.type=='radio'){
                    if(!data[item.name])data[item.name] = '';
                    if(item.checked){
                        data[item.name] = item.value;
                    }
                }else if(item.type=='checkbox'){
                    if(!data[item.name])data[item.name] = [];
                    if(item.checked){
                        data[item.name].push(item.value);
                    }
                }else{
                    data[item.name] = item.value;
                }
                if(!data[item.name]){
                    alert(item.title?`${item.title} 选项还没有填写`:'没有填写完整噢~');
                    return null;
                }
            }
        }
        return data;
    }
    export default{
        props: ['nexusData','action'],
        data(){
            return{
            }
        },
        watch:{
        },
        computed: {
        },
        methods: {
            submit(){
                const params = getFormData(this.$refs.form);
                if(!params)return;
                if(this.action){
                    this.$http.post(this.action, params).then(({data}) => {
                        this.$emit('submit',data,this.$refs.form);
                    });
                }else{
                    this.$emit('submit',params,this.$refs.form);
                }
            }
        }
    }
</script>
<style lang="postcss">
    .data-form{
        position: relative;
        display: block;
        input{
            position: relative;
            display: block;
            width: 100%;
            box-sizing: border-box;
            &[type="radio"],&[type="checkbox"]{
                display: inline-block;
                width: auto;
                &:after{
                    content: attr(title);
                    vertical-align: bottom;
                    padding-left: 15px;
                    padding-right: 5px;
                }
            }
        }
    }
</style>
