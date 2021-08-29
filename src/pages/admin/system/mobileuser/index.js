import React, { useState, Component } from 'react';
import { Form, Input, Button, Card, Select, Table, Tag, Space } from 'antd';

import './index.css'
const { Option } = Select;

class SysMobileuser extends Component {

    constructor(props) {
        super(props)
    }
    files = [{
        "name": [
            "status"
        ],
        "value": "true"
    }]
    data = [
        {
            id: '1',
            studentNum: '2019441009',
            createTime: '2021-05-25 23:50:50',
            name: 'cc',
            email: '18075291989@163.com',
            gender: '15094336699',
            status: '正常',
            phone: '18155069020',
            weixinNum: '正常',
            school:'上海设计艺术学院',
            college:'表演学院',
            major:"演员"
        },{
            id: '1',
            studentNum: '2019441009',
            createTime: '2021-05-25 23:50:50',
            name: 'cc',
            email: '18075291989@163.com',
            gender: '15094336699',
            status: '正常',
            phone: '18155069020',
            weixinNum: '正常',
            school:'上海设计艺术学院',
            college:'表演学院',
            major:"演员"
        },{
            id: '1',
            studentNum: '2019441009',
            createTime: '2021-05-25 23:50:50',
            name: 'cc',
            email: '18075291989@163.com',
            gender: '15094336699',
            status: '正常',
            phone: '18155069020',
            weixinNum: '正常',
            school:'上海设计艺术学院',
            college:'表演学院',
            major:"演员"
        },{
            id: '1',
            studentNum: '2019441009',
            createTime: '2021-05-25 23:50:50',
            name: 'cc',
            email: '18075291989@163.com',
            gender: '15094336699',
            status: '正常',
            phone: '18155069020',
            weixinNum: '正常',
            school:'上海设计艺术学院',
            college:'表演学院',
            major:"演员"
        }
    ];
    columns = [
        {
            title: '学号',
            dataIndex: 'studentNum',
            key: 'studentNum',
            fixed: 'left',
        },
        {
            title: '创建时间',
            dataIndex: 'createTime',
            key: 'createTime',
            fixed: 'left',
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '邮箱',
            key: 'email',
            dataIndex: 'email',
        },
        {
            title: '性别',
            key: 'gender',
            dataIndex: 'gender',
        },
        {
            title: '状态',
            key: 'status',
            dataIndex: 'status',
        },
        {
            title: '手机号',
            key: 'phone',
            dataIndex: 'phone',
        },
        {
            title: '微信号',
            key: 'weixinNum',
            dataIndex: 'weixinNum',
        },{
            title: '学校',
            key: 'school',
            dataIndex: 'school',
        },{
            title: '学院',
            key: 'college',
            dataIndex: 'college',
        },{
            title: '专业',
            key: 'major',
            dataIndex: 'major',
        },
        {
            title: '操作',
            key: 'operate',
            dataIndex: 'operate',
            fixed: 'right',
            width:170,
            render: (text, record) => (
                
                <Space size="middle">
                  <a>编辑{record.id}</a>
                  <a>详情{record.id}</a>
                  <a>删除{record.id}</a>
                </Space>
            ),
        },
    ];
    onFinish = (value) => {
        console.log('Received values from form: ', value);
    };

    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    };

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
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <Card title="学生管理">
                <Form fields={this.files} name="userRoleForm" layout="inline" onFinish={this.onFinish}>
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

                    <Form.Item name="userName" label="学号">
                        <Input placeholder="请输入学号" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            查询
                        </Button>
                    </Form.Item>

                    <div className='rightBtnGroup'>
                        <Button>添加</Button>
                        <Button>操作</Button>
                    </div>
                </Form>

                <Table rowSelection={rowSelection} dataSource={this.data} columns={this.columns} scroll={{ x: 1300 }} size="small"/>
            </Card>
        )
    }

}

export default SysMobileuser
