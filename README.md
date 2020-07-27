## vueElement  一个Vue UI组件
[![Build Status](https://travis-ci.com/aslan-alt/Vue-gulu.svg?branch=master)](https://travis-ci.com/aslan-alt/Vue-gulu)
作者:aslan
## 介绍
这是我在学习Vue中做的一个UI框架，希望对你有用
## 开始使用
1. 安装
使用本框架在css中开启border-box
```
*,*::before, *::after{margin: 0;padding: 0;box-sizing: border-box;}
```
IE8 及以上浏览器都支持此样式
你还需要设置默认样式变量(后期会改为scss变量)
```
:root {
    --button-height: 32px;
    --font-size: 14px;
    --button-height: 32px;
    --button-bg: white;
    --button-active-bg: #eee;
    --font-size: 14px;
    --border-radius: 4px;
    --color: #999;
    --border-color: #999;
    --border-color-hover: #666;
}
```
2. 安装
```
npm i --save gulu-aslan
```
3. 引入
```
import {Button,ButtonGroup,Icon} from "gulu-aslan";
import 'gulu-aslan/dist/index.css'

export default{
    name:'app',
    components:{
        'g-button':Button,
        'g-icon':Icon
    }
}
```

## 文档

## 提问

## 变更记录



## 联系方式
