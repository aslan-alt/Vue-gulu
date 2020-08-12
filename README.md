## vueElement  一个基于Vue2的 UI组件库
[![Build Status](https://travis-ci.com/aslan-alt/Vue-gulu.svg?branch=master)](https://travis-ci.com/aslan-alt/Vue-gulu)
作者:aslan
## 介绍
这是我在学习Vue中做的一个UI库，希望对你有用
## 注意
使用本框架在css中开启border-box
```
*,*::before, *::after{margin: 0;padding: 0;box-sizing: border-box;}
```
IE8 及以上浏览器都支持此样式
你还需要设置默认样式变量(后期会改为scss变量)
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
