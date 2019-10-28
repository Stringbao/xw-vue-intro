# Radio 单选框

## 说明

<le-radio-list>单选框, 使用v-model进行数据的绑定, data-source进行数据源的绑定

## 基础用法

```html
<le-radio-list on label="爱好" :data-source="fav" display-name="name" display-value="code" v-model="fav"></le-radio-list>
```

## 属性

| 参数         | 说明              | 类型    | 可选值 | 默认值 |
| ------------ | ----------------- | ------- | ------ | ------ |
| v-model      | 绑定字段          | String  | 必填   | -      |
| displayName  | 显示字段          | String  | 必填   | -      |
| displayValue | 传值字段          | String  | 必填   | -      |
| dataSource   | 数据源            | Array   | 必填   | []     |
| labelWidth   | label宽度         | Number  | 非必填 | 100    |
| label        | label名           | String  | 非必填 | -      |
| tip          | input输入提示信息 | String  | 非必填 | -      |
| readonly     | 是否只读          | Boolean | 非必填 | false  |
| on           | 是否开启验证      | Boolean | 非必填 | false  |

==tips:on开启验证功能(无需required), display-name显示字段, display-value传值字段==

## 事件

| 事件名称 | 事件描述   | 参数                          |
| -------- | ---------- | ----------------------------- |
| change   | change事件 | 当前input的值, 逗号分隔字符串 |

## 方法

| 方法名称 | 方法描述 | 示例 | 参数 |
| -------- | -------- | ---- | ---- |