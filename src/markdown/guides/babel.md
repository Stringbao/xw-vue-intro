问题现象：

`export default not found`

问题原因:

不懂 解释不清 后期补充


babel版本8.X.X

相关系列包

"@babel/cli": "^7.7.0",
"@babel/core": "^7.7.2",
"@babel/plugin-syntax-dynamic-import": "^7.2.0",
"@babel/plugin-transform-runtime": "^7.6.2",
"@babel/preset-env": "^7.7.1",
"@babel/runtime": "^7.7.2",
**"babel-loader": "^8.0.6",**


.babelrc文件配置
1. 打包工具库配置
    ```
    {
        "presets": [
            "@babel/preset-env"
        ],
        "plugins": [
            "@babel/plugin-transform-runtime",
            "@babel/plugin-syntax-dynamic-import"
        ]
    }
    ```
2. 项目打包配置
   ```
   {
        "presets": [
            [
                "@babel/preset-env",
                {
                    "modules":"umd"
                }
            ]
        ],
        "plugins": [
            "@babel/plugin-transform-runtime",
            "@babel/plugin-syntax-dynamic-import"
        ]
    }
    ```

