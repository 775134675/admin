import React, { useState, Component } from 'react';
import { Form, Input, Button, Card, Select, Table, Tag, Space } from 'antd';

import './index.css'
const { Option } = Select;

class SysDict extends Component {

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
            identification: 'USER_SEX',
            title: '用户性别',
            type: '键值对',
            value: '1:男,2:女',
            createTime: '2021-03-06 20:08:05',
            updateTime: '2018-10-05 20:12:32',
        },
        {
            id: '1',
            identification: 'USER_SEX',
            title: '用户性别',
            type: '键值对',
            value: '1:男,2:女',
            createTime: '2021-03-06 20:08:05',
            updateTime: '2018-10-05 20:12:32',
        },
        {
            id: '1',
            identification: 'USER_SEX',
            title: '用户性别',
            type: '键值对',
            value: '1:男,2:女',
            createTime: '2021-03-06 20:08:05',
            updateTime: '2018-10-05 20:12:32',
        },
        {
            id: '1',
            identification: 'USER_SEX',
            title: '用户性别',
            type: '键值对',
            value: '1:男,2:女',
            createTime: '2021-03-06 20:08:05',
            updateTime: '2018-10-05 20:12:32',
        },
        {
            id: '1',
            identification: 'USER_SEX',
            title: '用户性别',
            type: '键值对',
            value: '1:男,2:女',
            createTime: '2021-03-06 20:08:05',
            updateTime: '2018-10-05 20:12:32',
        },
        {
            id: '1',
            identification: 'USER_SEX',
            title: '用户性别',
            type: '键值对',
            value: '1:男,2:女',
            createTime: '2021-03-06 20:08:05',
            updateTime: '2018-10-05 20:12:32',
        }
    ];
    columns = [
        {
            title: '字典标识',
            dataIndex: 'identification',
            key: 'identification',
        },
        {
            title: '字典标题',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: '字典类型',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: '字典值',
            key: 'value',
            dataIndex: 'value',
        },
        {
            title: '创建时间',
            key: 'createTime',
            dataIndex: 'createTime',
        },
        {
            title: '更新时间',
            key: 'updateTime',
            dataIndex: 'updateTime',
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
            <Card title="角色管理">
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

                    <Form.Item name="identification" label="字典标识">
                        <Input placeholder="请输入字典标识" />
                    </Form.Item>
                    <Form.Item name="title" label="字典标题">
                        <Input placeholder="请输入字典标题" />
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

                <Table rowSelection={rowSelection} dataSource={this.data} columns={this.columns}  size="small"/>
            </Card>
        )
    }

}

export default SysDict
