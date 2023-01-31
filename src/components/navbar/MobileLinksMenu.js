import React from 'react'
import styled from 'styled-components'

const MobileLinksMenu = () => {
    return (
        <MenuContainer>
            <ContainerLinks>
                <Item>
                    <a href="#home">Home</a>
                </Item>
                <Item>
                    <a href="#company">What is Company?</a>
                </Item>
                <Item>
                    <a href="#features">Case Studies</a>
                </Item>
                <Item>
                    <a href="#products">Products</a>
                </Item>
                <Item>
                    <a href="#getStarted">Get Started</a>
                </Item>
            </ContainerLinks>
            <SignIn>
                <Item>Sign in</Item>
                <Button>Sign Up</Button>
            </SignIn>
        </MenuContainer>
    )
}

const Button = styled.button`
    padding: 0.5rem 1rem;
    color: #fff;
    background: var(--color-button);
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
`
const SignIn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    display: none;
    @media screen and (max-width: 550px) {
        display: block;
    }
`
const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    text-align: end;
    background: var(--color-footer);
    padding: 2rem;
    position: absolute;
    right: 0;
    top: 40px;
    margin-top: 1rem;
    min-width: 210px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
        both;
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    @-webkit-keyframes scale-up-center {
        0% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
    @keyframes scale-up-center {
        0% {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
    @media screen and (max-width: 550px) {
        top: 20px;
    }
`
const Item = styled.p`
    color: #fff;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-transform: capitalize;
    margin: 1 0rem;
    cursor: pointer;
`
const ContainerLinks = styled.div`
    display: flex;
    flex-direction: column;
`
export default MobileLinksMenu
