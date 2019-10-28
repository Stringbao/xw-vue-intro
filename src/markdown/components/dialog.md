# dialog弹出层

## 说明

<le-dialog>弹出层，使用v-model进行隐藏和显示

## 基础用法

```html
<le-dialog title="新建弹层" height="605" width="1000" v-model="showDialog">
```

## 属性

| 参数    | 说明     | 类型   | 可选值 | 默认值 |
| ------- | -------- | ------ | ------ | ------ |
| v-model | 绑定字段 | String | 必填   | -      |
| width   | 宽度     | Number | 非必填 | 700    |
| height  | 高度     | Number | 非必填 | 300    |
| title   | label名  | String | 非必填 | -      |

==tips:使用v-model进行值绑定，width & height必须为数字==

## 事件

| 事件名称      | 事件描述       | 参数 |
| ------------- | -------------- | ---- |
| closeCallback | 关闭的回调函数 | -    |

==tips:closeCallback回调函数必须配置==

## 方法

| 方法名称 | 方法描述 | 示例 | 参数 |
| -------- | -------- | ---- | ---- |