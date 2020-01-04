# 带分页的TableList

## 说明

<table-list>本地Table组件, 和table使用方法一致(不带分页)

## 基础用法

```html
<local-table-list title="项目管理列表" :options="options1"></local-table-list>
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
| actions        | 每行row的左侧操作按钮                         | Array    | 非必填 | -               |

## 事件

| 事件名称 | 事件描述 | 参数 |
| -------- | -------- | ---- |

## 方法

| 方法名称           | 方法描述              | 示例                                          | 参数 |
| ------------------ | --------------------- | --------------------------------------------- | ---- |
| init             | 初始化的table | this.$refs['组件的ref'].init(data);             | -    |
| resetTable | 回到上一次table初始化的数据状态        | this.$refs['组件的ref'].resetTable(); | -    |
| removeItems | 删除table中所有选中的项        | this.$refs['组件的ref'].removeItems(row); | 删除单个则传入当前row，删除多个选中项则不需要参数 |
| getCheckedItems | 获取选中项        | this.$refs['组件的ref'].getCheckedItems(field); | field可选,如果有field参数,该方法返回里面包含field的集合|