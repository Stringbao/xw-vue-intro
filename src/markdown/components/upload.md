# Upload上传组件

## 说明

<le-upload>上传组件，支持单文件/多文件上传，支持大小，文件格式校验,如果是图片还支持规格(宽*高)验证，

## 基础用法

```html
<le-upload :options="imgUploadOpt" v-model="entity.pcCoverImg"></le-upload>
```

## 属性

| 参数          | 说明                                                                     | 类型     | 可选值 | 默认值 |
| ------------- | ------------------------------------------------------------------------ | -------- | ------ | ------ |
| v-model       | 绑定字段                                                                 | String   | 必填   | -      |
| labelWidth    | label宽度                                                                | Number   | 非必填 | 100    |
| label         | label名                                                                  | String   | 非必填 | -      |
| readonly      | 是否只读                                                                 | Boolean  | 非必填 | false  |
| on            | 是否开启验证                                                             | Boolean  | 非必填 | false  |
| msg           | 错误提示信息                                                             | String   | 非必填 | -      |
| ---options--- | options所有配置如下                                                      | JSON     | 非必填 | -      |
| multiple      | 是否允许多文件上传                                                       | Boolean  | 非必填 | false  |
| url           | 请求url                                                                  | String   | 必填   | -      |
| noResult      | 隐藏上传返回数据, 直接显示上传成功                                       | Boolean  | 非必填 | false  |
| vtype         | 上传文件类型，逗号分割                                                   | String   | 非必填 | -      |
| fname         | 服务器上传标识key                                                        | String   | 必填   | -      |
| analysis      | 返回路径解析函数，必须return路径                                         | Function | 必填   | -      |
| tip           | tip提示信息                                                              | String   | 非必填 | -      |
| width         | 上传图片验证规格Width验证,vType必须标识为gif,jpg,png,icon等图片后缀名称  | String   | 非必填 | -      |
| height        | 上传图片验证规格height验证,vType必须标识为gif,jpg,png,icon等图片后缀名称 | String   | 非必填 | -      |

==tips:upload组件允许设置单个或者多个文件/图片上传,可以控制规格(只针对图片),文件大小，文件类型，noResult这个参数为上传成功后是否回写数据==

## 事件

| 事件名称 | 事件描述 | 参数 |
| -------- | -------- | ---- |

## 方法

| 方法名称 | 方法描述 | 示例 | 参数 |
| -------- | -------- | ---- | ---- |
