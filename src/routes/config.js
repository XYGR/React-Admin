export default {
    menus: [
        // 菜单相关路由
        { key: '/app/index', title: '首页', icon: 'mobile', component: 'Index' },
        {
            key: '/app/banner',
            title: 'Banner',
            icon: 'picture',
            subs: [
                { key: '/app/banner/edit', title: 'Banner管理', component: 'BannerEdit' },
            ],
        },
        {
            key: '/app/product',
            title: '产品',
            icon: 'inbox',
            subs: [
                { key: '/app/product/edit', title: '产品管理', component: 'ProductEdit' },
            ],
        },
    ],
    others: [], // 非菜单相关路由
};
