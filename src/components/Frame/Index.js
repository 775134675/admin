import React from 'react'
// 组件使用路由需要使用withRouter插件
import {withRouter} from 'react-router-dom'
import { Layout, Menu, Breadcrumb ,Dropdown, message} from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {adminRoutes} from '../../routes'
import {clearToken} from '../../untils/auth'
import './frame.css'
const { Header, Content, Sider } = Layout;
//过滤需要显示的路由
const routes = adminRoutes.filter(route=>route.isShow)

function Index(props) {
    console.log("propspropspropsprops",props)
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
        <Sider width={200} className="site-layout-background">
            <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            >
            {routes.map(route=>{
                return (
                <Menu.Item
                key={route.path} 
                onClick={p=>props.history.push(p.key)}>
                    {route.title}
                    </Menu.Item>)
            })}
            </Menu>
        </Sider>
        <Layout style={{ padding: '16px' }}>
            <Content
            className="site-layout-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
            }}
            >
            {props.children}
            </Content>
        </Layout>
        </Layout>
    </Layout>
    )
}

export default withRouter(Index)
