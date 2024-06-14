import React from 'react';

import Button from '../ui/Button';
import PostList from '../list/PostList';

import data from '../../data.json';

import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

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

function MainPage(){

    const navigate = useNavigate();

    return(
     <Wrapper>
        <Container>
            <Button title="글 작성 하기" onClick={()=>{navigate('/post-write')}}></Button>
            <PostList posts={data}></PostList>
        </Container>
     </Wrapper>
    );
}

export default MainPage;