# Textarea

## 说明

<le-textarea>文本框，使用v-model进行数据的绑定

## 基础用法

```html
<le-textarea placeholder="请输入详细地址" label="详细地址" v-model="content"></le-textarea>
```

## 属性

| 参数        | 说明                    | 类型    | 可选值 | 默认值 |
| ----------- | ----------------------- | ------- | ------ | ------ |
| v-model     | 绑定字段                | String  | 必填   | -      |
| labelWidth  | label宽度               | Number  | 非必填 | 100    |
| placeholder | placeholder             | String  | 非必填 | -      |
| label       | label名                 | String  | 非必填 | -      |
| tip         | 输入提示信息            | String  | 非必填 | -      |
| width       | 宽度,支持百分比和纯数字 | String  | 非必填 | 100%   |
| height      | 高度,支持百分比和纯数字 | String  | 非必填 | 100px  |
| readonly    | 是否只读                | Boolean | 非必填 | false  |
| on          | 是否开启验证            | Boolean | 非必填 | false  |
| msg         | 错误提示信息            | String  | 非必填 | -      |

==tips:除了input需要required, 其他组件都不需要required属性，开启on表示必填==

## 事件

| 事件名称 | 事件描述   | 参数                |
| -------- | ---------- | ------------------- |
| blur     | blur事件   | value:当前input的值 |
| change   | change事件 | value:当前input的值 |

## 方法

| 方法名称 | 方法描述                | 示例                                                   | 参数 |
| -------- | ----------------------- | ------------------------------------------------------ | ---- |
| clear    | 清空文本框的值(v-model) | this.$refs['组件的ref'].getCurrentComponent().clear(); | -    |

==tips:必须要通过getCurrentComponent()来获取当前的组件对象, 不允许直接调用方法==