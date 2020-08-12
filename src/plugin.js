import Toast from './toast.vue'


let currentToast


export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, dataOptions) {
            // currentToast && console.log(currentToast)
            if (currentToast) {
                currentToast.close()
            }

            currentToast = createToast({
                Vue, message, data: { ...dataOptions }, onClose: () => {
                    currentToast = null
                }
            })
        }
    }
}


function createToast({ Vue, message, data, onClose }) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData: { ...data }
    })
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close', onClose)
    document.body.appendChild(toast.$el)
    return toast
}