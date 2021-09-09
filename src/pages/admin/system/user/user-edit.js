import React, { Component } from 'react'
import { Form, Input, Button, Card, Select, Table, Tag, Space,Modal } from 'antd';


export class UserEdit extends Component {
    constructor(props){
        super(props);
    }


    // showModal = () => {
    //     setIsModalVisible(true);
    //   };
    
    // handleOk = () => {
    //     setIsModalVisible(false);
    //   };
    
    // handleCancel = () => {
    //     setIsModalVisible(false);
    //   };

    render() {
        return (
                <Modal title="Basic Modal" visible={this.props.isModalVisible}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
        )
    }
}

export default UserEdit
