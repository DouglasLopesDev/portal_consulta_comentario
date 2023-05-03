import { Layout, Menu } from 'antd';
import {
    BulbOutlined
} from '@ant-design/icons';
import React from 'react';
import './LayoutBody.css';
import { OmitProps } from 'antd/lib/transfer/ListBody';

const { Header, Footer, Content } = Layout;

const LayoutBody = (props) => {

    return (
        <Layout style={{
            backgroundColor: '#2a1e4970'
        }}>
            <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(BulbOutlined, {
                    className: "header"
                })}
            </Header>

            <Layout>
                <Content
                    className='site-layout-background'
                    style={{
                        margin: '24px 40px',
                        padding: 24,
                        minHeight: 400,
                        backgroundColor: 'white'
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
            <Footer style={{ backgroundColor: '#96938c', padding: 24, textAlign: 'center' }}>Avaliação DEV</Footer>

        </Layout>
    );
}
export default LayoutBody;