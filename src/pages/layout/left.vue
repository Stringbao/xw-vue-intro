<template>
    <div class="leftContent">
        <ul>
            <li>
                <a class="componentTitle">组件</a>
                <ul>
                    <li>
                        <a :class="item.cls" v-for="(item,idx) in routes" @click="go(item)" :key="idx">{{item.name}}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import data from "../data.js";
let clsKey = "active";
export default {
    name: 'Left',
    data(){
        return {
            comps:[]
        }
    },
    computed:{
        routes(){
            let res = [];
            for(let x in this.comps){
                res.push(this.comps[x].route);
            }
            return res;
        }
    },
    methods:{
        go(item){
            if(item.name == this.$route.name){
                return;
            }
            for(let x in this.comps){
                data[x].route.cls = "";
            }
            item.cls = clsKey;
            this.$router.push({path:item.route});
        },
    },
    mounted(){
        this.comps = data;
        for(let x in this.comps){
            if(data[x].route.name == this.$route.name){
                data[x].route.cls = clsKey;
            }
        }
    }
}

</script>

<style scoped>

.active{
    color:red !important;
    font-size: 14px;
}

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
