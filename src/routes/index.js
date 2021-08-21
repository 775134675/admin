import List from '../pages/admin/products/List';
import index from "../pages/admin/dashboard";
import Login from "../pages/Login";
import Edit from '../pages/admin/products/Edit';
import PageNotFound from '../pages/PageNotFound';

export const mainRoutes = [{
    path: "/login",
    component: Login
}, {
    path: '/404',
    component: PageNotFound
}]
// isShow 是否在左侧导航展示
export const adminRoutes = [{
        path: '/admin/dashboard',
        component: index,
        isShow:true,
        title:'主页'
    },
    {
        path: '/admin/products',
        component: List,
        exact: true,
        isShow:true,
        title:'商品管理'
    },
    {
        path: '/admin/products/edit/:id?',
        component: Edit,
        isShow:false
    }
]