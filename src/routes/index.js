import List from '../pages/admin/products/List';
import index from "../pages/admin/main";
import Login from "../pages/Login";
import Edit from '../pages/admin/products/Edit';
import PageNotFound from '../pages/PageNotFound';

// 系统管理
import sysUser from "../pages/admin/system/user"
import sysRole from "../pages/admin/system/role"
import sysMenu from "../pages/admin/system/menu"
import sysDept from "../pages/admin/system/dept"
import sysDict from "../pages/admin/system/dict"
import sysActionLog from "../pages/admin/system/actionLog"
import sysMobileuser from "../pages/admin/system/mobileuser"

export const mainRoutes = [{
    path: "/login",
    component: Login
}, {
    path: '/404',
    component: PageNotFound
}]
// isShow 是否在左侧导航展示
export const adminRoutes = [{
        path: '/admin/main',
        component: index,
        isShow:true,
        title:'主页',
        isSiderbar:true,
        isMenuBar:false
    },{ 
        path: '/admin/products',
        component: List,
        exact: true,
        isShow:true,
        title:'商品管理',
        isSiderbar:true,
        isMenuBar:false
    },{ 
        isShow:true,
        title:'系统管理',
        isSiderbar:true,
        isMenuBar:true
    },{
        path: '/admin/system/user',
        component: sysUser,
        exact: true,
        isShow:true,
        title:'用户管理',
        parent:"系统管理"
    },{
        path: '/admin/system/role',
        component: sysRole,
        exact: true,
        isShow:true,
        title:'角色管理',
        parent:"系统管理"
    },{
        path: '/admin/system/menu',
        component: sysMenu,
        exact: true,
        isShow:true,
        title:'菜单管理',
        parent:"系统管理"
    },{
        path: '/admin/system/dept',
        component: sysDept,
        exact: true,
        isShow:true,
        title:'部门管理',
        parent:"系统管理"
    },{
        path: '/admin/system/dict',
        component: sysDict,
        exact: true,
        isShow:true,
        title:'字典管理',
        parent:"系统管理"
    },{
        path: '/admin/system/actionLog',
        component: sysActionLog,
        exact: true,
        isShow:true,
        title:'行为日志',
        parent:"系统管理"
    },{
        path: '/admin/system/mobileuser',
        component: sysMobileuser,
        exact: true,
        isShow:true,
        title:'学生管理',
        parent:"系统管理"
    }




    // {
    //     isShow:true,
    //     title:'系统管理',
    //     children:[]
    // }
    // {
    //     path: '/admin/products/edit/:id?',
    //     component: Edit,
    //     isShow:false
    // }
]