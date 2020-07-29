import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'

Vue.component('g-input', Input)
Vue.component('g-icon', Icon)
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-row', Row)
Vue.component('g-col', Col)


new Vue({
    el: '#app',
    data: {
        loading1: false,
        message: 'hi'
    },
    created() {

    },
    methods: {
        inputChange(e) {
            console.log(e.target.value)
        }
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
