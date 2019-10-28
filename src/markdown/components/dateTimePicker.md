# DateTimePicker 日期时间选择器

## 说明

<le-date-time-picker>日期时间组件，使用v-model进行数据的绑定

## 基础用法

```html
<le-date-time-picker label="时间日期组件" v-model="entity.datetime"></le-date-time-picker>
```

## 属性

| 参数        | 说明         | 类型    | 可选值 | 默认值 |
| ----------- | ------------ | ------- | ------ | ------ |
| v-model     | 绑定字段     | String  | 必填   | -      |
| labelWidth  | label宽度    | Number  | 非必填 | 100    |
| placeholder | placeholder  | String  | 非必填 | -      |
| label       | label名      | String  | 非必填 | -      |
| tip         | 输入提示信息 | String  | 非必填 | -      |
| readonly    | 是否只读     | Boolean | 非必填 | false  |
| on          | 是否开启验证 | Boolean | 非必填 | false  |
| msg         | 错误提示信息 | String  | 非必填 | -      |

==tips:使用v-model进行值绑定==


## 事件

| 事件名称 | 事件描述                         | 参数         |
| -------- | -------------------------------- | ------------ |
| change   | 日期时间发生变化触发的change事件 | value:当前值 |



## 方法
| 方法名称 | 方法描述 | 示例 | 参数 |
| -------- | -------- | ---- | ---- |