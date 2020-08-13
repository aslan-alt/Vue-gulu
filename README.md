# My UI

一个基于Vue2的 UI组件库[官网](https://aslan-alt.github.io/my-ui/)

[![Build Status](https://travis-ci.com/aslan-alt/Vue-gulu.svg?branch=master)](https://travis-ci.com/aslan-alt/Vue-gulu)

作者:aslan
## 介绍
注意：本 UI 框架的代码尚未完全完工，请不要在生产环境中使用本 UI 框架。
这是一个通过Vue 实现的UI框架，提供了一些常用的组件，你可以通过逐个查看 commit 来学习本框架的制作思路
## 注意
使用本框架在css中开启border-box
```
*,*::before, *::after{margin: 0;padding: 0;box-sizing: border-box;}
```
IE8 及以上浏览器都支持此样式
你还需要设置默认样式变量(后期会改为scss变量)
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
[commit history](https://github.com/aslan-alt/Vue-gulu/commits/master)
## 联系方式
874470891@qq.com