# LocalTree 一次性加载所有数据源的Tree

## 说明

<le-local-tree>一次性获取数据，渲染tree

## 基础用法

```html
<le-local-tree displayName="name" ref="tree" :itemClick="itemClick" childrenKey="children" checkbox></le-local-tree>
```

## 属性

| 参数        | 说明                      | 类型    | 可选值 | 默认值 |
| ----------- | ------------------------- | ------- | ------ | ------ |
| displayName | 数据源显示字段            | String  | 必填   | -      |
| ref         | 组件的唯一key，不允许重复 | String  | 必填   | -      |
| childrenKey | 数据源的childrenKey       | String  | 必填   | -      |
| checkbox    | 是否显示checkbox          | Boolean | 非必填 | false  |

## 事件

| 事件名称  | 事件描述         | 参数                    |
| --------- | ---------------- | ----------------------- |
| itemClick | TreeNode选中事件 | item:当前选中的item对象 |

## 方法

- **init**
  - 初始化tree的数据源(非常重要)
  - `this.$refs['组件key'].init(data);`
  - 参数 data为一维数组,通常为parentNodeList


- **deleteSingleNode**	
  - 删除所选节点(无论层级关系)
  - `this.$refs['组件key'].deleteSingleNode(Node);`
  - Node:当前所选Node,可以通过itemClick方法得到


- **getAllCheckedNodes**	
  - 获取所有选中的子节点(包含所有选中状态的父节点)
  - `this.$refs['tree'].getAllCheckedNodes();`

- **getAllCheckboxNodesExcludeParent**	
  - 获取所有选中的子节点(不包含所有选中状态的父节点)
  - `this.$refs['tree'].getAllCheckboxNodesExcludeParent();	`

- **reset**	
  - 重置tree数据源,该方法无需参数
  - `this.$refs['tree'].reset();`

- **updateSingleNode**
  - 更新单个节点,需要2个参数(node,data-->传输的数据,格式{__displayName:'显示名字',__children:[需要添加的数组]})
  - `this.$refs['tree'].updateSingleNode(node,array);`
  - node:当前节点,array:需要更新的数组

- **checkAll**
  - 选中/非选中所有checkbox，必须配置checkbox属性
  - `this.$refs['tree'].checkAll(flag);	`
  - flag:true or false

- **expandAll**
  - 展开/关闭中所有节点
  - `this.$refs['tree'].expandAll(flag);`
  - flag:true or false

- **bindCKByField**
  - 数据回写绑定节点
  - `this.$refs['tree'].bindCKByField(field,array);	`
  - field:绑定的字段名称,array:一维数组,需要绑定的值

==tips:初始化必须执行init方法进行组件内部数据源初始化, deleteSingleNode:谨慎使用(允许直接删除父节点)==