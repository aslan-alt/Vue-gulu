const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover.vue'
import Button from '../src/button.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.be.ok
    })
    describe('props', () => {
        it('接受 position', (done) => {
            Vue.component('g-popover', Popover)
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <g-popover position="bottom" ref="a">
                <template slot="content">内容</template>
                <button>点我</button>
            </g-popover>
            `
            const vm = new Vue({
                el: div
            })
            vm.$nextTick(() => {
                vm.$el.querySelector('button').click()
                setTimeout(() => {
                    const { contentWrapper } = vm.$refs.a.$refs
                    expect(contentWrapper.classList.contains('position-bottom')).to.be.true
                    done()
                }, 500)

            })

        })
        // it('可以设置trigger', (done) => {
        //     Vue.component('g-popover', Popover)
        //     const div = document.createElement('div')
        //     document.body.appendChild(div)
        //     div.innerHTML = `
        //     <g-popover position="bottom" ref="a">
        //         <template slot="content">内容</template>
        //         <button>点我</button>
        //     </g-popover>
        //     `
        //     const vm = new Vue({
        //         el: div
        //     })
        //     let event = new Event('mouseenter')
        //     vm.$el.dispatchEvent(event)
        //     setTimeout(() => {
        //         const { contentWrapper } = vm.$refs.a.$refs
        //         expect(contentWrapper).to.exist
        //     }, 500)
        // })
    })
})