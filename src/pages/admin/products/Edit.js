import React,{useState}from 'react'
import {Form,Card, Button,Input,message} from 'antd'
function Edit(props) {
    const [initaaa, setInitaaa] = useState('');
    const onFinish = (values) => {
        // console.log('Received values from form: ', values);
        let text = JSON.stringify(values)
        message.success(text)
      };

    const validateMessages = {
        required: '请输入${label}!',
      };
    return (
        <Card title="商品编辑">
            <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
                name= 'name'
                label="名称"
                rules={[
                {
                    required: true,
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name='price'
                label="价格"
                rules={[
                {
                    required: true,
                },
                ]}
            >
                <Input />
            </Form.Item>
            {initaaa}
            <Form.Item>
                <Button type="primary" htmlType="submit">
                保存
                </Button>
            </Form.Item>
            </Form>

        </Card>
    )
}

export default Edit
