# Alert

## 说明

全局注册Vue的方法,包含this.alert.showAlert/showConfirm/showNotify

## 基础用法

```javascript
this.alert.showAlert, this.alert.showConfirm, this.alert.showNotify
```

## 属性

| 参数  | 说明                                                    | 类型    | 可选值 | 默认值 |
| ----- | ------------------------------------------------------- | ------- | ------ | ------ |
| type  | 消息类型(success,info,error)(showAlert,showNotify使用)  | String  | 必填   | -      |
| msg   | 消息内容(showAlert,showNotify使用)                      | String  | 必填   | -      |
| title | confirm的提示标题(只针对showConfirm使用)                | String  | 必填   | -      |
| cb    | 只针对showConfirm,点击确定的回调(只针对showConfirm使用) | Functon | 必填   | -      |

==tips:showAlert, showNotify需要接受2个参数,第一个参数为提示类型(success,info,error), 第二个参数为提示消息，showConfirm的第一个参数为提示title，第二个参数为点击确定的callback回调==

## 事件

| 事件名称 | 事件描述 | 参数 |
| -------- | -------- | ---- |

## 方法

| 方法名称                  | 方法描述                | 示例                                                   | 参数 |
| ------------------------- | ----------------------- | ------------------------------------------------------ | ---- |
| showAlert                 | 常规提示信息            | this.alert.showAlert('success','成功')                 | -    |
| showConfirm               | confirm提示，必须带回调 | this.alert.showConfirm('提示信息',()=>{todo})          | -    |
| showNotify需要接受2个参数 | 亮眼的提示信息          | this.alert.showNotify需要接受2个参数('success','成功') | -    |

==tips:showAlert, showNotify需要接受2个参数,第一个参数为提示类型(success,info,error), 第二个参数为提示消息，showConfirm的第一个参数为提示title，第二个参数为点击确定的callback回调==