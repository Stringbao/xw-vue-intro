<template>
    <div class="detailContent">
        <h2>{{comp.name}}</h2>
        <ul>
            <li>
                <h3>说明</h3>
                <div>
                    <p class="instructions">
                        {{comp.desc}}
                    </p>
                </div>
            </li>
            <li>
                <h3>基础用法</h3>
                <div class="info">
                    {{comp.baseInfo}}
                </div>
            </li>
            <li v-for="(item,idx) in items" :key="idx">
                <h3>{{comp.info[item].key}}</h3>
                <div class="tableContent">
                    <table class="attributesTable">
                        <thead>
                            <tr>
                                <td v-for="(x,idxx) in comp.info[item].cols" :key="idxx">{{x.val}}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row,idxxx) in comp.info[item].data" :key="idxxx">
                                <td v-for="(x,idxxxx) in comp.info[item].cols" :key="idxxxx">
                                    {{row[x.name]}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p class="tip" v-show="comp.info[item].tips">
                    tips:{{comp.info[item].tips}}
                </p>
            </li>
        </ul>
        
    </div>
</template>

<script>
import COMPS from "../data.js";
export default {
    name: 'comp',
    data(){
        return {
            comp:{},
        }
    },
    watch: {
    　　'$route'(to, from) {
            this.init();
    　　}
    },
    computed:{
        items(){
            let res = [];
            for(let i in this.comp.info){
                res.push(i);
            }
            return res;
        }
    },
    methods:{
        init(){
            this.comp = COMPS[this.$route.name];
        }
    },
    mounted(){
        this.init();
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

.detailContent p.tip {
    font-size: 12px;
    color: red;
    line-height: 20px;
    margin: 5px 0;
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

.detailContent .attributesTable thead{
    background-color: #ebebeb;
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
