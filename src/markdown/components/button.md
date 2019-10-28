# Button

## 说明

<le-button>按钮，使用@click进行事件的绑定

## 基础用法

```html
<le-button value="确定" type="save" @click="save"></le-button>
```

## 属性

| 参数     | 说明               | 类型    | 可选值 | 默认值  |
| -------- | ------------------ | ------- | ------ | ------- |
| type     | button的类型(icon) | String  | 非必填 | default |
| value    | button显示的名字   | String  | 非必填 | -       |
| disabled | 是否禁用button     | Boolean | 非必填 | false   |

## 按钮类型枚举

| 按钮类型      | 事件描述  |
| ------------- | --------- |
| search        | 搜索      |
| create        | 新增      |
| download      | 下载      |
| update        | 更新      |
| remove        | 删除      |
| approve       | 审核      |
| reject        | 拒绝      |
| start         | 启用      |
| stop          | 停用      |
| info          | 详情      |
| reset         | 重置      |
| up            | 上架      |
| down          | 下架      |
| publish       | 发布      |
| cancelPublish | 取消发布  |
| import        | 导入      |
| export        | 导出      |
| review        | 批量操作  |
| copy          | 复制      |
| setting       | 设置      |
| decorate      | 装修      |
| prevPage      | 上一页    |
| nextPage      | 下一页    |
| confirm       | 确定      |
| save          | 保存      |
| back          | 返回      |
| cancel        | 取消      |
| choose        | 请选择XXX |
| holdSave      | 暂存      |
| prev          | 上一步    |
| next          | 下一步    |
| default       | 默认      |
| warning       | 警告      |

## 事件

| 事件名称 | 事件描述  | 参数 |
| -------- | --------- | ---- |
| click    | click事件 | -    |