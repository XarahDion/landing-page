import React from 'react'
import styled from 'styled-components'

const CTA = () => {
    return (
        <Main id="getStarted">
            <Container>
                <Text>Request Early Access to Get Started</Text>
                <SubText>
                    Register Today & start exploring the endless possibilities.
                </SubText>
            </Container>
            <BtnDiv>
                <Button type="button">Get Started</Button>
            </BtnDiv>
        </Main>
    )
}

const Button = styled.button`
    background: #000;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    border: none;
    outline: none;
    cursor: pointer;
    min-width: 150px;
    @media screen and (max-width: 550px) {
        font-size: 14px;
        line-height: 28px;
    }
`
const BtnDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
    @media screen and (max-width: 650px) {
        margin: 2rem 0 0;
    }
`
const SubText = styled.h3`
    font-size: 24px;
    line-height: 45px;
    font-weight: 800;
    @media screen and (max-width: 550px) {
        font-size: 18px;
        line-height: 32px;
    }
`
const Text = styled.p`
    font-size: 12px;
    line-height: 30px;
    font-weight: 500;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`
const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 2rem 6rem;
    margin: 4rem;
    border-radius: 1rem;
    background: var(--gradient-bar);
    font-family: var(--font-family);
    @media screen and (max-width: 850px) {
        padding: 2rem;
    }
    @media screen and (max-width: 650px) {
        flex-direction: column;
    }
    @media screen and (max-width: 550px) {
        flex-direction: column;
        margin: 4rem 2rem;
    }
`

export default CTA
