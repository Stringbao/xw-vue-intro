import markdown from "../markdown/components/markdown.md";


import html from "../markdown/components/html.md";
import input from "../markdown/components/input.md";
import textarea from "../markdown/components/textarea.md";
import alert from "../markdown/components/alert.md";
import button from "../markdown/components/button.md";
import checkbox from "../markdown/components/checkbox.md";
import radio from "../markdown/components/radio.md";
import datePicker from "../markdown/components/datePicker.md";
import timePicker from "../markdown/components/timePicker.md";
import dateTimePicker from "../markdown/components/dateTimePicker.md";
import dialog from "../markdown/components/dialog.md";
import editor from "../markdown/components/editor.md";
import select from "../markdown/components/select.md";
import table from "../markdown/components/table.md";
import localTable from "../markdown/components/localTable.md";
import upload from "../markdown/components/upload.md";
import asynTree from "../markdown/components/asynTree.md";
import localTree from "../markdown/components/localTree.md";
import apiRule from "../markdown/components/apiRule.md";
import form from "../markdown/components/form.md";


import nginx from "../markdown/guides/nginx.md";
import optimization from "../markdown/guides/optimization.md";
import babel from "../markdown/guides/babel.md";
import developmentNorm from "../markdown/guides/developmentNorm.md";


let comps = {
    components: {
        title: '组件',
        childs: [
            { name: 'markdown', source: markdown },
            { name: 'html', source: html },
            { name: 'input', source: input },
            { name: 'textarea', source: textarea },
            { name: 'alert', source: alert },
            { name: 'button', source: button },
            { name: 'checkbox', source: checkbox },
            { name: 'radio', source: radio },
            { name: 'datePicker', source: datePicker },
            { name: 'timePicker', source: timePicker },
            { name: 'dateTimePicker', source: dateTimePicker },
            { name: 'dialog', source: dialog },
            { name: 'editor', source: editor },
            { name: 'form', source: form },
            { name: 'select', source: select },
            { name: 'table', source: table },
            { name: 'localTable', source: localTable },
            { name: 'upload', source: upload },
            { name: 'asynTree', source: asynTree },
            { name: 'localTree', source: localTree },
            { name: 'apiRule', source: apiRule },
        ]
    },
    guides: {
        title: '教程',
        childs: [
            {name:'nginx',source:nginx,title:"nginx简易教程"},
            {name:'optimization',source:optimization,title:"前端优化教程"},
            {name:'babel',source:babel,title:"babel踩过的坑"},
            { name: 'developmentNorm', source: developmentNorm,title:"开发规范" },
        ]
    }
}

export default comps;