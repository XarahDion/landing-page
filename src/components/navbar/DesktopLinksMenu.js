import React from 'react'
import styled from 'styled-components'

const DesktopLinksMenu = () => {
    return (
        <Container>
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
        </Container>
    )
};

const Item = styled.p`
    color: #fff;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-transform: capitalize;
    margin: 0 1rem;
    cursor: pointer;
`
const Container = styled.div`
    display: flex;
    @media screen and (max-width: 1050px) {
        display: none;
}
`
export default DesktopLinksMenu
