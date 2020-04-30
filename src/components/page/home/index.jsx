import React from 'react';
import withChildFunction from '../../hoc';
import HeaderCard from './headerCard';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    background: linear-gradient(92.45deg, #011A1E 1.93%, #042026 98.88%);
`;

const Home = () => {
    return (
        <Container>
            <HeaderCard />
        </Container>
    )
}

export default withChildFunction()(Home);