import React from 'react';

import Button from '../ui/Button';
import PostList from '../list/PostList';

import styled from 'styled-components';
import data from '../../data.json';

const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    flex-item : flex-start;
    justify-content : center;
    
    padding : 16px;
    width : calc(100% - 32px);
`;

const Container = styled.div`
    width : 100%;
`;

function MainPage(){

    return(
     <div>
        <Wrapper>
            <Container>
                <Button title="글 작성하기"></Button>
                <PostList posts={data}></PostList>
            </Container>
        </Wrapper>
     </div>
    );
}

export default MainPage;