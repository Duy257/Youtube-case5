import React from 'react';
import Card from './Card';
import styled from 'styled-components';
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap
`;

const Home = () => {
    return (
        <Container>
            <Card />
        </Container>
    )
}

export default Home;