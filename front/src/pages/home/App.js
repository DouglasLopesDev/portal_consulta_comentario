import './App.css';
import LayoutBody from '../../components/Layout/LayoutBody'
import { Link, NavLink} from 'react-router-dom';


import { Row, Typography, Form, Input, Button, Alert } from 'antd';
import React, {useState} from 'react';

const { Title, Paragraph } = Typography;

const App = (props) => {

  const [name, setName] = useState('')

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <LayoutBody>
        <Row>
          <Title>Bem-vindo ao teste</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet. In magni exercitationem ea quis rerum ut neque voluptas sed voluptatem
            voluptatem. Et velit fugiat sed perferendis distinctio ut maiores quia et vitae quia. Vel eaque quia
            aut esse maiores qui deleniti nostrum eos natus reprehenderit. Quo necessitatibus accusamus ut
            incidunt omnis qui quod reiciendis in architecto autem sit consequatur iusto sed perferendis nostrum
            aut officiis tempore!
          </Paragraph>
        </Row>
        <hr></hr>
        <hr></hr>
        <Row>
          <Form
            name="basic"
            labelCol={{ span: 16 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Nome"
              name="name"
              rules={[{ required: true, message: 'Digite um nome!' }]}
            >
              <Input id='name_id' onChange={event => setName(event.target.value)}/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                <Link to={"/name=" + name}>Consultar</Link>
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </LayoutBody>
      
    </>
  );
}

export default App;

