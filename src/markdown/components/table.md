# 带分页的TableList

## 说明

<table-list>分页Table组件,具有loading以及防止在数据渲染完毕之前，发送多次请求的功能，没有数据的时候展示[暂无数据]

## 基础用法

```html
<table-list title="项目管理列表" ref="black_list_table" :options="tableOptions"></table-list>
```

## 属性

| 参数           | 说明                                          | 类型     | 可选值 | 默认值          |
| -------------- | --------------------------------------------- | -------- | ------ | --------------- |
| title          | table名字                                     | String   | 非必填 | 未设置Table名称 |
| ref            | table组件key                                  | String   | 必填   | -               |
| ---options---  | 以下row全部为options的属性                    | JSON     | 必填   | -               |
| showCk         | 是否显示checkbox                              | Boolean  | 非必填 | false           |
| singleSelected | 是否显示radio, 要使用这个属性性必须配置showCk | Boolean  | 非必填 | false           |
| map            | 返回数据源的列的映射                          | Array    | 必填   | -               |
| getUrl         | 返回请求服务器的url                           | function | 必填   | -               |
| pageOption     | 分页属性参数                                  | JSON     | 必填   | -               |
| actions        | 每行row的左侧操作按钮                         | Array    | 非必填 | -               |
| analysis       | 解析服务端返回的数据，返回特定的格式          | function | 非必填 | -               |

==tips:getUrl函数可以控制table是否发送请求，如果getUrl返回为空字符串，那么table组件将不会发送请求==

## table里面的getUrl函数详解

==tips:getUrl为一个函数，return一个字符串, 当return为空的时候, table将不请求服务器==

## table里面的analysis函数详解

==tips:数据解析参数, 该方法有一个参数data,为服务端返回的原始数据, 需要将这个data解析成一个json对象{data:[],count:0}这样的数据格式, data必须为数组==

## table里面的pageOption详解

| 名字     | 描述                     | 默认值 |
| -------- | ------------------------ | ------ |
| sizekey  | 服务端分页需要的大小字段 | -      |
| indexKey | 服务端分页需要的索引字段 | -      |
| index    | 开始索引值               | 1      |
| size     | 分页大小值               | 10     |

==tips:分页配置参数==

## table里面的action详解

| 名字    | 描述                                  | 类型     | 参数                                     |
| ------- | ------------------------------------- | -------- | ---------------------------------------- |
| key     | 按钮的样式类型，与le-button的type对应 | String   | -                                        |
| val     | 按钮的显示名称                        | String   | -                                        |
| action  | 按钮触发的事件                        | function | row(当前行对象)                          |
| convert | 转换函数，支持return html代码         | function | key(当前col对象),row(当前行对象)         |
| show    | 是否显示当前按钮函数                  | function | row(当前行对象),比如return true or false |

==tips:convert方法有2个参数, row在第二个参数里面, show方法必须return true or false==

## 事件

| 事件名称 | 事件描述 | 参数 |
| -------- | -------- | ---- |

## 方法

| 方法名称           | 方法描述              | 示例                                          | 参数 |
| ------------------ | --------------------- | --------------------------------------------- | ---- |
| search             | 索引初始化的table查询 | this.$refs['组件的ref'].search();             | -    |
| searchCurrentIndex | 当前索引的查询        | this.$refs['组件的ref'].searchCurrentIndex(); | -    |
| getCheckedItems | 获取选中项        | this.$refs['组件的ref'].getCheckedItems(field); | field可选,如果有field参数,该方法返回里面包含field的集合|