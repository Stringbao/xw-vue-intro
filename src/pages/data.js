let searchList = 
    `<!-- 总的容器 le_comps_core_css -->\n` + 
    `<div class="le_comps_core_css">\n`+
    `   <!-- 页面标题 le_page_name -->\n`+
    `   <h4 class="le_page_name">新的样式测试页面</h4>\n`+
    `   <!-- 查询条件容器 le_list_search_pannel -->\n`+
    `   <div class='le_list_search_pannel clearfix'>\n`+
    `       <!-- col1 col2 col3 col4表示宽度25%, 50%, 75%, 100% -->\n`+
    `       <div class="col1">\n`+
    `           <le-input labelWidth="120" label="订单编号:" v-model="searchModel.orderCode"></le-input>\n`+
    `       </div>\n`+
    `    </div>\n`+
    `   <!-- 查询条件按钮组 le_search_btn_group-->\n`+
    `   <div class="le_search_btn_group cleatfix">\n`+
    `       <le-button type="create" value="新建" @click="add"></le-button>\n`+
    `   </div>\n`+
    `   <!-- tableList容器 le_table_container -->\n`+
    `   <div class='le_table_container'>\n`+
    `       <table-list title="黑名单列表" ref='black_list_table' :options='tableOptions'></table-list>\n`+
    `   </div>\n`+
    `</div>`;
let dialog = 
    `<le-dialog title="新建弹层" height="605" width="1000" v-model="showDialog">\n`+
    `   <div slot="body">\n`+
    `       <le-form labelWidth='180' ref="saveForm">\n`+
    `           <!-- le_form_row_item为固定样式,组件后面跟一个按钮 -->\n`+
    `           <div class="le_form_row_item">\n`+
    `               <le-input labelWidth='150' tip="请输入身份证号码" label="身份证号码" v-model="entity.id"></le-input>\n`+
    `               <le-button v-show="hideAllTag" type="create" value="显示提醒" @click="showAlert"></le-button>\n`+
    `           </div>\n`+
    `           <le-input labelWidth='150' tip="输入省市区的详细信息" label="地址" v-model="entity.address"></le-input>\n`+
    `           <!-- 同样form里面也可以使用col1-4来表示宽度 -->\n`+
    `           <div class="col4">\n`+
    `               <le-button type="create" value="测试按钮"></le-button>\n`+
    `               <le-time-picker labelWidth='30' label="至" tip="输入当前之后的时间" v-model="entity.time"></le-time-picker>\n`+
    `           </div>\n`+
    `           <le-radio-list labelWidth='150' label="性别" display-name="name" :data-source="sex" display-value="code" v-model="entity.sex"></le-radio-list>\n`+
    `       </le-form>\n`+
    `   </div>\n`+
    `   <div slot="button">\n`+
    `       <le-button type="cancel" value="取消" @click="close"></le-button>\n`+
    `       <le-button type="save" value="保存" @click="save"></le-button>`+
    `   </div>\n`+
    `</le-dialog>`;

let newPage = 
    `<!-- 新页面必须包含在 le_comps_core_css里面内，如果新页面里面使用了form组件，则form组件的所有父节点中必须设置宽度和高度，否则form组件撑满页面-->\n`+
    `<div class="le_comps_core_css new_page_width">\n`+
    `   <!-- 页面名称 le_page_name -->\n`+
    `   <h4 class="le_page_name">新的样式测试页面</h4>\n`+
    `   <le-form labelWidth='180' ref="saveForm">\n`+
    `   <!-- le_form_row_item为固定样式,组件后面跟一个按钮 -->\n`+
    `       <div class="le_form_row_item">\n`+
    `           <le-input labelWidth='150' tip="请输入身份证号码" label="身份证号码" v-model="entity.id"></le-input>\n`+
    `           <le-button v-show="hideAllTag" type="create" value="显示提醒" @click="showAlert"></le-button>\n`+
    `       </div>\n`+
    `       <le-input labelWidth='150' tip="输入省市区的详细信息" label="地址" v-model="entity.address"></le-input>\n`+
    `       <!-- 同样form里面也可以使用col1-4来表示宽度 -->\n`+
    `       <div class="col4 le_full_width">\n`+
    `           <le-button type="create" value="测试按钮"></le-button>\n`+
    `           <le-time-picker labelWidth='30' label="至" tip="输入当前之后的时间" v-model="entity.time"></le-time-picker>\n`+
    `       </div>\n`+
    `       <le-radio-list labelWidth='150' label="性别" display-name="name" :data-source="sex" display-value="code" v-model="entity.sex"></le-radio-list>\n`+
    `       <div class="le_new_page_btn_group">\n`+
    `           <le-button value="返回" type="back" @click="back"></le-button>\n`+
    `           <le-button value="确定" type="save" @click="save"></le-button>\n`+
    `       </div>\n`+
    `   </le-form>\n`+
    `</div>`;


let comps = {
    html:{
        route:{path:"html",name:"html",route:"/html",cls:""},
        name:"html文件格式描述",
        type:"html",
        desc:"所有的页面，最顶层容器必须包含le_comps_core_css这个Class(非常重要!)",
        baseInfo:'',
        searchList:searchList,
        dialog:dialog,
        newPage:newPage
    },
    input:{
        route:{path:"input",name:"input",route:"/input",cls:""},
        name:"Input 文本框",
        type:"input",
        desc:"<le-input>文本框，使用v-model进行数据的绑定, 如果要开启验证, 必须开启on",
        baseInfo:'<le-input labelWidth="150" placeholder="请输入年龄" label="年龄" v-model="age"><le-input>',
        info:{
            propertys:{
                key:"属性",
                tips:"on是开启验证功能，vType和msg属性只在开启on属性后生效，required为必填，on和required可以一起使用",
                cols:[
                    {name:"name",val:"参数"},{name:"desc",val:"说明"},{name:"type",val:"类型"},
                    {name:"required",val:"可选值"},{name:"default",val:"默认值"}
                ],
                data:[
                    {name:"v-model",desc:"绑定字段",type:"String",required:"必填",default:"-"},
                    {name:"labelWidth",desc:"label宽度",type:"Number",required:"非必填",default:"100"},
                    {name:"placeholder",desc:"placeholder",type:"String",required:"非必填",default:"-"},
                    {name:"label",desc:"label名",type:"String",required:"非必填",default:"-"},
                    {name:"tip",desc:"input输入提示信息",type:"String",required:"非必填",default:"-"},
                    {name:"readonly",desc:"是否只读",type:"Boolean",required:"非必填",default:"false"},
                    {name:"on",desc:"是否开启验证",type:"Boolean",required:"非必填",default:"false"},
                    {name:"required",desc:"是否必填",type:"Boolean",required:"非必填",default:"false"},
                    {name:"vType",desc:"文本框验证类型",type:"String",required:"非必填",default:"-"},
                    {name:"msg",desc:"错误提示信息",type:"String",required:"非必填",default:"-"},
                ]
            },
            check:{
                key:"验证类型",
                tips:"input的验证类型,vType='email'",
                cols:[
                    {name:"name",val:"类型"},{name:"desc",val:"说明"}
                ],
                data:[
                    {name:"decimals",desc:"数字(正负,小数整数都可以)"},
                    {name:"number",desc:"正,负整数"},
                    {name:"positive",desc:"正整数"},
                    {name:"positiveDecimals",desc:"正小数"},
                    {name:"positiveNumber",desc:"正数"},
                    {name:"negativeNumber",desc:"负数"},
                    {name:"negativeDecimals",desc:"负小数"},
                    {name:"negative",desc:"负整数"},
                    {name:"email",desc:"邮箱"},
                    {name:"url",desc:"url(https或者http)"},
                    {name:"https",desc:"https的url"},
                    {name:"http",desc:"http的url"},
                    {name:"id",desc:"身份证"},
                    {name:"phone",desc:"手机号(不包含固话)"},
                    {name:"tel",desc:"电话号(含固话 手机)"},
                    {name:"password",desc:"密码, 字母开头 长度6-18，只能包含字符 数字 和 下划线"},
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
                tips:"必须要通过getCurrentComponent()来获取当前的组件对象, 不允许直接调用方法",
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
        route:{path:"textarea",name:"textarea",route:"/textarea",cls:""},
        name:"Textarea",
        type:"textarea",
        desc:"<le-textarea>文本框，使用v-model进行数据的绑定",
        baseInfo:'<le-textarea placeholder="请输入详细地址" label="详细地址" v-model="content"></le-textarea>',
        info:{
            propertys:{
                key:"属性",
                tips:"除了input需要required, 其他组件都不需要required属性，开启on表示必填",
                cols:[
                    {name:"name",val:"参数"},{name:"desc",val:"说明"},{name:"type",val:"类型"},
                    {name:"required",val:"可选值"},{name:"default",val:"默认值"}
                ],
                data:[
                    {name:"v-model",desc:"绑定字段",type:"String",required:"必填",default:"-"},
                    {name:"labelWidth",desc:"label宽度",type:"Number",required:"非必填",default:"100"},
                    {name:"placeholder",desc:"placeholder",type:"String",required:"非必填",default:"-"},
                    {name:"label",desc:"label名",type:"String",required:"非必填",default:"-"},
                    {name:"tip",desc:"输入提示信息",type:"String",required:"非必填",default:"-"},
                    {name:"width",desc:"宽度,支持百分比和纯数字",type:"String",required:"非必填",default:"100%"},
                    {name:"height",desc:"高度,支持百分比和纯数字",type:"String",required:"非必填",default:"100px"},
                    {name:"readonly",desc:"是否只读",type:"Boolean",required:"非必填",default:"false"},
                    {name:"on",desc:"是否开启验证",type:"Boolean",required:"非必填",default:"false"},
                    {name:"msg",desc:"错误提示信息",type:"String",required:"非必填",default:"-"},
                ]
            },
            events:{
                key:"事件",
                tips:"",
                cols:[
                    {name:"name",val:"事件名称"},{name:"desc",val:"事件描述"},{name:"params",val:"参数"},
                ],
                data:[
                    {name:"blur",desc:"blur事件",params:"value:当前input的值"},
                    {name:"change",desc:"change事件",params:"value:当前input的值"},
                ]
            },
            methods:{
                key:"方法",
                tips:"必须要通过getCurrentComponent()来获取当前的组件对象, 不允许直接调用方法",
                cols:[
                    {name:"name",val:"方法名称"},{name:"desc",val:"方法描述"},{name:"demo",val:"示例"},{name:"params",val:"参数"}
                ],
                data:[
                    {name:"clear",desc:"清空文本框的值(v-model)",demo:"this.$refs['组件的ref'].getCurrentComponent().clear();",params:"-"},
                ]
            }
        }
    },
    alert:{
        route:{path:"alert",name:"alert",route:"/alert",cls:""},
        name:"Alert",
        type:"alert",
        desc:"全局注册Vue的方法,包含this.alert.showAlert/showConfirm/showNotify",
        baseInfo:'this.alert.showAlert, this.alert.showConfirm, this.alert.showNotify',
        info:{
            propertys:{
                key:"属性",
                tips:"showAlert, showNotify需要接受2个参数,第一个参数为提示类型(success,info,error), 第二个参数为提示消息，showConfirm的第一个参数为提示title，第二个参数为点击确定的callback回调",
                cols:[
                    {name:"name",val:"参数"},{name:"desc",val:"说明"},{name:"type",val:"类型"},
                    {name:"required",val:"可选值"},{name:"default",val:"默认值"}
                ],
                data:[
                    {name:"type",desc:"消息类型(success,info,error)(showAlert,showNotify使用)",type:"String",required:"必填",default:"-"},
                    {name:"msg",desc:"消息内容(showAlert,showNotify使用)",type:"String",required:"必填",default:"-"},
                    {name:"title",desc:"confirm的提示标题(只针对showConfirm使用)",type:"String",required:"必填",default:"-"},
                    {name:"cb",desc:"只针对showConfirm,点击确定的回调(只针对showConfirm使用)",type:"Functon",required:"必填",default:"-"}
                ]
            },
            events:{
                key:"事件",
                tips:"",
                cols:[
                    {name:"name",val:"事件名称"},{name:"desc",val:"事件描述"},{name:"params",val:"参数"},
                ],
                data:[
                    
                ]
            },
            methods:{
                key:"方法",
                tips:"showAlert, showNotify需要接受2个参数,第一个参数为提示类型(success,info,error), 第二个参数为提示消息，showConfirm的第一个参数为提示title，第二个参数为点击确定的callback回调",
                cols:[
                    {name:"name",val:"方法名称"},{name:"desc",val:"方法描述"},{name:"demo",val:"示例"},{name:"params",val:"参数"}
                ],
                data:[
                    {name:"showAlert",desc:"常规提示信息",demo:"this.alert.showAlert('success','成功');",params:"-"},
                    {name:"showConfirm",desc:"confirm提示，必须带回调",demo:"this.alert.showConfirm('提示信息',()=>{todo});",params:"-"},
                    {name:"showNotify需要接受2个参数",desc:"亮眼的提示信息",demo:"this.alert.showNotify需要接受2个参数('success','成功');",params:"-"},
                ]
            }
        }
    },
    button:{
        route:{path:"button",name:"button",route:"/button",cls:""},
        name:"Button",
        type:"Button",
        desc:"<le-button>按钮，使用@click进行事件的绑定",
        baseInfo:'<le-button value="确定" type="save" @click="save"></le-button>',
        info:{
            propertys:{
                key:"属性",
                tips:"",
                cols:[
                    {name:"name",val:"参数"},{name:"desc",val:"说明"},{name:"type",val:"类型"},
                    {name:"required",val:"可选值"},{name:"default",val:"默认值"}
                ],
                data:[
                    {name:"type",desc:"button的类型(icon)",type:"String",required:"非必填",default:"default"},
                    {name:"value",desc:"button显示的名字",type:"String",required:"非必填",default:"-"},
                    {name:"disabled",desc:"是否禁用button",type:"Boolean",required:"非必填",default:"false"}
                ]
            },
            events:{
                key:"按钮类型枚举",
                tips:"",
                cols:[
                    {name:"name",val:"按钮类型"},{name:"desc",val:"事件描述"}
                ],
                data:[
                    {name:"search",desc:"搜索"},
                    {name:"create",desc:"新增"},
                    {name:"download",desc:"下载"},
                    {name:"update",desc:"更新"},
                    {name:"remove",desc:"删除"},
                    {name:"approve",desc:"审核"},
                    {name:"reject",desc:"拒绝"},
                    {name:"start",desc:"启用"},
                    {name:"stop",desc:"停用"},
                    {name:"info",desc:"详情"},
                    {name:"reset",desc:"重置"},
                    {name:"up",desc:"上架"},
                    {name:"down",desc:"下架"},
                    {name:"publish",desc:"发布"},
                    {name:"cancelPublish",desc:"取消发布"},
                    {name:"import",desc:"导入"},
                    {name:"export",desc:"导出"},
                    {name:"review",desc:"批量操作"},
                    {name:"copy",desc:"复制"},
                    {name:"setting",desc:"设置"},
                    {name:"decorate",desc:"装修"},
                    {name:"prevPage",desc:"上一页"},
                    {name:"nextPage",desc:"下一页"},
                    {name:"confirm",desc:"确定"},
                    {name:"save",desc:"保存"},
                    {name:"back",desc:"返回"},
                    {name:"cancel",desc:"取消"},
                    {name:"choose",desc:"请选择XXXX"},
                    {name:"holdSave",desc:"暂存"},
                    {name:"prev",desc:"上一步"},
                    {name:"next",desc:"下一步"},
                    {name:"default",desc:"默认"},
                    {name:"warning",desc:"警告"},
                ]
            },
            methods:{
                key:"事件",
                tips:"",
                cols:[
                    {name:"name",val:"事件名称"},{name:"desc",val:"事件描述"},{name:"params",val:"参数"}
                ],
                data:[
                    {name:"click",desc:"click事件",params:"-"}
                ]
            }
        }
    },
    checkbox:{
        route:{path:"checkbox",name:"checkbox",route:"/checkbox",cls:""},
        name:"Checkbox 复选框",
        type:"checkbox",
        desc:"<le-checkbox>复选框, 使用v-model进行数据的绑定, data-source进行数据源的绑定",
        baseInfo:'<le-checkbox-list on label="爱好" :data-source="fav" display-name="name" display-value="code" v-model="fav"></le-checkbox-list>',
        info:{
            propertys:{
                key:"属性",
                tips:"on开启验证功能(无需required), display-name显示字段, display-value传值字段",
                cols:[
                    {name:"name",val:"参数"},{name:"desc",val:"说明"},{name:"type",val:"类型"},
                    {name:"required",val:"可选值"},{name:"default",val:"默认值"}
                ],
                data:[
                    {name:"v-model",desc:"绑定字段",type:"String",required:"必填",default:"-"},
                    {name:"displayName",desc:"显示字段",type:"String",required:"必填",default:"-"},
                    {name:"displayValue",desc:"传值字段",type:"String",required:"必填",default:"-"},
                    {name:"dataSource",desc:"数据源",type:"Array",required:"必填",default:"[]"},
                    {name:"labelWidth",desc:"label宽度",type:"Number",required:"非必填",default:"100"},
                    {name:"label",desc:"label名",type:"String",required:"非必填",default:"-"},
                    {name:"tip",desc:"input输入提示信息",type:"String",required:"非必填",default:"-"},
                    {name:"readonly",desc:"是否只读",type:"Boolean",required:"非必填",default:"false"},
                    {name:"on",desc:"是否开启验证",type:"Boolean",required:"非必填",default:"false"},
                ]
            },
            events:{
                key:"事件",
                tips:"",
                cols:[
                    {name:"name",val:"事件名称"},{name:"desc",val:"事件描述"},{name:"params",val:"参数"},
                ],
                data:[
                    {name:"change",desc:"change事件",params:"当前input的值, 逗号分隔字符串"},
                ]
            },
            methods:{
                key:"方法",
                tips:"",
                cols:[
                    {name:"name",val:"方法名称"},{name:"desc",val:"方法描述"},{name:"demo",val:"示例"},{name:"params",val:"参数"}
                ],
                data:[

                ]
            }
        }
    },
    radio:{
        route:{path:"radio",name:"radio",route:"/radio",cls:""},
        name:"Radio 复选框",
        type:"radio",
        desc:"<le-radio-list>单选框, 使用v-model进行数据的绑定, data-source进行数据源的绑定",
        baseInfo:'<le-radio-list on label="爱好" :data-source="fav" display-name="name" display-value="code" v-model="fav"></le-radio-list>',
        info:{
            propertys:{
                key:"属性",
                tips:"on开启验证功能(无需required), display-name显示字段, display-value传值字段",
                cols:[
                    {name:"name",val:"参数"},{name:"desc",val:"说明"},{name:"type",val:"类型"},
                    {name:"required",val:"可选值"},{name:"default",val:"默认值"}
                ],
                data:[
                    {name:"v-model",desc:"绑定字段",type:"String",required:"必填",default:"-"},
                    {name:"displayName",desc:"显示字段",type:"String",required:"必填",default:"-"},
                    {name:"displayValue",desc:"传值字段",type:"String",required:"必填",default:"-"},
                    {name:"dataSource",desc:"数据源",type:"Array",required:"必填",default:"[]"},
                    {name:"labelWidth",desc:"label宽度",type:"Number",required:"非必填",default:"100"},
                    {name:"label",desc:"label名",type:"String",required:"非必填",default:"-"},
                    {name:"tip",desc:"input输入提示信息",type:"String",required:"非必填",default:"-"},
                    {name:"readonly",desc:"是否只读",type:"Boolean",required:"非必填",default:"false"},
                    {name:"on",desc:"是否开启验证",type:"Boolean",required:"非必填",default:"false"},
                ]
            },
            events:{
                key:"事件",
                tips:"",
                cols:[
                    {name:"name",val:"事件名称"},{name:"desc",val:"事件描述"},{name:"params",val:"参数"},
                ],
                data:[
                    {name:"change",desc:"change事件",params:"当前input的值, 逗号分隔字符串"},
                ]
            },
            methods:{
                key:"方法",
                tips:"",
                cols:[
                    {name:"name",val:"方法名称"},{name:"desc",val:"方法描述"},{name:"demo",val:"示例"},{name:"params",val:"参数"}
                ],
                data:[

                ]
            }
        }
    },
    datePicker:{
        route:{path:"datePicker",name:"datePicker",route:"/datePicker",cls:""},
        name:"DatePicker 日期选择器",
        type:"datePicker",
        desc:"<le-date-picker>日期组件，使用v-model进行数据的绑定",
        baseInfo:'<le-date-picker label="日期组件" v-model="entity.date"></le-date-picker>',
        info:{
            propertys:{
                key:"属性",
                tips:"使用v-model进行值绑定",
                cols:[
                    {name:"name",val:"参数"},{name:"desc",val:"说明"},{name:"type",val:"类型"},
                    {name:"required",val:"可选值"},{name:"default",val:"默认值"}
                ],
                data:[
                    {name:"v-model",desc:"绑定字段",type:"String",required:"必填",default:"-"},
                    {name:"labelWidth",desc:"label宽度",type:"Number",required:"非必填",default:"100"},
                    {name:"placeholder",desc:"placeholder",type:"String",required:"非必填",default:"-"},
                    {name:"label",desc:"label名",type:"String",required:"非必填",default:"-"},
                    {name:"tip",desc:"输入提示信息",type:"String",required:"非必填",default:"-"},
                    {name:"readonly",desc:"是否只读",type:"Boolean",required:"非必填",default:"false"},
                    {name:"on",desc:"是否开启验证",type:"Boolean",required:"非必填",default:"false"},
                    {name:"msg",desc:"错误提示信息",type:"String",required:"非必填",default:"-"},
                ]
            },
            events:{
                key:"事件",
                tips:"",
                cols:[
                    {name:"name",val:"事件名称"},{name:"desc",val:"事件描述"},{name:"params",val:"参数"},
                ],
                data:[
                    {name:"change",desc:"日期发生变化触发的change事件",params:"value:当前值"},
                    {name:"prevYearChange",desc:"上一年change事件",params:"year:所选年份,month:当前月份,str:当前选中日期"},
                    {name:"nextYearChange",desc:"下一年change事件",params:"year:所选年份,month:当前月份,str:当前选中日期"},
                    {name:"prevMonthChange",desc:"上一月change事件",params:"year:当前月份,month:所选月份,str:当前选中日期"},
                    {name:"nextMonthChange",desc:"下一月change事件",params:"year:当前月份,month:所选月份,str:当前选中日期"}
                ]
            },
            methods:{
                key:"方法",
                tips:"",
                cols:[
                    {name:"name",val:"方法名称"},{name:"desc",val:"方法描述"},{name:"demo",val:"示例"},{name:"params",val:"参数"}
                ],
                data:[

                ]
            }
        }
    },
    timePicker:{
        route:{path:"timePicker",name:"timePicker",route:"/timePicker",cls:""},
        name:"TimePicker 时间选择器",
        type:"timePicker",
        desc:"<le-time-picker>时间组件，使用v-model进行数据的绑定",
        baseInfo:'<le-time-picker label="选择时间" v-model="entity.time"></le-time-picker>',
        info:{
            propertys:{
                key:"属性",
                tips:"使用v-model进行值绑定",
                cols:[
                    {name:"name",val:"参数"},{name:"desc",val:"说明"},{name:"type",val:"类型"},
                    {name:"required",val:"可选值"},{name:"default",val:"默认值"}
                ],
                data:[
                    {name:"v-model",desc:"绑定字段",type:"String",required:"必填",default:"-"},
                    {name:"labelWidth",desc:"label宽度",type:"Number",required:"非必填",default:"100"},
                    {name:"placeholder",desc:"placeholder",type:"String",required:"非必填",default:"-"},
                    {name:"label",desc:"label名",type:"String",required:"非必填",default:"-"},
                    {name:"tip",desc:"输入提示信息",type:"String",required:"非必填",default:"-"},
                    {name:"readonly",desc:"是否只读",type:"Boolean",required:"非必填",default:"false"},
                    {name:"on",desc:"是否开启验证",type:"Boolean",required:"非必填",default:"false"},
                    {name:"msg",desc:"错误提示信息",type:"String",required:"非必填",default:"-"},
                ]
            },
            events:{
                key:"事件",
                tips:"",
                cols:[
                    {name:"name",val:"事件名称"},{name:"desc",val:"事件描述"},{name:"params",val:"参数"},
                ],
                data:[
                    {name:"change",desc:"时间发生变化触发的change事件",params:"value:当前值"}
                ]
            },
            methods:{
                key:"方法",
                tips:"",
                cols:[
                    {name:"name",val:"方法名称"},{name:"desc",val:"方法描述"},{name:"demo",val:"示例"},{name:"params",val:"参数"}
                ],
                data:[

                ]
            }
        }
    },
    dateTimePicker:{
        route:{path:"dateTimePicker",name:"dateTimePicker",route:"/dateTimePicker",cls:""},
        name:"DateTimePicker 日期时间选择器",
        type:"dateTimePicker",
        desc:"<le-date-time-picker>日期时间组件，使用v-model进行数据的绑定",
        baseInfo:'<le-date-time-picker label="时间日期组件" v-model="entity.datetime"></le-date-time-picker>',
        info:{
            propertys:{
                key:"属性",
                tips:"使用v-model进行值绑定",
                cols:[
                    {name:"name",val:"参数"},{name:"desc",val:"说明"},{name:"type",val:"类型"},
                    {name:"required",val:"可选值"},{name:"default",val:"默认值"}
                ],
                data:[
                    {name:"v-model",desc:"绑定字段",type:"String",required:"必填",default:"-"},
                    {name:"labelWidth",desc:"label宽度",type:"Number",required:"非必填",default:"100"},
                    {name:"placeholder",desc:"placeholder",type:"String",required:"非必填",default:"-"},
                    {name:"label",desc:"label名",type:"String",required:"非必填",default:"-"},
                    {name:"tip",desc:"输入提示信息",type:"String",required:"非必填",default:"-"},
                    {name:"readonly",desc:"是否只读",type:"Boolean",required:"非必填",default:"false"},
                    {name:"on",desc:"是否开启验证",type:"Boolean",required:"非必填",default:"false"},
                    {name:"msg",desc:"错误提示信息",type:"String",required:"非必填",default:"-"},
                ]
            },
            events:{
                key:"事件",
                tips:"",
                cols:[
                    {name:"name",val:"事件名称"},{name:"desc",val:"事件描述"},{name:"params",val:"参数"},
                ],
                data:[
                    {name:"change",desc:"日期时间发生变化触发的change事件",params:"value:当前值"}
                ]
            },
            methods:{
                key:"方法",
                tips:"",
                cols:[
                    {name:"name",val:"方法名称"},{name:"desc",val:"方法描述"},{name:"demo",val:"示例"},{name:"params",val:"参数"}
                ],
                data:[

                ]
            }
        }
    },
    dialog:{
        route:{path:"dialog",name:"dialog",route:"/dialog",cls:""},
        name:"dialog弹出层",
        type:"dialog",
        desc:"<le-dialog>弹出层，使用v-model进行隐藏和显示",
        baseInfo:'<le-dialog title="新建弹层" height="605" width="1000" v-model="showDialog">',
        info:{
            propertys:{
                key:"属性",
                tips:"使用v-model进行值绑定，width & height必须为数字",
                cols:[
                    {name:"name",val:"参数"},{name:"desc",val:"说明"},{name:"type",val:"类型"},
                    {name:"required",val:"可选值"},{name:"default",val:"默认值"}
                ],
                data:[
                    {name:"v-model",desc:"绑定字段",type:"String",required:"必填",default:"-"},
                    {name:"width",desc:"宽度",type:"Number",required:"非必填",default:"700"},
                    {name:"height",desc:"高度",type:"Number",required:"非必填",default:"300"},
                    {name:"title",desc:"label名",type:"String",required:"非必填",default:"-"},
                ]
            },
            events:{
                key:"事件",
                tips:"closeCallback回调函数必须配置",
                cols:[
                    {name:"name",val:"事件名称"},{name:"desc",val:"事件描述"},{name:"params",val:"参数"},
                ],
                data:[
                    {name:"closeCallback",desc:"关闭的回调函数,",params:"-"}
                ]
            },
            methods:{
                key:"方法",
                tips:"",
                cols:[
                    {name:"name",val:"方法名称"},{name:"desc",val:"方法描述"},{name:"demo",val:"示例"},{name:"params",val:"参数"}
                ],
                data:[

                ]
            }
        }
    },
    editor:{
        route:{path:"editor",name:"editor",route:"/editor",cls:""},
        name:"editor富文本编辑器",
        type:"editor",
        desc:"<le-editor>使用必须要通过getCurrentComponent来获取组件对象,使用getValue和setValue来获取和设置当前富文本编辑框的值",
        baseInfo:'<le-editor label="pc端:" :option="editorOption" ref="pcEditor"></le-editor>',
        info:{
            propertys:{
                key:"属性",
                tips:"配置ref, 必须要通过getCurrentComponent()来获取组件对象,editorOption里面的url为上传文件url，fname为上传问题服务器接收的key，analysis表示解析服务端返回结果的函数，是一个服务端返回的图片绝对路径",
                cols:[
                    {name:"name",val:"参数"},{name:"desc",val:"说明"},{name:"type",val:"类型"},
                    {name:"required",val:"可选值"},{name:"default",val:"默认值"}
                ],
                data:[
                    {name:"option",desc:"配置图片上传,editorOption:{url:'/file/img/upload',fname:'file',analysis:(d)=>{return d.data.data;}",type:"JSON",required:"必填",default:"-"},
                    {name:"ref",desc:"组件key,不允许重复",type:"String",required:"必填",default:"-"},
                    {name:"labelWidth",desc:"label宽度",type:"Number",required:"非必填",default:"100"},
                    {name:"label",desc:"label名",type:"String",required:"非必填",default:"-"},
                    {name:"width",desc:"宽度,支持百分比和纯数字",type:"String",required:"非必填",default:"100%"},
                    {name:"height",desc:"高度,支持百分比和纯数字",type:"String",required:"非必填",default:"100px"},
                    {name:"tip",desc:"输入提示信息",type:"String",required:"非必填",default:"-"},
                    {name:"on",desc:"是否开启验证",type:"Boolean",required:"非必填",default:"false"},
                    {name:"msg",desc:"错误提示信息",type:"String",required:"非必填",default:"-"}
                ]
            },
            events:{
                key:"事件",
                tips:"change, blur事件的参数为html源码, 是否允许text，有待测试",
                cols:[
                    {name:"name",val:"事件名称"},{name:"desc",val:"事件描述"},{name:"params",val:"参数"},
                ],
                data:[
                    {name:"change",desc:"change事件",params:"value:html源码"},
                    {name:"blur",desc:"blur事件",params:"value:html源码"}
                ]
            },
            methods:{
                key:"方法",
                tips:"必须通过getCurrentComponent访问当前组件对象",
                cols:[
                    {name:"name",val:"方法名称"},{name:"desc",val:"方法描述"},{name:"demo",val:"示例"},{name:"params",val:"参数"}
                ],
                data:[
                    {name:"setValue",desc:"设置值",demo:"this.$refs['组件的ref'].getCurrentComponent().setValue;",params:"value:要传递的值"},
                    {name:"getValue",desc:"获取html代码",demo:"this.$refs['组件的ref'].getCurrentComponent().getValue;",params:"-"},
                    {name:"getText",desc:"获取文本值",demo:"this.$refs['组件的ref'].getCurrentComponent().getText;",params:"-"},
                ]
            }
        }
    },
    form:{
        route:{path:"form",name:"form",route:"/form",cls:""},
        name:"Form表单提交",
        type:"form",
        desc:"<le-form>提供表单验证功能的form组件",
        baseInfo:'<le-form labelWidth="180" ref="saveForm">',
        info:{
            propertys:{
                key:"属性",
                tips:"form表单的宽高是跟着父元素的宽高, 也就是说容纳这个form表单的容器，必须有宽度，一般高度为100%",
                cols:[
                    {name:"name",val:"参数"},{name:"desc",val:"说明"},{name:"type",val:"类型"},
                    {name:"required",val:"可选值"},{name:"default",val:"默认值"}
                ],
                data:[
                    {name:"ref",desc:"组件key,如果需要表单验证功能则必须加上ref属性",type:"String",required:"非必填",default:"-"},
                    {name:"labelWidth",desc:"form组件下面所有组件的label宽度",type:"Number",required:"非必填",default:"-"},
                ]
            },
            events:{
                key:"事件",
                tips:"",
                cols:[
                    {name:"name",val:"事件名称"},{name:"desc",val:"事件描述"},{name:"params",val:"参数"},
                ],
                data:[
                   
                ]
            },
            methods:{
                key:"方法",
                tips:"reset方法是先执行组件内部重弄写的reset方法，如果没有就会去执行HOC内部透传下来的reset方法,validate方法返回一个Promise对象",
                cols:[
                    {name:"name",val:"方法名称"},{name:"desc",val:"方法描述"},{name:"demo",val:"示例"},{name:"params",val:"参数"}
                ],
                data:[
                    {name:"validate",desc:"表达验证方法",demo:"this.$refs['组件的ref'].validate();",params:"-"},
                    {name:"reset",desc:"设置form表单所有子组件的出厂状态,包含:v-model, 验证错误信息, 验证错误css以及部分组件数据源",demo:"this.$refs['组件的ref'].reset();",params:"-"}
                ]
            }
        }
    },
    select:{
        route:{path:"select",name:"select",route:"/select",cls:""},
        name:"Select 下拉框",
        type:"select",
        desc:"<le-local-select>带搜索(本地filter)，带所选的下拉框",
        baseInfo:'<le-local-select label="选择职业" :data-source="shops" display-name="val" display-value="key" v-model="job"></le-local-select>',
        info:{
            propertys:{
                key:"属性",
                tips:"on开启验证功能,只验证当前v-model是否为空(无需required), display-name显示字段, display-value传值字段",
                cols:[
                    {name:"name",val:"参数"},{name:"desc",val:"说明"},{name:"type",val:"类型"},
                    {name:"required",val:"可选值"},{name:"default",val:"默认值"}
                ],
                data:[
                    {name:"v-model",desc:"select绑定字段",type:"String",required:"必填",default:"-"},
                    {name:"enabledInput",desc:"是否允许模糊查询",type:"Boolean",required:"非必填",default:"false"},
                    {name:"multiple",desc:"是否允许多选",type:"Boolean",required:"非必填",default:"false"},
                    {name:"displayName",desc:"显示字段",type:"String",required:"必填",default:"-"},
                    {name:"displayValue",desc:"传值字段",type:"String",required:"必填",default:"-"},
                    {name:"dataSource",desc:"数据源",type:"Array",required:"必填",default:"[]"},
                    {name:"placeholder",desc:"placeholder",type:"String",required:"非必填",default:"-"},
                    {name:"labelWidth",desc:"label宽度",type:"Number",required:"非必填",default:"100"},
                    {name:"label",desc:"label名",type:"String",required:"非必填",default:"-"},
                    {name:"tip",desc:"input输入提示信息",type:"String",required:"非必填",default:"-"},
                    {name:"readonly",desc:"是否只读",type:"Boolean",required:"非必填",default:"false"},
                    {name:"on",desc:"是否开启验证",type:"Boolean",required:"非必填",default:"false"},
                ]
            },
            events:{
                key:"事件",
                tips:"",
                cols:[
                    {name:"name",val:"事件名称"},{name:"desc",val:"事件描述"},{name:"params",val:"参数"},
                ],
                data:[
                    {name:"change",desc:"change事件",params:"当前选中的值,如果是多个，那么是以逗号分隔的字符串"},
                ]
            },
            methods:{
                key:"方法",
                tips:"",
                cols:[
                    {name:"name",val:"方法名称"},{name:"desc",val:"方法描述"},{name:"demo",val:"示例"},{name:"params",val:"参数"}
                ],
                data:[

                ]
            }
        }
    },
    table:{
        route:{path:"table",name:"table",route:"/table",cls:""},
        name:"带分页的TableList",
        type:"table",
        desc:"<table-list>分页Table组件,具有loading以及防止在数据渲染完毕之前，发送多次请求的功能，没有数据的时候展示[暂无数据]",
        baseInfo:'<table-list title="项目管理列表" ref="black_list_table" :options="tableOptions"></table-list>',
        info:{
            propertys:{
                key:"属性",
                tips:"getUrl函数可以控制table是否发送请求，如果getUrl返回为空字符串，那么table组件将不会发送请求",
                cols:[
                    {name:"name",val:"参数"},{name:"desc",val:"说明"},{name:"type",val:"类型"},
                    {name:"required",val:"可选值"},{name:"default",val:"默认值"}
                ],
                data:[
                    {name:"title",desc:"table名字",type:"String",required:"非必填",default:"未设置Table名称"},
                    {name:"ref",desc:"table组件key",type:"String",required:"必填",default:"-"},
                    {name:"---options---",desc:"以下row全部为options的属性",type:"JSON",required:"必填",default:"-"},
                    {name:"showCk",desc:"是否显示checkbox",type:"Boolean",required:"非必填",default:"false"},
                    {name:"singleSelected",desc:"是否显示radio, 要使用这个属性性必须配置showCk",type:"Boolean",required:"非必填",default:"false"},
                    {name:"map",desc:"返回数据源的列的映射",type:"Array",required:"必填",default:"-"},
                    {name:"getUrl",desc:"返回请求服务器的url",type:"function",required:"必填",default:"-"},
                    {name:"pageOption",desc:"分页属性参数",type:"JSON",required:"必填",default:"-"},
                    {name:"actions",desc:"每行row的左侧操作按钮",type:"Array",required:"非必填",default:"-"},
                    {name:"analysis",desc:"解析服务端返回的数据,返回特定的格式",type:"function",required:"非必填",default:"-"},
                ]
            },
            getUrl:{
                key:"table里面的getUrl函数详解",
                tips:"getUrl为一个函数，return一个字符串, 当return为空的时候, table将不请求服务器",
            },
            analysis:{
                key:"table里面的analysis函数详解",
                tips:"数据解析参数, 该方法有一个参数data,为服务端返回的原始数据, 需要将这个data解析成一个json对象{data:[],count:0}这样的数据格式, data必须为数组",
            },
            pageOption:{
                key:"table里面的pageOption详解",
                tips:"分页配置参数",
                cols:[
                    {name:"name",val:"名字"},{name:"desc",val:"描述"},{name:"type",val:"默认值"}
                ],
                data:[
                    {name:"sizeKey",desc:"服务端分页需要的大小字段",type:"-"},
                    {name:"indexKey",desc:"服务端分页需要的索引字段",type:"-"},
                    {name:"index",desc:"开始索引值",type:"1"},
                    {name:"size",desc:"分页大小值",type:"10"},
                ]
            },
            actions:{
                key:"table里面的action详解",
                tips:"convert方法有2个参数, row在第二个参数里面, show方法必须return true or false",
                cols:[
                    {name:"name",val:"名字"},{name:"desc",val:"描述"},{name:"type",val:"类型"},{name:"params",val:"参数"}
                ],
                data:[
                    {name:"key",desc:"按钮的样式类型，与le-button的type对应",type:"String",params:"-"},
                    {name:"val",desc:"按钮的显示名称",params:"-",type:"String"},
                    {name:"action",desc:"按钮触发的事件",params:"row(当前行对象)",type:"function"},
                    {name:"convert",desc:"转换函数，支持return html代码",params:"key(当前col对象),row(当前行对象)",type:"function"},
                    {name:"show",desc:"是否显示当前按钮函数",params:"row(当前行对象),比如return true or false",type:"function"}
                ]
            },
            events:{
                key:"事件",
                tips:"",
                cols:[
                    {name:"name",val:"事件名称"},{name:"desc",val:"事件描述"},{name:"params",val:"参数"},
                ],
                data:[
                ]
            },
            methods:{
                key:"方法",
                tips:"",
                cols:[
                    {name:"name",val:"方法名称"},{name:"desc",val:"方法描述"},{name:"demo",val:"示例"},{name:"params",val:"参数"}
                ],
                data:[
                    {name:"search",desc:"索引初始化的table查询",demo:"this.$refs['组件的ref'].search();",params:"-"},
                    {name:"searchCurrentIndex",desc:"当前索引的查询",demo:"this.$refs['组件的ref'].searchCurrentIndex();",params:"-"},
                ]
            }
        }
    },
    upload:{
        route:{path:"upload",name:"upload",route:"/upload",cls:""},
        name:"Upload上传组件",
        type:"upload",
        desc:"<le-upload>上传组件，支持单文件/多文件上传，支持大小，文件格式校验,如果是图片还支持规格(宽*高)验证，",
        baseInfo:'<le-upload :options="imgUploadOpt" v-model="entity.pcCoverImg"></le-upload>',
        info:{
            propertys:{
                key:"属性",
                tips:"upload组件允许设置单个或者多个文件/图片上传,可以控制规格(只针对图片),文件大小，文件类型，noResult这个参数为上传成功后是否回写数据",
                cols:[
                    {name:"name",val:"参数"},{name:"desc",val:"说明"},{name:"type",val:"类型"},
                    {name:"required",val:"可选值"},{name:"default",val:"默认值"}
                ],
                data:[
                    {name:"v-model",desc:"绑定字段",type:"String",required:"必填",default:"-"},
                    {name:"labelWidth",desc:"label宽度",type:"Number",required:"非必填",default:"100"},
                    {name:"label",desc:"label名",type:"String",required:"非必填",default:"-"},
                    {name:"readonly",desc:"是否只读",type:"Boolean",required:"非必填",default:"false"},
                    {name:"on",desc:"是否开启验证",type:"Boolean",required:"非必填",default:"false"},
                    {name:"msg",desc:"错误提示信息",type:"String",required:"非必填",default:"-"},
                    {name:"---options---",desc:"options所有配置如下:",type:"JSON",required:"必填",default:"-"},
                    {name:"multiple",desc:"是否允许多文件上传",type:"Boolean",required:"非必填",default:"false"},
                    {name:"url",desc:"请求url",type:"String",required:"必填",default:"-"},
                    {name:"noResult",desc:"隐藏上传返回数据, 直接显示上传成功",type:"String",required:"非必填",default:"false"},
                    {name:"vtype",desc:"上传文件类型,逗号分割",type:"String",required:"非必填",default:"-"},
                    {name:"fname",desc:"服务器上传标识key",type:"String",required:"必填",default:"-"},
                    {name:"analysis",desc:"返回路径解析函数, 必须return路径",type:"Function",required:"必填",default:"-"},
                    {name:"tip",desc:"tip提示信息",type:"String",required:"非必填",default:"-"},
                    {name:"width",desc:"上传图片验证规格Width验证,vType必须标识为gif,jpg,png,icon等图片后缀名称",type:"String",required:"非必填",default:"-"},
                    {name:"height",desc:"上传图片验证规格height验证,vType必须标识为gif,jpg,png,icon等图片后缀名称",type:"String",required:"非必填",default:"-"},
                ]
            },
            events:{
                key:"事件",
                tips:"",
                cols:[
                    {name:"name",val:"事件名称"},{name:"desc",val:"事件描述"},{name:"params",val:"参数"},
                ],
                data:[
                    
                ]
            },
            methods:{
                key:"方法",
                tips:"",
                cols:[
                    {name:"name",val:"方法名称"},{name:"desc",val:"方法描述"},{name:"demo",val:"示例"},{name:"params",val:"参数"}
                ],
                data:[
                ]
            }
        }
    },
    asynTree:{
        route:{path:"asynTree",name:"asynTree",route:"/asynTree",cls:""},
        name:"AsynTree 异步加载树",
        type:"asynTree",
        desc:"<le-asyn-tree>，异步加载tree",
        baseInfo:'<le-asyn-tree displayName="name" :asynOptions="asynOptions" ref="tree" :itemClick="itemClick" checkbox></le-asyn-tree>',
        info:{
            propertys:{
                key:"属性",
                tips:"asynOptions.analysis必须返回数组",
                cols:[
                    {name:"name",val:"参数"},{name:"desc",val:"说明"},{name:"type",val:"类型"},
                    {name:"required",val:"可选值"},{name:"default",val:"默认值"}
                ],
                data:[
                    {name:"displayName",desc:"数据源显示字段",type:"String",required:"必填",default:"-"},
                    {name:"ref",desc:"组件的唯一key，不允许重复",type:"String",required:"必填",default:"-"},
                    {name:"checkbox",desc:"是否显示checkbox",type:"Boolean",required:"非必填",default:"false"},
                    {name:"---asynOptions---",desc:"ajax请求url配置(getUrl)和analysis函数",type:"JSON",required:"必填",default:"-"},
                    {name:"getUrl",desc:"返回一个url",type:"Function",required:"必填",default:"-"},
                    {name:"analysis",desc:"解析从服务端返回回来的数据，必须返回数组",type:"Function",required:"必填",default:"-"},
                ]
            },
            events:{
                key:"事件",
                tips:"",
                cols:[
                    {name:"name",val:"事件名称"},{name:"desc",val:"事件描述"},{name:"params",val:"参数"},
                ],
                data:[
                    {name:"itemClick",desc:"TreeNode选中事件",params:"item:当前选中的item对象"}
                ]
            },
            methods:{
                key:"方法",
                tips:"初始化必须在组件外部调用ajax方法，进行init初始化(asynOptions只是处理从第二级往下的异步加载), deleteSingleNode:谨慎使用(允许直接删除父节点)",
                cols:[
                    {name:"name",val:"方法名称"},{name:"desc",val:"方法描述"},{name:"demo",val:"示例"},{name:"params",val:"参数"}
                ],
                data:[
                    {name:"init",desc:"初始化tree的数据源(非常重要)",demo:"this.$refs['组件key'].init(data);",params:"data为一维数组,通常为parentNodeList"},
                    {name:"deleteSingleNode",desc:"删除所选节点(无论层级关系)",demo:"this.$refs['组件key'].deleteSingleNode(Node);",params:"Node:当前所选Node,可以通过itemClick方法得到"},
                    {name:"getAllCheckedNodes",desc:"获取所有选中的子节点(包含所有选中状态的父节点)",demo:"this.$refs['tree'].getAllCheckedNodes();",params:"-"},
                    {name:"getAllCheckboxNodesExcludeParent",desc:"获取所有选中的子节点(不包含所有选中状态的父节点)",demo:"this.$refs['tree'].getAllCheckboxNodesExcludeParent();",params:"-"},
                    {name:"reset",desc:"重置tree数据源,该方法无需参数",demo:"this.$refs['tree'].reset();",params:"-"},
                ]
            }
        }
    },
    localTree:{
        route:{path:"localTree",name:"localTree",route:"/localTree",cls:""},
        name:"LocalTree 一次性加载所有数据源的Tree",
        type:"localTree",
        desc:"<le-local-tree>一次性获取数据，渲染tree",
        baseInfo:'<le-local-tree displayName="name" ref="tree" :itemClick="itemClick" childrenKey="children" checkbox></le-local-tree>',
        info:{
            propertys:{
                key:"属性",
                tips:"",
                cols:[
                    {name:"name",val:"参数"},{name:"desc",val:"说明"},{name:"type",val:"类型"},
                    {name:"required",val:"可选值"},{name:"default",val:"默认值"}
                ],
                data:[
                    {name:"displayName",desc:"数据源显示字段",type:"String",required:"必填",default:"-"},
                    {name:"ref",desc:"组件的唯一key，不允许重复",type:"String",required:"必填",default:"-"},
                    {name:"childrenKey",desc:"数据源的childrenKey",type:"String",required:"必填",default:"-"},
                    {name:"checkbox",desc:"是否显示checkbox",type:"Boolean",required:"非必填",default:"false"},
                ]
            },
            events:{
                key:"事件",
                tips:"",
                cols:[
                    {name:"name",val:"事件名称"},{name:"desc",val:"事件描述"},{name:"params",val:"参数"},
                ],
                data:[
                    {name:"itemClick",desc:"TreeNode选中事件",params:"item:当前选中的item对象"}
                ]
            },
            methods:{
                key:"方法",
                tips:"初始化必须执行init方法进行组件内部数据源初始化, deleteSingleNode:谨慎使用(允许直接删除父节点)",
                cols:[
                    {name:"name",val:"方法名称"},{name:"desc",val:"方法描述"},{name:"demo",val:"示例"},{name:"params",val:"参数"}
                ],
                data:[
                    {name:"init",desc:"初始化tree的数据源(非常重要)",demo:"this.$refs['组件key'].init(data);",params:"data为一维数组,通常为parentNodeList"},
                    {name:"deleteSingleNode",desc:"删除所选节点(无论层级关系)",demo:"this.$refs['组件key'].deleteSingleNode(Node);",params:"Node:当前所选Node,可以通过itemClick方法得到"},
                    {name:"getAllCheckedNodes",desc:"获取所有选中的子节点(包含所有选中状态的父节点)",demo:"this.$refs['tree'].getAllCheckedNodes();",params:"-"},
                    {name:"getAllCheckboxNodesExcludeParent",desc:"获取所有选中的子节点(不包含所有选中状态的父节点)",demo:"this.$refs['tree'].getAllCheckboxNodesExcludeParent();",params:"-"},
                    {name:"reset",desc:"重置tree数据源,该方法无需参数",demo:"this.$refs['tree'].reset();",params:"-"},
                    {name:"updateSingleNode",desc:"更新单个节点,需要2个参数(node,data-->传输的数据,格式{__displayName:'显示名字',__children:[需要添加的数组]})",demo:"this.$refs['tree'].updateSingleNode(node,array);",params:"node:当前节点,array:需要更新的数组"},
                    {name:"checkAll",desc:"选中/非选中所有checkbox，必须配置checkbox属性",demo:"this.$refs['tree'].checkAll(flag);",params:"flag:true or false"},
                    {name:"expandAll",desc:"展开/关闭中所有节点",demo:"this.$refs['tree'].expandAll(flag);",params:"flag:true or false"},
                    {name:"bindCKByField",desc:"数据回写绑定节点",demo:"this.$refs['tree'].bindCKByField(field,array);",params:"field:绑定的字段名称,array:一维数组,需要绑定的值"},
                ]
            }
        }
    },
    apiRule:{
        route:{path:"apiRule",name:"apiRule",route:"/apiRule",cls:""},
        name:"NEC项目接口定义规则",
        type:"api",
        desc:"前后端对接的接口定义规范, 服务端返回的为一个json对象, 对象的4个属性必须都返回",
        baseInfo:"{data:{},status:200,msg:'',params:{}}",
        info:{
            propertys:{
                key:"属性描述",
                tips:"params是服务端返回的参数",
                cols:[
                    {name:"name",val:"参数"},{name:"desc",val:"说明"},{name:"type",val:"类型"},
                    {name:"required",val:"可选值"},{name:"default",val:"默认值"}
                ],
                data:[
                    {name:"data",desc:"返回的任意数据格式",type:"任意格式的对象",required:"必填",default:"-"},
                    {name:"status",desc:"接口成功与否标识",type:"Number",required:"必填",default:"-"},
                    {name:"msg",desc:"错误信息",type:"String",required:"必填",default:"-"},
                    {name:"params",desc:"服务端返回的参数",type:"任意格式的对象",required:"必填",default:"-"}
                ]
            },
            check:{
                key:"status状态码",
                tips:"如果status状态为其他(不等于200或者701),那么前端直接会抛出msg信息, 因此服务端要返回友好的错误信息, 而不要提示一大串代码错误",
                cols:[
                    {name:"name",val:"类型"},{name:"desc",val:"说明"}
                ],
                data:[
                    {name:"200",desc:"接口成功"},
                    {name:"701",desc:"未登录"},
                    {name:"其他",desc:"错误"},
                ]
            },
            events:{
                key:"data说明",
                tips:"data可以为数组，可以为json对象，可以为任意格式的对象，返回给前端即可",
            },
            params:{
                key:"params说明",
                tips:"params为服务端在一些特殊的情况下返回给前端的参数, 允许不返回(前端收到为undefined), 但是服务端必须返回这个字段, 返回格式和data一样，任意格式的对象",
            },
        }
    },
}

export default comps;