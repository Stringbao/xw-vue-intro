<template>
    <div class="detailContent">
        <h2>Input 文本框</h2>
        <ul>
            <li>
                <h3>说明</h3>
                <div>
                    <p class="instructions">Input 文本框的使用说明，Input 文本框的使用说明Input 文本框的使用说明Input 
                        文本框的使用说明Input 文本框的使用说明</p>
                </div>
            </li>
            <li>
                <h3>基础用法</h3>
                <div class="info">
                    <!-- 对代码的基本使用说明 -->
                    <div class="instructionsCode">
                        <p class="instructions">input通过v-model实现数据的双向绑定</p>
                    </div>
                    <!-- 代码展示 -->
                    <div class="codeContent">
                        <!-- <le-input v-model="aaa" label="姓名" readonly="true" labelWidth="100"></le-input> -->
                        写代码
                    </div>
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
                            <td>labelWidth</td>
                            <td>设置label的宽度</td>
                            <td>数字(如:100,200,300....)</td>
                            <td>任意非负数</td>
                            <td>100</td>
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
    padding-bottom: 30px;
}

.detailContent .info .instructionsCode{
    padding: 0 30px;
    border-bottom:1px solid #ebebeb;
    background-color: #fff;
}

.detailContent .info .codeContent{
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
