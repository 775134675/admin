import React ,{useState}from 'react';
import { Form, Input, Button, Card ,Select} from 'antd';
const { Option } = Select;
function SysUser(props) {

    const statusOptions = [
        { value: "true", label: "正常" },
        { value: "false", label: "冻结" },
    ]
    const  [currency]= useState("true");
    const onFinish = (values) => {
        console.log('Received values from form: ', values);
    };

    return (
        <Card title="用户管理">
            <Form name="userForm" layout="inline" onFinish={onFinish}>  
                <Form.Item name="status" label="状态">
                    <Select options={statusOptions} value={currency}
                        style={{
                        width: 80,
                        margin: '0 8px',
                        }}
                    >
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
                    <Input />
                </Form.Item>
                <Form.Item name="userNickname" label="用户昵称">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        查询
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default SysUser