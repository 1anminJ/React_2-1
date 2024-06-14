import React,{useState} from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import Button from '../ui/Button';
import TextInput from "../ui/TextInput";

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
`;

function PostWritePage(){
    
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return(
        <Wrapper>
            <Container>
                <TextInput height={20} value={title} onChange={(event)=>{setTitle(event.target.value)}}></TextInput>
                <TextInput height={480} value={content} onChange={(event)=>{setContent(event.target.value)}}></TextInput>
                <Button title="글 작성하기" onClick={()=>{navigate('/')}}></Button>
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;