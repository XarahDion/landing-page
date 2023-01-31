import React from 'react'
import styled from 'styled-components'

const Feature = ({ title, text, className }) => {
    return (
        <Main className={className}>
            <TitleDiv>
                <Div></Div>
                <Title>{title}</Title>
            </TitleDiv>
            <TextDiv>
                <Text>{text}</Text>
            </TextDiv>
        </Main>
    )
}

const Div = styled.div`
    width: 42px;
    height: 5px;
    background: var(--gradient-bar);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 0.25rem;
`
const Text = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-text);
    @media screen and (max-width: 550px) {
        font-size: 12px;
        line-height: 20px;
    }
`
const TextDiv = styled.div`
    flex: 2;
    max-width: 620px;
    display: flex;
`
const Title = styled.h1`
    font-weight: 800;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.04em;
    color: #fff;
    @media screen and (max-width: 550px) {
        font-size: 14px;
        line-height: 22px;
    }
`
const TitleDiv = styled.div`
    flex: 1;
    max-width: 180px;
    margin-right: 2rem;
`
const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin: 1rem;
    @media screen and (max-width: 550px) {
        margin: 1rem 0;
    }
    @media screen and (max-width: 350px) {
        min-width: 100%;
    }
`
export default Feature
