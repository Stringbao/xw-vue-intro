<template>
    <div class="detailContent">
        <h2>Input 文本框</h2>
        <ul>
            <li>
                <h3>说明</h3>
                <div>
                    <p class="instructions">
                        input文本框，使用v-model进行数据的绑定
                    </p>
                </div>
            </li>
            <li>
                <h3>基础用法</h3>
                <div class="info">
                    &lt;le-input on required vType='Number' msg labelWidth="150" placeholder="请输入年龄" label="年龄" v-model="searchModel.age"&gt;&lt;le-input&gt;
                </div>
            </li>
            <li>
                <h3>属性</h3>
                <div class="tableContent">
                    <table class="attributesTable">
                        <thead>
                            <tr>
                                <td>参数</td>
                                <td>说明</td>
                                <td>类型</td>
                                <td>可选值</td>
                                <td>默认值</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,idx) in propertys" :key="idx">
                                <td>{{item.name}}</td>
                                <td>{{item.desc}}</td>
                                <td>{{item.type}}</td>
                                <td>{{item.required}}</td>
                                <td>{{item.default}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </li>
             <li>
                <h3>事件</h3>
                <div class="tableContent">
                    <table class="attributesTable">
                        <thead>
                            <tr>
                                <td>事件名称</td>
                                <td>说明</td>
                                <td>回调参数</td>
                            </tr>
                        </thead>
                        <tbody>
                            <td>input</td>
                            <td>输入</td>
                            <td> - </td>
                        </tbody>
                    </table>
                </div>
            </li>
            <li>
                <h3>方法</h3>
                <div class="tableContent">
                    <table class="attributesTable">
                        <thead>
                            <tr>
                                <td>方法名</td>
                                <td>说明</td>
                                <td>参数</td>
                            </tr>
                        </thead>
                        <tbody>
                            <td>focus</td>
                            <td>使input获取焦点</td>
                            <td> - </td>
                        </tbody>
                    </table>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Input',
    data(){
        return {
            propertys:[
                {name:"v-model",desc:"绑定字段",type:"任意",required:"必填",default:""},
                {name:"labelWidth",desc:"label宽度",type:"Number",required:"非必填",default:"100"},
                {name:"placeholder",desc:"placeholder",type:"string",required:"非必填",default:"-"},
                {name:"label",desc:"label名",type:"string",required:"非必填",default:"-"},
                {name:"on",desc:"是否开启验证",type:"boolean",required:"非必填",default:"-"},
                {name:"required",desc:"是否必填",type:"boolean",required:"非必填",default:"-"},
                {name:"vType",desc:"文本框验证类型",type:"string",required:"非必填",default:"-"},
                {name:"msg",desc:"错误提示信息",type:"string",required:"非必填",default:"-"},
            ]
        }
    },
    methods:{
        
    }
}

</script>

<style scoped>
.detailContent{
    padding-top: 50px;
    text-align: left;
}

.detailContent h2,
.detailContent h3,
.detailContent h4,
.detailContent h5
{
    font-weight: 400;
    color: #1f2f3d;
}

.detailContent h2{
    font-size: 28px;
    font-weight: 500;
}

.detailContent h3 {
    font-size: 22px;
    margin: 35px 0 20px;
}

.detailContent .info{
    border-radius: 3px;
    min-height:100px;
    border:1px solid #cac6c6;
    background-color: #ebebeb;
    padding:30px;
}

.detailContent p.instructions {
    font-size: 14px;
    color: #5e6d82;
    line-height: 40px;
}

.detailContent .tableContent {
    width: 100%;
    overflow-y:scroll; 
}

.detailContent .attributesTable{
    min-width:100%;
    height: auto;
    border-collapse: collapse;
    border:1px solid red;
    table-layout: fixed;
}

.detailContent .attributesTable th,td{
    /* width: 20%; */
    height: 30px;
    color: #606266;
    font-size: 15px;
    line-height: 30px;
    border: 1px solid #cac6c6;
    text-align: center;
    word-break: keep-all;
    white-space: nowrap;
    padding: 5px 10px;
}

.xwVueIntro .tableContent::-webkit-scrollbar
{
    width: 3px;
    height: 10px;
} 

</style>
