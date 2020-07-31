const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.exist
    })
    describe('props', () => {
        let div = document.createElement('div')
        document.body.appendChild(div)
        it('接受 autoClose', () => {

            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1,

                }
            }).$mount(div)
            vm.$on('close', () => {
                expect(document.body.contains(vm.$el)).to.equal(false)

            })
        })
        it('接受closeButton', () => {
            const callback = sinon.fake()
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '关闭',
                        callback,
                    }
                }
            }).$mount()
            const close = vm.$el.querySelector('.close')
            expect(close.textContent.trim()).to.equal('关闭')
            close.click()
            expect(callback).to.have.been.called
        })
        it('接受 enableHtml', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHtml: true
                }
            })
            vm.$slots.default = ['<strong id="test">hi</strong>']
            vm.$mount()
            let strong = vm.$el.querySelector('#test')
            expect(strong).to.exist
        })
        it('接受 position', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'middle'
                }
            }).$mount()
            console.log(vm.$el.classList)
            expect(vm.$el.classList.contains('position-middle')).to.equal(true)
        })

    })
})