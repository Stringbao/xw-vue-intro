<template>
    <div class="leftContent">
        <ul>
            <li>
                <a class="componentTitle">组件</a>
                <ul>
                    <li>
                        <a @click="goInput">Input</a>
                        <a @click="goTextArea">TextArea</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Left',
    data(){
        return {
            
        }
    },
    methods:{
        goInput(){
            this.$router.push({path:"/input"});
        },
        goTextArea(){

        }
    }
}

</script>

<style scoped>


.xwVueIntro .content .leftContent{
    width: 240px;
    text-align: left;
    overflow-y: scroll;
    padding-bottom: 50px;
}

.xwVueIntro .content .leftContent li {
    height: 40px;
    color: #444;
    line-height: 40px;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
    cursor: pointer;
}

.xwVueIntro .content .leftContent li a:hover{
    color: #409eff;
}

.xwVueIntro .content .leftContent li .componentTitle{
    font-size: 16px;
    color: #333;
    line-height: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-weight: 700;
}

.xwVueIntro .content .leftContent li a{
    display: block;
    height: 40px;
    color: #444;
    line-height: 40px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
    text-decoration: none;
}
</style>
