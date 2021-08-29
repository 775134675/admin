import React from 'react'
import {Button, Card,Table} from "antd"
const dataSource=[
    {
        id:1,
        name:'牙刷',
        price:5
    },
    {
        id:2,
        name:'特仑苏',
        price:5
    },
    {
        id:3,
        name:'金南京',
        price:22
    },
    {
        id:4,
        name:'小浣熊',
        price:1.5
    }
]
function List(props) {
    const columns=[
        {
            title:'序号',
            key:'id',
            width:80,
            align:'center',
            render:(text,record,index)=>{
                return index+1
            }
        },
        {
            title:'名称',
            dataIndex:'name'
        },
        {
            title:'价格',
            dataIndex:'price'
        },
        {
            title:'操作',
            render:(txt,record,index)=>{
                return (<div>
                    <Button type='primary' size='small'>修改</Button>
                    <Button style={{margin:'0 1rem'} } type='danger' size='small'>删除</Button>
                </div>)
            }
        }
    ]
    return (
        <Card title="商品列表" extra={
            <Button type='primary' size='small' onClick={()=>{props.history.push("/admin/products/edit")}}>新增</Button>
        }>
            <Table rowKey='id' columns={columns} bordered dataSource = {dataSource}  size="small">
                
            </Table>
        </Card>
    )
}

export default List
