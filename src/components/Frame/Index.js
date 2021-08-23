import React from 'react'
// 组件使用路由需要使用withRouter插件
import {withRouter} from 'react-router-dom'
import { Switch,Route,Redirect} from 'react-router-dom'

import { Layout, Menu, Breadcrumb ,Dropdown, message} from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {adminRoutes} from '../../routes'
import {clearToken} from '../../untils/auth'
import './frame.css'
const { Header, Content, Sider } = Layout;

const { SubMenu } = Menu;
//过滤需要显示的路由
const routes = adminRoutes.filter(route=>route.isShow)

const parentRoutes = routes.filter(route=>route.isSiderbar)
const childRoutes = routes.filter(route=>route.parent)

// const childRoutes = adminRoutes.filter(route=>route.parent)
function Index(props) {
    console.log("props",props)
    const prpMenu=(
        <Menu onClick={(p)=>{
            if(p.key=='loginOut'){
                props.history.push('/login')
            }else{
                message.info(p.key)
            }
        }}>
            <Menu.Item key='changePw'>修改密码</Menu.Item>
            <Menu.Item key='loginOut'>退出</Menu.Item>
        </Menu>
    )
    return (
        <Layout>
            <Header className="header">
                <div className='logoText'>先知后台管理系统</div>
                <Dropdown overlay={prpMenu}>
                    <div><span>许健</span></div>
                </Dropdown>
            </Header>
        <Layout>
        <Sider width={220} className="site-layout-background">
            <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            >
            {parentRoutes.map(route=>{
                if(route.isMenuBar){
                    return (
                        <SubMenu title={route.title}>
                            {childRoutes.map(subRoute=>{
                                if(subRoute.parent==route.title){
                                    return(
                                        <Menu.Item key={subRoute.path} onClick={p=>props.history.push(p.key)}>{subRoute.title}</Menu.Item>
                                    )
                                }
                            })}
                        </SubMenu>
                    )
                }else{
                    return (
                        <Menu.Item key={route.path}  onClick={p=>props.history.push(p.key)}>
                            {route.title}
                        </Menu.Item>
                    )
                }
            })}
            </Menu>
        </Sider>
        <Layout style={{ padding: '16px' }}>
            <Content
            className="site-layout-background"
            style={{padding: 24,margin: 0, minHeight: 280}}>
                {
                    console.log("props111111111",props)
                }

            {props.children}
            </Content>
        </Layout>
        </Layout>
    </Layout>
    )
}

export default withRouter(Index)
