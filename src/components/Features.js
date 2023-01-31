import React from 'react'
import styled from 'styled-components'
import Feature from './Feature'
import { featuresData } from '../assets/data'

const Features = () => {
    return (
        <Main id="features">
            <Heading>
                <Title>
                    We deliver the best solutions with the best technologies.
                    Step into Future Today. & Make it Happen.
                </Title>
                <Text>Request Early Access to Get Started</Text>
            </Heading>
            <Container>
                {featuresData.map((item, index) => (
                    <ModFeature
                        title={item.title}
                        text={item.text}
                        key={item.title + index}
                    />
                ))}
            </Container>
        </Main>
    )
}

const ModFeature = styled(Feature)`
    flex-direction: row;
`
const Container = styled.div`
    flex: 1.5;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Text = styled.p`
    color: var(--color-subtext);
    font-size: 16px;
    line-height: 30px;
    font-weight: 500;
    font-family: var(--font-family);
    margin-top: 2rem;
`
const Title = styled.h1`
    font-size: 34px;
    line-height: 45px;
    font-weight: 800;
    font-family: var(--font-family);
    background: var(--gradient-text);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media screen and (max-width: 550px) {
        font-size: 28px;
        line-height: 38px;
    }
`
const Heading = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
    margin-right: 5rem;
    @media screen and (max-width: 990px) {
        margin: 0 0 2rem 0;
    }
`
const Main = styled.div`
    font-family: var(--font-family);
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 4rem 6rem;
    @media screen and (max-width: 990px) {
        flex-direction: column;
        padding: 4rem;
    }
`

export default Features
