import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 20px 16px;
    font-size: 20px;
    border-width: 0;
    border-radius: 8px;
    cursor: pointer;
    background : rgb(119, 52, 235);
    color: #fff;
    width: 100%;
    margin-bottom: 30px;
`;


function Button(props){
     
    const {title, onClick} = props;
     
    return(
        <StyledButton onClick={onClick}>{title}</StyledButton>
    );
}

export default Button;