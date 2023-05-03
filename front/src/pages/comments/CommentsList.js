import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LayoutBody from '../../components/Layout/LayoutBody'
import { Table } from 'antd';
import axios from 'axios'


import { Typography } from 'antd';
const { Title, Paragraph } = Typography;

const CommentsList = (props) => {
    const params = useParams()
    const [data, setData] = useState([])


    useEffect(() => {
        var config = {
            method: 'get',
            url: 'http://localhost:5000/'+params.name,
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            setData(response.data.result);
          })
          .catch(function (error) {
            console.log(error);
          });         
    }, []);


    const columns = [
        {
            title: 'Usuário',
            dataIndex: 'nameUser',
            key: 'nameUser',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Comentário',
            dataIndex: 'commentText',
            key: 'commentText',
        },
        
    ]


    return (
        <>
            <LayoutBody>
                {/* <h1>{params.name}</h1> */}

                <Title>Comentários - User: {params.name}</Title>
                <Paragraph>
                    Lorem ipsum dolor sit amet. In magni exercitationem ea quis rerum ut neque voluptas sed voluptatem
                    voluptatem. Et velit fugiat sed perferendis distinctio ut maiores quia et vitae quia. Vel eaque quia
                    aut esse maiores qui deleniti nostrum eos natus reprehenderit.
                </Paragraph>
                <hr></hr>

                <Table
                dataSource={data}
                columns={columns}
                />
            </LayoutBody>
        </>
    );
}

export default CommentsList;
