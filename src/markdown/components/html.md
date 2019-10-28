# html文件格式描述

## 说明

所有的页面，最顶层容器必须包含le_comps_core_css这个Class(非常重要!)

### SearchList(搜索，table布局+样式)

```html
<!-- 总的容器 le_comps_core_css -->
<div class="le_comps_core_css">
   <!-- 页面标题 le_page_name -->
   <h4 class="le_page_name">新的样式测试页面</h4>
   <!-- 查询条件容器 le_list_search_pannel -->
   <div class='le_list_search_pannel clearfix'>
       <!-- col1 col2 col3 col4表示宽度25%, 50%, 75%, 100% -->
       <div class="col1">
           <le-input labelWidth="120" label="订单编号:" v-model="searchModel.orderCode"></le-input>
       </div>
    </div>
   <!-- 查询条件按钮组 le_search_btn_group-->
   <div class="le_search_btn_group cleatfix">
       <le-button type="create" value="新建" @click="add"></le-button>
   </div>
   <!-- tableList容器 le_table_container -->
   <div class='le_table_container'>
       <table-list title="黑名单列表" ref='black_list_table' :options='tableOptions'></table-list>
   </div>
</div>
```

### Dialog(弹出层的布局+样式)

```html
<le-dialog title="新建弹层" height="605" width="1000" v-model="showDialog">
   <div slot="body">
       <le-form labelWidth='180' ref="saveForm">
           <!-- le_form_row_item为固定样式,组件后面跟一个按钮 -->
           <div class="le_form_row_item">
               <le-input labelWidth='150' tip="请输入身份证号码" label="身份证号码" v-model="entity.id"></le-input>
               <le-button v-show="hideAllTag" type="create" value="显示提醒" @click="showAlert"></le-button>
           </div>
           <le-input labelWidth='150' tip="输入省市区的详细信息" label="地址" v-model="entity.address"></le-input>
           <!-- 同样form里面也可以使用col1-4来表示宽度 -->
           <div class="col4">
               <le-button type="create" value="测试按钮"></le-button>
               <le-time-picker labelWidth='30' label="至" tip="输入当前之后的时间" v-model="entity.time"></le-time-picker>
           </div>
           <le-radio-list labelWidth='150' label="性别" display-name="name" :data-source="sex" display-value="code" v-model="entity.sex"></le-radio-list>
       </le-form>
   </div>
   <div slot="button">
       <le-button type="cancel" value="取消" @click="close"></le-button>
       <le-button type="save" value="保存" @click="save"></le-button>   </div>
</le-dialog>
```

### 打开新页面

```html
<!-- 新页面必须包含在 le_comps_core_css里面内，如果新页面里面使用了form组件，则form组件的所有父节点中必须设置宽度和高度，否则form组件撑满页面-->
<div class="le_comps_core_css new_page_width">
   <!-- 页面名称 le_page_name -->
   <h4 class="le_page_name">新的样式测试页面</h4>
   <le-form labelWidth='180' ref="saveForm">
   <!-- le_form_row_item为固定样式,组件后面跟一个按钮 -->
       <div class="le_form_row_item">
           <le-input labelWidth='150' tip="请输入身份证号码" label="身份证号码" v-model="entity.id"></le-input>
           <le-button v-show="hideAllTag" type="create" value="显示提醒" @click="showAlert"></le-button>
       </div>
       <le-input labelWidth='150' tip="输入省市区的详细信息" label="地址" v-model="entity.address"></le-input>
       <!-- 同样form里面也可以使用col1-4来表示宽度 -->
       <div class="col4 le_full_width">
           <le-button type="create" value="测试按钮"></le-button>
           <le-time-picker labelWidth='30' label="至" tip="输入当前之后的时间" v-model="entity.time"></le-time-picker>
       </div>
       <le-radio-list labelWidth='150' label="性别" display-name="name" :data-source="sex" display-value="code" v-model="entity.sex"></le-radio-list>
       <div class="le_new_page_btn_group">
           <le-button value="返回" type="back" @click="back"></le-button>
           <le-button value="确定" type="save" @click="save"></le-button>
       </div>
   </le-form>
</div>
```