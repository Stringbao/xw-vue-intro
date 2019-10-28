<template>
    <div class="leftContent">
        <ul v-for="(value,key) in comps" :key="key">
            <li>
                <a class="componentTitle">{{value.title}}</a>
                <ul>
                    <li>
                        <router-link v-for="(item,idx) in value.childs"  :to="{path:`/${key}/${item.name}`}" :key="idx">{{item.title?item.title:item.name}}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import data from "../data.js";
export default {
    name: 'Left',
    data(){
        return {
            comps:data
        }
    },
    computed:{
       
    },
    methods:{
        
    },
    mounted(){
        
    }
}

</script>

<style scoped>
ul,li{list-style: none};
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
    color: #333;
    line-height: 40px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
    text-decoration: none;
}
.xwVueIntro .content .leftContent li .router-link-exact-active.router-link-active{
    color: red;
}
</style>
