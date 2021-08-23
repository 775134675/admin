import React from 'react'
import {Form,Card, Button,Input,message,Row, Col } from 'antd'
import './index.css'
function index() {
    return (
        <Card title="主页">
            <Row  gutter={16}>
                <Col xs={24} sm={24} md={12} lg={6}>
                    <Row>
                        <Col span={9}>
                            <div class='leftIcon' style={{background:'#029789'}}>
                                用户图标
                            </div>
                        </Col>
                        <Col span={15}>
                            <div class='mainRight'>
                                <div>用户</div>
                                <div>12</div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6}>
                    <Row>
                        <Col span={9}>
                            <div class='leftIcon' style={{background:'#17a2b8'}}>
                                访问图标
                            </div>
                        </Col>
                        <Col span={15}>
                            <div class='mainRight'>
                                <div>访问</div>
                                <div>1,200</div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6}>
                    <Row>
                        <Col span={9}>
                            <div class='leftIcon' style={{background:'#fbad4c'}}>
                                信息图标
                            </div>
                        </Col>
                        <Col span={15}>
                            <div class='mainRight'>
                                <div>信息</div>
                                <div>41</div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6}>
                    <Row>
                        <Col span={9}>
                            <div class='leftIcon' style={{background:'#ff646d'}}>
                                收藏图标
                            </div>
                        </Col>
                        <Col span={15}>
                            <div class='mainRight'>
                                <div>收藏</div>
                                <div>306</div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}

export default index
