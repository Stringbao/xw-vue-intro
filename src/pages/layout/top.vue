<template>
    <div class="hearder">
        <div class="fl logo"><img src="../../static/images/logo.png"/></div>
        <div class="fr version fa fa-angle-down">1.0</div>
    </div>
</template>

<script>
export default {
    name: 'Top',
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
    height: 60px;
    line-height: 60px;
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

.xwVueIntro .content .rightContent{
    width: 955px;
    height: 100%;
    overflow-y: scroll;
    border:1px solid #aaacaa;
}



</style>
