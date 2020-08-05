const expect = chai.expect;
import Vue from 'vue'

import TabsItem from '../src/tabs-item.vue'

Vue.component('g-tabs-item', TabsItem)


Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.exist
    })
    it('可以设置icon.', () => {
        const Constructor = Vue.extend(TabsItem)
        let vm = new Constructor({
            propsData: {
                name: 'sports'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('sports')
    })
    it('接受disabled', () => {
        const Constructor = Vue.extend(TabsItem)
        let vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.be.true

        const callback = sinon.fake()
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })
})