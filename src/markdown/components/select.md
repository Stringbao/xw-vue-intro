# Select 下拉框

## 说明

<le-local-select>带搜索(本地filter)，带所选的下拉框

## 基础用法

```
<le-local-select label="选择职业" :data-source="shops" display-name="val" display-value="key" v-model="job"></le-local-select>
```

## 属性

| 参数         | 说明              | 类型    | 可选值 | 默认值 |
| ------------ | ----------------- | ------- | ------ | ------ |
| v-model      | select绑定字段    | String  | 必填   | -      |
| enabledInput | 是否允许模糊查询  | Boolean | 非必填 | false  |
| multiple     | 是否允许多选      | Boolean | 非必填 | false  |
| displayName  | 显示字段          | String  | 必填   | -      |
| displayValue | 传值字段          | String  | 必填   | -      |
| dataSource   | 数据源            | Array   | 必填   | []     |
| placeholder  | placeholder       | String  | 非必填 | -      |
| labelWidth   | label宽度         | Number  | 非必填 | 100    |
| label        | label名           | String  | 非必填 | -      |
| tip          | input输入提示信息 | String  | 非必填 | -      |
| readonly     | 是否只读          | Boolean | 非必填 | false  |
| on           | 是否开启验证      | Boolean | 非必填 | false  |

==tips:on开启验证功能,只验证当前v-model是否为空(无需required), display-name显示字段, display-value传值字段==

## 事件

| 事件名称 | 事件描述   | 参数                                              |
| -------- | ---------- | ------------------------------------------------- |
| change   | change事件 | 当前选中的值,如果是多个，那么是以逗号分隔的字符串 |

## 方法

| 方法名称 | 方法描述 | 示例 | 参数 |
| -------- | -------- | ---- | ---- |