import Vue from 'vue'
import plugin from './plugin.js'

import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Header from './header.vue'
import Sider from './sider.vue'
import Footer from './footer.vue'
import Content from './content.vue'
import Layout from './layout.vue'
import Toast from './toast.vue'
import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsBody from './tabs-body.vue'
import TabsItem from './tabs-item.vue'
import TabsPane from './tabs-pane.vue'
import Popover from './popover.vue'



Vue.use(plugin)

Vue.component('g-input', Input)
Vue.component('g-icon', Icon)
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-footer', Footer)
Vue.component('g-content', Content)
Vue.component('g-layout', Layout)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        message: 'hi',
        selectedTab: 'sports'
    },
    created() {

    },
    methods: {
        yyy() {
            console.log('xxx')
        },
        inputChange(e) {
            console.log(e.target.value)
        },
        showToast1() {

            this.showToast('top')
        },
        showToast2() {
            this.showToast('bottom')
        },
        showToast3() {

            this.showToast('middle')
        },
        showToast(position) {
            this.$toast(`当前余额${Math.random() * 1000}`, {
                position,
                closeButton: {
                    text: '关闭',
                    callback() {
                        console.log('用户说他知道了')
                    }
                },
                enableHtml: true
            })
        },

    }
})

// //单元测试
// import chai, { expect } from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)

// try {
//     {
//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'setting'
//             }
//         })
//         vm.$mount()
//         let useElement = vm.$el.querySelector('use')
//         expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')//判断是否匹配
//         vm.$destroy()//测试完后从内存删除
//     }
//     {
//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'setting',
//                 loading: true
//             }
//         })
//         vm.$mount()
//         let useElement = vm.$el.querySelector('use')
//         expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')//判断是否匹配
//         vm.$destroy()
//     }
//     {
//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'setting',
//                 iconPosition: 'right'
//             }
//         })
//         vm.$mount('#test')//不挂载就不渲染，就无法拿到该参数
//         let svg = vm.$el.querySelector('svg')
//         const { order } = window.getComputedStyle(svg)
//         expect(order).to.eq('2')//判断是否匹配
//         vm.$el.remove()//测试完后删除
//         vm.$destroy()
//     }
//     {
//         //mock
//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'setting'
//             }
//         })
//         vm.$mount()
//         let spy = chai.spy(function () { console.log('被调用了') })
//         vm.$on('click', spy)
//         vm.$el.click()
//         expect(spy).to.have.been.called()//期待这个函数被调用了
//         vm.$destroy()//测试完后从内存删除
//     }
// } catch (error) {
//     window.errors = [error]
// } finally {
//     window.errors && window.errors.forEach(error => console.error(error.message))
// }
