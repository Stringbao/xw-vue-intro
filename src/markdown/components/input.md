# Input 文本框

## 说明

<le-input>文本框，使用v-model进行数据的绑定, 如果要开启验证, 必须开启on

## 基础用法

```html
<le-input labelWidth="150" placeholder="请输入年龄" label="年龄" v-model="age"><le-input>
```

## 属性

| 参数        | 说明              | 类型    | 可选值 | 默认值 |
| ----------- | ----------------- | ------- | ------ | ------ |
| v-model     | 绑定字段          | String  | 必填   | -      |
| labelWidth  | label宽度         | Number  | 非必填 | 100    |
| placeholder | placeholder       | String  | 非必填 | -      |
| label       | label名           | String  | 非必填 | -      |
| tip         | input输入提示信息 | String  | 非必填 | -      |
| readonly    | 是否只读          | Boolean | 非必填 | false  |
| on          | 是否开启验证      | Boolean | 非必填 | false  |
| required    | 是否必填          | Boolean | 非必填 | false  |
| vType       | 文本框验证类型    | String  | 非必填 | -      |
| msg         | 错误提示信息      | String  | 非必填 | -      |

==tips:on是开启验证功能，vType和msg属性只在开启on属性后生效，required为必填，on和required可以一起使用==

## 验证类型

| 类型             | 说明                                                 |
| ---------------- | ---------------------------------------------------- |
| decimals         | 数字(正负,小数整数都可以)                            |
| number           | 正,负整数                                            |
| positive         | 正整数                                               |
| positiveDecimals | 正小数                                               |
| positiveNumber   | 正数                                                 |
| negativeNumber   | 负数                                                 |
| negativeDecimals | 负小数                                               |
| negative         | 负整数                                               |
| email            | 邮箱                                                 |
| url              | url(https或者http)                                   |
| https            | https的url                                           |
| http             | http的url                                            |
| id               | 身份证                                               |
| phone            | 手机号(不包含固话)                                   |
| tel              | 电话号(含固话 手机)                                  |
| password         | 密码, 字母开头 长度6-18，只能包含字符 数字 和 下划线 |

==tips:input的验证类型,vType='email'==

## 事件

| 类型   | 说明       | 参数                |
| ------ | ---------- | ------------------- |
| enter  | enter事件  | value:当前input的值 |
| blur   | blur事件   | value:当前input的值 |
| change | change事件 | value:当前input的值 |
| click  | click事件  | value:当前input的值 |


## 方法

| 方法名称 | 方法描述                | 示例                                                   | 参数 |
| -------- | ----------------------- | ------------------------------------------------------ | ---- |
| clear    | 清空文本框的值(v-model) | this.$refs['组件的ref'].getCurrentComponent().clear(); | -    |
| focus    | 获取焦点                | this.$refs['组件的ref'].getCurrentComponent().focus(); | -    |

==tips:必须要通过getCurrentComponent()来获取当前的组件对象, 不允许直接调用方法==