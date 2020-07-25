import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

Vue.component('g-icon', Icon)
Vue.component('g-button', Button)

Vue.component('g-button-group', ButtonGroup)
new Vue({
    el: '#app',
    data: {
        loading1: false
    }
})

//单元测试
import { expect } from 'chai'

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')//判断是否匹配
    vm.$destroy()//测试完后从内存删除
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')//判断是否匹配
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    })
    vm.$mount('#test')//不挂载就不渲染，就无法拿到该参数
    let svg = vm.$el.querySelector('svg')
    const { order } = window.getComputedStyle(svg)
    expect(order).to.eq('2')//判断是否匹配
    vm.$el.remove()//测试完后删除
    vm.$destroy()
}
{
    //mock
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount()
    vm.$on('click', () => {
        expect(1).to.eq(1)
    })
    vm.$el.click()
    vm.$destroy()//测试完后从内存删除
}