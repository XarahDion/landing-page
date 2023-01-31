import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo'

const Footer = () => {
    return (
        <Main>
            <Heading>
                <Text>Let's Build Something amazing together. Today.</Text>
            </Heading>
            <BtnDiv>
                <BtnTxt>Request Early Access</BtnTxt>
            </BtnDiv>
            <Links>
                <Div>
                    <Logo alt="logo" />
                    <Address>
                        Julianalini G29 715 IT Lontana, <br /> All Rights
                        Reserved
                    </Address>
                </Div>
                <Div>
                    <Title>Links</Title>
                    <LinksText>References</LinksText>
                    <LinksText>Social Media</LinksText>
                    <LinksText>Partners</LinksText>
                    <LinksText>Contact</LinksText>
                </Div>
                <Div>
                    <Title>Company</Title>
                    <LinksText>Terms & Conditions </LinksText>
                    <LinksText>Privacy Policy</LinksText>
                    <LinksText>Contact</LinksText>
                </Div>
                <Div>
                    <Title>Get in touch</Title>
                    <LinksText>Julianalini G29 715 IT Lontana</LinksText>
                    <LinksText>052-123456</LinksText>
                    <LinksText>info@company.com</LinksText>
                </Div>
            </Links>
            <Copyright>
                <LinksText>@2021 Company. All rights reserved.</LinksText>
            </Copyright>
        </Main>
    )
}

const LinksText = styled.p`
    font-size: 12px;
    line-height: 15px;
    color: #fff;
    margin: 0.5rem 0;
    cursor: pointer;
    :last-child {
        cursor: default;
        margin-bottom: 2rem;
    }
`
const Title = styled.h4`
    font-size: 14px;
    line-height: 17px;
    font-weight: 800;
    color: var(--color-subtext);
    margin-bottom: 0.9rem;
`
const Copyright = styled.div`
    margin-top: 2rem;
    text-align: center;
    width: 100%;
`
const Div = styled.div`
    width: 250px;
    margin: 1rem;
    color: #fff;
    @media screen and (max-width: 550px) {
        margin: 0;
    }
`
const Address = styled.p`
    font-size: 12px;
    line-height: 15px;
    color: #fff;
`
const Links = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    text-align: left;
`
const BtnTxt = styled.p`
    font-size: 18px;
    font-family: var(--font-family);
    line-height: 21px;
    color: #fff;
    word-spacing: 2px;
    @media screen and (max-width: 550px) {
        font-size: 14px;
        line-height: 20px;
    }
`
const BtnDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: 1px solid #fff;
    text-align: center;
    margin-bottom: 6rem;
    cursor: pointer;
`
const Text = styled.h1`
    font-weight: 800;
    font-size: 64px;
    line-height: 75px;
    background: var(--gradient-text);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media screen and (max-width: 850px) {
        font-size: 44px;
        line-height: 50px;
    }
    @media screen and (max-width: 550px) {
        font-size: 34px;
        line-height: 42px;
    }
    @media screen and (max-width: 400px) {
        font-size: 27px;
        line-height: 38px;
    }
`
const Heading = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 3rem;
`
const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--color-footer);
    font-family: var(--font-family);
    padding: 0rem 6rem;
`

export default Footer
