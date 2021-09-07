import React,{useState ,Component} from 'react'
import {Card,Row, Col,TreeSelect} from 'antd'
import { Form, Input, Button, Select, Table, Tag, Space } from 'antd';
const { Option } = Select;

const { TreeNode } = TreeSelect;
class SysMenu extends Component {
    constructor(props) {
        super(props)
    }
    onChange=(value)=>{
    };
    files = [{
        "name": [
            "status"
        ],
        "value": "true"
    }]
    data = [
        {
            id: '1',
            name: '主页',
            url: '/index',
            jurisdiction: 'index',
            type: '目录',
            status: '正常'
        },
        {
            id: '1',
            name: '主页',
            url: '/index',
            jurisdiction: 'index',
            type: '目录',
            status: '正常'
        },
        {
            id: '1',
            name: '主页',
            url: '/index',
            jurisdiction: 'index',
            type: '目录',
            status: '正常'
        },
        {
            id: '1',
            name: '主页',
            url: '/index',
            jurisdiction: 'index',
            type: '目录',
            status: '正常'
        },
        {
            id: '1',
            name: '主页',
            url: '/index',
            jurisdiction: 'index',
            type: '目录',
            status: '正常'
        },
        {
            id: '1',
            name: '主页',
            url: '/index',
            jurisdiction: 'index',
            type: '目录',
            status: '正常'
        },
        {
            id: '1',
            name: '主页',
            url: '/index',
            jurisdiction: 'index',
            type: '目录',
            status: '正常'
        },
        {
            id: '1',
            name: '主页',
            url: '/index',
            jurisdiction: 'index',
            type: '目录',
            status: '正常'
        }
    ];
    columns = [
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'URL地址',
            dataIndex: 'url',
            key: 'url',
        },
        {
            title: '权限标识',
            dataIndex: 'jurisdiction',
            key: 'jurisdiction',
        },
        {
            title: '菜单类型',
            key: 'type',
            dataIndex: 'type',
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
            width:180,
            render: (text, record) => (
                
                <Space size="middle">
                  <a>编辑{record.id}</a>
                  <a>详情{record.id}</a>
                  <a>删除{record.id}</a>
                </Space>
            ),
        },
    ];
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
        <Card title="菜单管理">
            <Row gutter={16}>
                <Col xs={5} sm={5} md={5} lg={5}>
                    <TreeSelect
                        showSearch={false}
                        style={{ width: '100%' }}
                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                        placeholder="Please select"
                        allowClear
                        treeDefaultExpandAll
                        onChange={this.onChange}
                        >
                        <TreeNode value="parent 1" title="parent 1">
                            <TreeNode value="parent 1-0" title="parent 1-0">
                            <TreeNode value="leaf1" title="leaf1" />
                            <TreeNode value="leaf2" title="leaf2" />
                            </TreeNode>
                            <TreeNode value="parent 1-1" title="parent 1-1">
                            <TreeNode value="leaf3" title={<b style={{ color: '#08c' }}>leaf3</b>} />
                            </TreeNode>
                        </TreeNode>
                    </TreeSelect>
                </Col>
                <Col xs={19} sm={19} md={19} lg={19}>
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

                    <Form.Item name="userName" label="名称">
                        <Input placeholder="请输入名称" />
                    </Form.Item>
                    <Form.Item name="userNickname" label="URL地址">
                        <Input placeholder="请输入URL地址" />
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
                    <Table rowSelection={rowSelection} dataSource={this.data} columns={this.columns}  size="small" />
                </Col>
            </Row>
        </Card>
    )
    }
}

export default SysMenu
