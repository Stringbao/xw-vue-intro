let comps = {
    input:{
        name:"Input 文本框",
        type:"input",
        desc:"<le-input>文本框，使用v-model进行数据的绑定",
        baseInfo:'<le-input labelWidth="150" placeholder="请输入年龄" label="年龄" v-model="age"><le-input>',
        info:{
            propertys:{
                key:"属性",
                tips:"tips: on是开启验证功能，vType和msg属性只在开启on属性后生效，required为必填，on和required可以一起使用",
                cols:[
                    {name:"name",val:"参数"},{name:"desc",val:"说明"},{name:"type",val:"类型"},
                    {name:"required",val:"可选值"},{name:"default",val:"默认值"}
                ],
                data:[
                    {name:"v-model",desc:"绑定字段",type:"任意",required:"必填",default:""},
                    {name:"labelWidth",desc:"label宽度",type:"Number",required:"非必填",default:"100"},
                    {name:"placeholder",desc:"placeholder",type:"string",required:"非必填",default:"-"},
                    {name:"label",desc:"label名",type:"string",required:"非必填",default:"-"},
                    {name:"tip",desc:"input输入提示信息",type:"string",required:"非必填",default:"-"},
                    {name:"readonly",desc:"是否只读",type:"boolean",required:"非必填",default:"false"},
                    {name:"on",desc:"是否开启验证",type:"boolean",required:"非必填",default:"-"},
                    {name:"required",desc:"是否必填",type:"boolean",required:"非必填",default:"-"},
                    {name:"vType",desc:"文本框验证类型",type:"string",required:"非必填",default:"-"},
                    {name:"msg",desc:"错误提示信息",type:"string",required:"非必填",default:"-"},
                ]
            },
            events:{
                key:"事件",
                tips:"",
                cols:[
                    {name:"name",val:"事件名称"},{name:"desc",val:"事件描述"},{name:"params",val:"参数"},
                ],
                data:[
                    {name:"enter",desc:"enter事件",params:"value:当前input的值"},
                    {name:"blur",desc:"blur事件",params:"value:当前input的值"},
                    {name:"change",desc:"change事件",params:"value:当前input的值"},
                    {name:"click",desc:"click事件",params:"value:当前input的值"}
                ]
            },
            methods:{
                key:"方法",
                tips:"必须要通过getCurrentComponent()来获取当前的input组件对象, 不允许直接调用方法",
                cols:[
                    {name:"name",val:"方法名称"},{name:"desc",val:"方法描述"},{name:"demo",val:"示例"},{name:"params",val:"参数"}
                ],
                data:[
                    {name:"clear",desc:"清空文本框的值(v-model)",demo:"this.$refs['组件的ref'].getCurrentComponent().clear();",params:"-"},
                    {name:"focus",desc:"获取焦点",demo:"this.$refs['组件的ref'].getCurrentComponent().focus();",params:"-"}
                ]
            }
        }
    },
    textarea:{
        name:"Textarea",
        type:"Textarea",
        desc:"<le-textarea>文本框，使用v-model进行数据的绑定",
        baseInfo:'<le-textarea labelWidth="150" placeholder="请输入年龄" label="年龄" v-model="age"><le-textarea>',
        info:{
            propertys:{
                key:"属性",
                tips:"tips: on是开启验证功能，vType和msg属性只在开启on属性后生效，required为必填，on和required可以一起使用",
                cols:[
                    {name:"name",val:"参数"},{name:"desc",val:"说明"},{name:"type",val:"类型"},
                    {name:"required",val:"可选值"},{name:"default",val:"默认值"}
                ],
                data:[
                    {name:"v-model",desc:"绑定字段",type:"任意",required:"必填",default:""},
                    {name:"labelWidth",desc:"label宽度",type:"Number",required:"非必填",default:"100"},
                    {name:"placeholder",desc:"placeholder",type:"string",required:"非必填",default:"-"},
                    {name:"label",desc:"label名",type:"string",required:"非必填",default:"-"},
                    {name:"tip",desc:"input输入提示信息",type:"string",required:"非必填",default:"-"},
                    {name:"readonly",desc:"是否只读",type:"boolean",required:"非必填",default:"false"},
                    {name:"on",desc:"是否开启验证",type:"boolean",required:"非必填",default:"-"},
                    {name:"required",desc:"是否必填",type:"boolean",required:"非必填",default:"-"},
                    {name:"vType",desc:"文本框验证类型",type:"string",required:"非必填",default:"-"},
                    {name:"msg",desc:"错误提示信息",type:"string",required:"非必填",default:"-"},
                ]
            },
            events:{
                key:"事件",
                tips:"",
                cols:[
                    {name:"name",val:"事件名称"},{name:"desc",val:"事件描述"},{name:"params",val:"参数"},
                ],
                data:[
                    {name:"enter",desc:"enter事件",params:"value:当前input的值"},
                    {name:"blur",desc:"blur事件",params:"value:当前input的值"},
                    {name:"change",desc:"change事件",params:"value:当前input的值"},
                    {name:"click",desc:"click事件",params:"value:当前input的值"}
                ]
            },
            methods:{
                key:"方法",
                tips:"必须要通过getCurrentComponent()来获取当前的input组件对象, 不允许直接调用方法",
                cols:[
                    {name:"name",val:"方法名称"},{name:"desc",val:"方法描述"},{name:"demo",val:"示例"},{name:"params",val:"参数"}
                ],
                data:[
                    {name:"clear",desc:"清空文本框的值(v-model)",demo:"this.$refs['组件的ref'].getCurrentComponent().clear();",params:"-"},
                    {name:"focus",desc:"获取焦点",demo:"this.$refs['组件的ref'].getCurrentComponent().focus();",params:"-"}
                ]
            }
        }
    }
}

export default comps;