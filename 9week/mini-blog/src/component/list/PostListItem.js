import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width : calc(100% - 32px);
    padding : 16px;
    display : flex;
    flex-direction : flex-start;
    justify-content : center;
    border : 1px solid grey;
    border-radius : 8px;
    cursor : pointer;
    :hover{
        background : ligthgrey;
    }
`;

const TitleText = styled.p`
    font-size : 20px;
    font-weight : 500;
`

function PostListItem(props){

    const {post} = props;

    return(
        <Wrapper>
            <TitleText>{post.title}</TitleText>
        </Wrapper>
    );
}

export default PostListItem;