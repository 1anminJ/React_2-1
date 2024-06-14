import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
    padding : 20px 16px;
    font-size : 20px;
    border-width : 0;
    border-radius : 8px;
    cursor : pointer;
    background : rgb(119, 52, 253);
    color : #fff;
    width : 100%;
    margin-bottom : 30px;
`;

function Button(props){

    return(
        <StyledButton>글 작성 하기</StyledButton>
    );
}

export default Button;