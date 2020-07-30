const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.exist
    })
    const rowConstructor = Vue.extend(Row)
    const colConstructor = Vue.extend(Col)

    it('接受 span属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new colConstructor({
            propsData: {
                span: 1
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接受 offset属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new colConstructor({
            propsData: {
                offset: 1
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('offset-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接受 PC属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new colConstructor({
            propsData: {
                pc: { span: 1, offset: 2 }
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-pc-1')).to.equal(true)
        expect(vm.$el.classList.contains('offset-pc-2')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接受 ipad属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new colConstructor({
            propsData: {
                ipad: { span: 1, offset: 2 }
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-ipad-1')).to.equal(true)
        expect(vm.$el.classList.contains('offset-ipad-2')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接受 narrow-pc属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new colConstructor({
            propsData: {
                narrowPc: { span: 1, offset: 2 }
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-narrow-pc-1')).to.equal(true)
        expect(vm.$el.classList.contains('offset-narrow-pc-2')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接受 wide-pc属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new colConstructor({
            propsData: {
                widePc: { span: 1, offset: 2 }
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-wide-pc-1')).to.equal(true)
        expect(vm.$el.classList.contains('offset-wide-pc-2')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
})