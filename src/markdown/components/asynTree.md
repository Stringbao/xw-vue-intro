# AsynTree 异步加载树

## 说明

<le-asyn-tree>，异步加载tree

## 基础用法

```html
<le-asyn-tree displayName="name" :asynOptions="asynOptions" ref="tree" :itemClick="itemClick" checkbox></le-asyn-tree>
```

## 属性

| 参数              | 说明                                     | 类型     | 可选值 | 默认值 |
| ----------------- | ---------------------------------------- | -------- | ------ | ------ |
| displayName       | 数据源显示字段                           | String   | 必填   | -      |
| ref               | 组件的唯一key，不允许重复                | String   | 必填   | -      |
| checkbox          | 是否显示checkbox                         | Boolean  | 非必填 | false  |
| ---asynOptions--- | ajax请求url配置(getUrl)和analysis函数    | JSON     | 必填   | -      |
| getUrl            | 返回一个url                              | Function | 必填   | -      |
| analysis          | 解析从服务端返回回来的数据，必须返回数组 | Function | 必填   | -      |

==tips:asynOptions.analysis必须返回数组==

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

==tips:初始化必须在组件外部调用ajax方法，进行init初始化(asynOptions只是处理从第二级往下的异步加载), deleteSingleNode:谨慎使用(允许直接删除父节点)==

