import React from 'react';

import styled from 'styled-components';

import PostListItem from './PostListItem';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-item: flex-start;
    justify-content: center;

    :not(last-child){
        margin-bottom: 16px;
    }
`;

function PostList(props){

    const {posts} = props;
    return(
        <Wrapper>
            {posts.map((post, index)=>{
                return(
                    <PostListItem key={post.id} post={post}></PostListItem>
                )
            })};
        </Wrapper>

    );
}


export default PostList;