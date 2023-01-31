import React from 'react'
import styled from 'styled-components'
import stanos from '../assets/stanos.png'

const Products = () => {
    return (
        <Main id="products">
            <ImgDiv>
                <Img src={stanos} alt="stanos" />
            </ImgDiv>
            <Container>
                <Title>Request Early Access to Get Started</Title>
                <Subtitle>
                    Let's Build Something amazing <br /> together. Today.
                </Subtitle>
                <Text>
                    Unlock your full potential with our cutting-edge solutions.
                    Experience the future of technology today and make your
                    vision a reality. Embrace progress and join us on this
                    exciting journey towards a better tomorrow. Make it happen.
                </Text>
                <Title>Request Early Access to Get Started</Title>
            </Container>
        </Main>
    )
}

const Text = styled.p`
    color: var(--color-text);
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 2rem;
`
const Subtitle = styled.h1`
    font-weight: 800;
    font-size: 34px;
    line-height: 45px;
    margin: 1rem 0;
    background: var(--gradient-text);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const Title = styled.h4`
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #9b55c5;
    :last-child {
        color: var(--color-subtext);
    }
`
const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
    @media screen and (max-width: 950px) {
        margin-top: 2rem;
    }
`
const Img = styled.img`
    width: auto;
    height: auto;
    max-width: 60%;
    max-height: 60%;
    @media screen and (max-width: 950px) {
        width: unset;
        height: unset;
    }
    @media screen and (max-width: 700px) {
        width: 100%;
        height: 100%;
    }
`
const ImgDiv = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
    @media screen and (max-width: 950px) {
        margin: 1rem 0;
    }
`

const Main = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: var(--font-family);
    padding: 0rem 6rem;
    @media screen and (max-width: 950px) {
        flex-direction: column;
        padding: 0rem 4rem;
    }
`

export default Products
