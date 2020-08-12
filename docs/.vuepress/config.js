module.exports = {
    base: '/my-ui/',
    title: 'My UI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Source code', link: 'https://github.com/aslan-alt/Vue-gulu' },
        ],
        sidebar: [
            {
                title: '入门',
                children: ['/install/', '/components/get-started']
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/grid',
                    '/components/input',
                    '/components/layout',
                    '/components/popover',
                    '/components/tabs',
                    '/components/collapse',
                    '/components/toast',
                ]
            }
        ]
    }
}