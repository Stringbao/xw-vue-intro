<template>
    <div class="xwVueIntro">
        <div class="hearder">
            <div class="fl logo"><img src="../../static/images/logo.png"/></div>
            <div class="fr version fa fa-angle-down">1.0</div>
        </div>
        <div class="content">
            <!-- 左侧 -->
            <div class="fl leftContent">
                <ul>
                    <li>
                        <a class="componentTitle">组件</a>
                        <ul>
                            <li>
                                <a href="#">input</a>
                                <a href="#">textArea</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- 右侧 -->
            <div class="fr rightContent">
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
export default {
    name: 'Layout',
    data(){
        return {
            
        }
    },
    methods:{
        
    }
}

</script>

<style scoped>
.fl{
    float: left;
}

.fr{
    float: right;
}

.clearfix:after{
    content:".";
    display:block;
    height:0;
    clear:both;
    visibility:hidden
}

.xwVueIntro{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
}

.xwVueIntro .hearder{
    width: 1200px;
    margin: 0 auto;
    height: 73px;
    line-height: 73px;
    border-bottom: 1px solid #aaacaa;
    margin-bottom: 10px;
}

.xwVueIntro .hearder .logo{
    height: 100%;
}

.xwVueIntro .hearder .logo img{
    object-fit: contain;
    height: 100%;
}

.xwVueIntro .version{
    font-size: 20px;
    color: #888;
    user-select: none;
    height: 100%;
    line-height: 73px;
    position: relative;
    padding-right: 22px;
}

.xwVueIntro .version::before{
    position: absolute;
    right: 0;
}
.xwVueIntro .content{
    flex:1;
    width: 1200px;
    margin: 0 auto;
}

.xwVueIntro .content .leftContent{
    width: 240px;
    height: 100%;
    border:1px solid #aaacaa;
    text-align: left;
    overflow-y: scroll;
}


.xwVueIntro .content .leftContent li {
    height: 40px;
    color: #444;
    line-height: 40px;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
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

.xwVueIntro .content .rightContent{
    width: 955px;
    height: 100%;
    overflow-y: scroll;
    border:1px solid #aaacaa;
}



</style>
