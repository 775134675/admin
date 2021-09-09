import React, { useState, Component } from 'react';
import { Form, Input, Button, Card, Select, Table, Tag, Space,Modal } from 'antd';
import EditUser from './user-edit'
import './index.css'
const { Option } = Select;

class SysUser extends Component {

   
    state = {
        selectedRowKeys: [], 
        loading: false,
        isModalVisible:false
    };
    files = [{
        "name": [
            "status"
        ],
        "value": "true"
    }
]
    data = [
        {
            id: '1',
            userName: 'zhoushixin',
            nickname: '周女士',
            department: '幸福生涯联盟',
            gender: '女',
            phone: '15094336699',
            email: '775134685@qq.com',
            createTime: '2021-03-06 20:08:05',
            status: '正常',
        },
        {
            id: '2',
            userName: 'zhoushixin',
            nickname: '周女士',
            department: '幸福生涯联盟',
            gender: '女',
            phone: '15094336699',
            email: '775134685@qq.com',
            createTime: '2021-03-06 20:08:05',
            status: '正常',
        },
        {
            id: '3',
            userName: 'zhoushixin',
            nickname: '周女士',
            department: '幸福生涯联盟',
            gender: '女',
            phone: '15094336699',
            email: '775134685@qq.com',
            createTime: '2021-03-06 20:08:05',
            status: '正常',
        },
        {
            id: '4',
            userName: 'zhoushixin',
            nickname: '周女士',
            department: '幸福生涯联盟',
            gender: '女',
            phone: '15094336699',
            email: '775134685@qq.com',
            createTime: '2021-03-06 20:08:05',
            status: '正常',
        },
        {
            id: '5',
            userName: 'zhoushixin',
            nickname: '周女士',
            department: '幸福生涯联盟',
            gender: '女',
            phone: '15094336699',
            email: '775134685@qq.com',
            createTime: '2021-03-06 20:08:05',
            status: '正常',
        },
        {
            id: '6',
            userName: 'zhoushixin',
            nickname: '周女士',
            department: '幸福生涯联盟',
            gender: '女',
            phone: '15094336699',
            email: '775134685@qq.com',
            createTime: '2021-03-06 20:08:05',
            status: '正常',
        }

    ];
    columns = [
        {
            title: '用户名',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: '用户昵称',
            dataIndex: 'nickname',
            key: 'nickname',
        },
        {
            title: '所在部门',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: '性别',
            key: 'gender',
            dataIndex: 'gender',
        },
        {
            title: '电话',
            key: 'phone',
            dataIndex: 'phone',
        },
        {
            title: '邮箱',
            key: 'email',
            dataIndex: 'email',
        },
        {
            title: '创建时间',
            key: 'createTime',
            dataIndex: 'createTime',
        },
        {
            title: '状态',
            key: 'status',
            dataIndex: 'status',
        },
        {
            title: '操作',
            key: 'operate',
            dataIndex: 'operate',
            render: (text, record) => (
                
                <Space size="middle">
                  <a onClick={()=>this.editUser(record)}>编辑{record.id}</a>
                  <a>详情{record.id}</a>
                  <a>删除{record.id}</a>
                </Space>
            ),
        },
    ];
    
    onFinish = (value) => {
        console.log('Received values from form: ', value);
    };
    editUser(value){
        console.log("43534534")
        console.log("value",value)
        // console.log("isModalVisible",this.isModalVisible)

        this.setState({
            isModalVisible:true
        })
        // this.state.isModalVisible = true
        console.log("isModalVisible",this.isModalVisible)
    }
    

    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    render() {
        const { loading, selectedRowKeys,isModalVisible} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <Card title="用户管理">
                <Form fields={this.files} name="userForm" layout="inline" onFinish={this.onFinish}>
                    <Form.Item name="status" label="状态">
                        <Select
                            style={{
                                width: 80,
                                margin: '0 8px',
                            }}
                        >
                            <Option value="true">正常</Option>
                            <Option value="false">冻结</Option>
                        </Select>


                    </Form.Item>
                    <Form.Item name="department" label="所在部门">
                        <Select
                            style={{
                                width: 80,
                                margin: '0 8px',
                            }}
                        >
                            <Option value=""></Option>
                            <Option value="1">部门1</Option>
                            <Option value="2">部门2</Option>
                            <Option value="3">部门3</Option>
                            <Option value="4">部门4</Option>
                            <Option value="5">部门5</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="userName" label="用户名">
                        <Input placeholder="请输入用户名" />
                    </Form.Item>
                    <Form.Item name="userNickname" label="用户昵称">
                        <Input placeholder="请输入用户昵称" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            查询
                        </Button>
                    </Form.Item>
                </Form>

                <div className='btnContainer'>
                    <div className='leftBtnGroup'>
                        <Button>修改密码</Button>
                        <Button>角色分配</Button>
                    </div>
                    <div className='rightBtnGroup'>
                        <Button>添加</Button>
                        <Button>操作</Button>
                    </div>
                </div>

                <Table rowSelection={rowSelection} dataSource={this.data} columns={this.columns}  size="small"/>

                <EditUser isModalVisible={isModalVisible}/>
            </Card>
        )
    }

}

export default SysUser