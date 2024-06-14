import React, {useState, useEffect} from 'react';

import Button from '../ui/Button';
import PostList from '../list/PostList';

// import data from '../../data.json';

import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

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
`;

function MainPage(){

    const navigate = useNavigate();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const fetchData = async() =>{
            try{
                setError(null);
                setData(null);
                setLoading(true);

                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts');
                setData(response.data);
            } 
            catch(error){
                setError(error);
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    if(loading) return <div>로딩중...</div>
    if(error)   return <div>에러가 발생했습니다.</div>
    if(!data)   return null;

    return(
     <Wrapper>
        <Container>
            <Button title="글 작성 하기" onClick={()=>{navigate("/post-write")}}></Button>
            <PostList posts={data}></PostList>
        </Container>
     </Wrapper>
    );
}

export default MainPage;