import React, { useState, Component } from 'react';
import { Form, Input, Button, Card, Select, Table, Tag, Space } from 'antd';

// import './index.css'
const { Option } = Select;

class SysActionLog extends Component {

    constructor(props) {
        super(props)
    }
    files = [{
        "name": [
            "status"
        ],
        "value": "1"
    }]
    data = [
        {
            id: '1',
            logName: '用户登录',
            operater: '超级管理员',
            logType: '登录',
            ip: '117.143.144.83',
            message: '后台登录成功',
            recordTime: '2021-08-28 20:57:40',
        },
        {
            id: '1',
            logName: '用户登录',
            operater: '超级管理员',
            logType: '登录',
            ip: '117.143.144.83',
            message: '后台登录成功',
            recordTime: '2021-08-28 20:57:40',
        },
        {
            id: '1',
            logName: '用户登录',
            operater: '超级管理员',
            logType: '登录',
            ip: '117.143.144.83',
            message: '后台登录成功',
            recordTime: '2021-08-28 20:57:40',
        },
        {
            id: '1',
            logName: '用户登录',
            operater: '超级管理员',
            logType: '登录',
            ip: '117.143.144.83',
            message: '后台登录成功',
            recordTime: '2021-08-28 20:57:40',
        },
        {
            id: '1',
            logName: '用户登录',
            operater: '超级管理员',
            logType: '登录',
            ip: '117.143.144.83',
            message: '后台登录成功',
            recordTime: '2021-08-28 20:57:40',
        },
        {
            id: '1',
            logName: '用户登录',
            operater: '超级管理员',
            logType: '登录',
            ip: '117.143.144.83',
            message: '后台登录成功',
            recordTime: '2021-08-28 20:57:40',
        }
    ];
    columns = [
        {
            title: '日志名称',
            dataIndex: 'logName',
            key: 'logName',
        },
        {
            title: '操作人',
            dataIndex: 'operater',
            key: 'operater',
        },
        {
            title: '日志类型',
            dataIndex: 'logType',
            key: 'logType',
        },
        {
            title: 'IP地址',
            key: 'ip',
            dataIndex: 'ip',
        },
        {
            title: '日志消息',
            key: 'message',
            dataIndex: 'message',
        },
        {
            title: '记录时间',
            key: 'recordTime',
            dataIndex: 'recordTime',
        },
        {
            title: '操作',
            key: 'operate',
            dataIndex: 'operate',
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
            <Card title="行为日志">
                <Form fields={this.files} name="userRoleForm" layout="inline" onFinish={this.onFinish}>
                    <Form.Item name="status" label="状态">
                        <Select
                            style={{
                                width: 80,
                                margin: '0 8px',
                            }}
                        >
                            <Option value="1">全部</Option>
                            <Option value="2">冻结</Option>
                            <Option value="3">业务</Option>
                            <Option value="4">系统</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="logName" label="日志名称">
                        <Input placeholder="请输入日志名称" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            查询
                        </Button>
                    </Form.Item>
                    <div className='rightBtnGroup'>
                        <Button>清空日志</Button>
                    </div>
                </Form>
                <Table rowSelection={rowSelection} dataSource={this.data} columns={this.columns}  size="small" />
            </Card>
        )
    }

}

export default SysActionLog