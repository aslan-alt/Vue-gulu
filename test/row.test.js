const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist
    })
    const rowConstructor = Vue.extend(Row)
    // const colConstructor = Vue.extend(Col)

    it('接受gutter 属性', (done) => {
        Vue.component('g-row', Row)
        Vue.component('g-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-row gutter="20">
            <g-col span="12" ></g-col>
            <g-col span="12" ></g-col>
        </g-row>
        `
        const vm = new Vue({
            el: div
        })

        setTimeout(() => {
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginRight).to.equal('-10px')
            expect(getComputedStyle(row).marginLeft).to.equal('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingRight).to.equal('10px')
            expect(getComputedStyle(cols[1]).paddingLeft).to.equal('10px')
            vm.$el.remove()
            vm.$destroy()
            done()
        }, 1000);


    })
    it('接受 align属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new rowConstructor({
            propsData: {
                align: 'right'
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
        div.remove()
        vm.$destroy()
    })
})