# Form表单提交

## 说明

<le-form>提供表单验证功能的form组件

## 基础用法

```html
<le-form labelWidth="180" ref="saveForm">
```

## 属性

| 参数       | 说明                                          | 类型   | 可选值 | 默认值 |
| ---------- | --------------------------------------------- | ------ | ------ | ------ |
| ref        | 组件key,如果需要表单验证功能则必须加上ref属性 | String | 非必填 | -      |
| labelWidth | form组件下面所有组件的label宽度               | Number | 非必填 | -      |

==tips:form表单的宽高是跟着父元素的宽高, 也就是说容纳这个form表单的容器，必须有宽度，一般高度为100%==

## 事件

| 事件名称 | 事件描述 | 参数 |
| -------- | -------- | ---- |

## 方法

| 方法名称 | 方法描述                                                                                   | 示例                                | 参数 |
| -------- | ------------------------------------------------------------------------------------------ | ----------------------------------- | ---- |
| validate | 表达验证方法                                                                               | this.$refs['组件的ref'].validate(); | -    |
| reset    | 设置form表单所有子组件的出厂状态,包含:v-model, 验证错误信息, 验证错误css以及部分组件数据源 | this.$refs['组件的ref'].reset();    | -    |

==tips:reset方法是先执行组件内部重弄写的reset方法，如果没有就会去执行HOC内部透传下来的reset方法,validate方法返回一个Promise对象==