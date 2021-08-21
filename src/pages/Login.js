import React from 'react'
import { Form, Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { setToken } from '../untils/auth'
import {loginApi} from '../service/login'
import './Login.css'
function Login(props) {
    const onFinish = (values) => {
        setToken(values.username)
        loginApi({
            username:"xujian",
            password:"admin"
        }).then(res=>{

        })
        .catch(err=>{

        })
        props.history.push('/admin')
      };
    
    return (
        <Card title='先知管理后台' className="login-form">
            <Form name="normal_login"  onFinish={onFinish}>
            <Form.Item
                name="username"
                rules={[
                {
                    required: true,
                    message: '请输入账号',
                },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
            </Form.Item>
            <Form.Item name="password"
                rules={[
                {
                    required: true,
                    message: '请输入密码',
                },]}>
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码"/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                登录
                </Button>
            </Form.Item>
        </Form>
    </Card>
    )
}

export default Login
