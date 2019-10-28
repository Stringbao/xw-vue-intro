# editor富文本编辑器

## 说明

<le-editor>使用必须要通过getCurrentComponent来获取组件对象,使用getValue和setValue来获取和设置当前富文本编辑框的值

## 基础用法

```html
<le-editor label="pc端:" :option="editorOption" ref="pcEditor"></le-editor>
```

## 属性

| 参数       | 说明                                                                                               | 类型    | 可选值 | 默认值 |
| ---------- | -------------------------------------------------------------------------------------------------- | ------- | ------ | ------ |
| option     | 配置图片上传,editorOption:{url:'/file/img/upload',fname:'file',analysis:(d)=>{return d.data.data;} | JSON    | 必填   | -      |
| ref        | 组件key,不允许重复                                                                                 | String  | 必填   | -      |
| labelWidth | label宽度                                                                                          | Number  | 非必填 | 100    |
| label      | label名                                                                                            | String  | 非必填 | -      |
| width      | 宽度，支持百分比和纯数字                                                                           | String  | 非必填 | 100%   |
| height     | 高度，支持百分比和纯数字                                                                           | String  | 非必填 | 100px  |
| tip        | 输入提示信息                                                                                       | String  | 非必填 | -      |
| on         | 是否开启验证                                                                                       | Boolean | 非必填 | false  |
| msg        | 错误提示信息                                                                                       | String  | 非必填 | -      |

==tips:配置ref, 必须要通过getCurrentComponent()来获取组件对象,editorOption里面的url为上传文件url，fname为上传问题服务器接收的key，analysis表示解析服务端返回结果的函数，是一个服务端返回的图片绝对路径==

## 事件

| 事件名称 | 事件描述   | 参数           |
| -------- | ---------- | -------------- |
| change   | change事件 | value:html源码 |
| blur     | blur事件   | value:html源码 |

==tips:change, blur事件的参数为html源码, 是否允许text，有待测试==

## 方法

| 方法名称 | 方法描述     | 示例                                                    | 参数             |
| -------- | ------------ | ------------------------------------------------------- | ---------------- |
| setValue | 设置值       | this.$refs['组件的ref'].getCurrentComponent().setValue; | value:要传递的值 |
| getValue | 获取html代码 | this.$refs['组件的ref'].getCurrentComponent().getValue; | -                |
| getText  | 获取文本值   | this.$refs['组件的ref'].getCurrentComponent().getText;  | -                |

==tips:必须通过getCurrentComponent访问当前组件对象==
