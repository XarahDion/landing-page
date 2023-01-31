import React from 'react'
import styled from 'styled-components'
import people from '../assets/people.png'
import stanos from '../assets/stanos.png'

const Header = () => {
    return (
        <Main id="home">
            <Container>
                <MainText>
                    Let's Build Something amazing together. Today.
                </MainText>
                <SubText>
                    Unlock your full potential with our cutting-edge solutions.
                    Experience the future of technology today and make your
                    vision a reality. Embrace progress and join us on this
                    exciting journey towards a better tomorrow. Make it happen.
                </SubText>
                <InputDiv>
                    <Input type="email" placeholder="Your Email Address" />
                    <Button type="button">Get Started</Button>
                </InputDiv>
                <People>
                    <PeopleImg src={people} alt="people" />
                    <PeopleP>
                        1,200 people requested access a visit in last 24 hours
                    </PeopleP>
                </People>
            </Container>
            <ImgContainer>
                <a href='https://unsplash.com/fr/@stan_remnev' target='__blank'><HeaderImg src={stanos} alt="stanos" /></a>
            </ImgContainer>
        </Main>
    )
}

const HeaderImg = styled.img`
    max-width: 70%;
    max-height: 70%;
    width: auto;
    height: auto;
`
const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`
const PeopleP = styled.p`
    margin: 0 0 0 1rem;
    font-weight: 500;
    font-size: 12px;
    line-height: 38px;
    color: #fff;
    text-align: center;
    @media screen and (max-width: 1000px) {
        margin: 0;
    }
`
const PeopleImg = styled.img`
    width: 182px;
    height: 38px;
`
const People = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin-top: 2rem;
    @media screen and (max-width: 1280px) {
        flex-direction: column;
    }
`
const Button = styled.button`
    flex: 0.6;
    width: 100%;
    min-height: 50px;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    background: var(--color-button);
    border: 2px solid var(--color-button);
    padding: 0 1rem;
    color: #fff;
    cursor: pointer;
    outline: none;
    border-radius: 0px 5px 5px 0px;
    @media screen and (max-width: 650px) {
        font-size: 16px;
        line-height: 24px;
    }
    @media screen and (max-width: 490px) {
        font-size: 12px;
        line-height: 16px;
    }
`
const Input = styled.input`
    flex: 2;
    width: 100%;
    min-height: 50px;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    background: #372042;
    border: 2px solid #372042;
    padding: 0 1rem;
    outline: none;
    color: #fff;
    border-radius: 5px 0px 0px 5px;
    @media screen and (max-width: 650px) {
        font-size: 16px;
        line-height: 24px;
    }
    @media screen and (max-width: 490px) {
        font-size: 12px;
        line-height: 16px;
    }
`
const InputDiv = styled.div`
    width: 100%;
    margin: 2rem 0 1rem;
    display: flex;
    flex-direction: row;
`
const SubText = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: var(--color-text);
    margin-top: 1.5rem;
    @media screen and (max-width: 650px) {
        font-size: 16px;
        line-height: 24px;
    }
    @media screen and (max-width: 490px) {
        font-size: 14px;
        line-height: 24px;
    }
`
const MainText = styled.h1`
    background: var(--gradient-text);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    font-size: 62px;
    line-height: 75px;
    letter-spacing: -0.04em;
    @media screen and (max-width: 650px) {
        font-size: 48px;
        line-height: 60px;
    }
    @media screen and (max-width: 490px) {
        font-size: 36px;
        line-height: 48px;
    }
`
const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin: 4rem 4rem 0rem 4rem;
    @media screen and (max-width: 1050px) {
        margin: 0 0 3rem;
    }
`
const Main = styled.div`
    font-family: var(--font-family);
    display: flex;
    flex-direction: row;
    padding: 0rem 6rem;
    @media screen and (max-width: 700px) {
        padding: 0rem 4rem;
    }
    @media screen and (max-width: 490px) {
        padding: 0 2rem;
    }
    @media screen and (max-width: 1050px) {
        flex-direction: column;
    }
`
export default Header
