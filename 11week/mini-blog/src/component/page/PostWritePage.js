import React, {useState} from 'react';

import {useNavigate} from 'react-router-dom';

import styled from 'styled-components';


import Button from '../ui/Button';
import TextInput from '../ui/TextInput';

import axios from 'axios';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-item: flex-start;
    justify-content: center;
    
    padding: 16px;
    width: calc(100%-32px);
`;

const Container = styled.div`
    width: 100%;

    :not(last-child){
        margin-bottom: 16px;
    }
`;

function PostWritePage(){
  
    //useNavigate() : 페이지 이동을 위해서 react-router-dom에서 제공하는 훅 
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const fetchData = async() =>{
        try{
            const response = await axios.post(
                'https://jsonplaceholder.typicode.com/posts',{
                    title : title,
                    body : content,
                    userId : 200
                })
                console.log(response.data);
        } catch(error){
            console.error(error);
        }
    }

    return(
        <Wrapper>
            <Container>
                <TextInput height={20} value={title} onChange={(event)=>{setTitle(event.target.value)}}></TextInput>
                <TextInput height={480} value={content} onChange={(event)=>{setContent(event.target.value)}}></TextInput>
                <Button title="글 작성하기" onClick={()=>{fetchData(); navigate('/')}}></Button>
            </Container>
        </Wrapper>

    );
}

export default PostWritePage;