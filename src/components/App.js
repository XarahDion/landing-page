import React from 'react'
import styled from 'styled-components'
import GlobalStyles from '../GlobalStyles'
import Footer from './Footer'
import Products from './Products'
import Features from './Features'
import Company from './Company'
import Header from './Header'
import CTA from './CTA'
import Navbar from './navbar/Navbar'

const App = () => {
    return (
        <Main>
            <GlobalStyles />
            <Container>
                <Navbar />
                <Header />
            </Container>
            <Company />
            <Features />
            <Products />
            <CTA />
            <Footer />
        </Main>
    )
}

const Main = styled.div``

const Container = styled.div`
    background: -moz-radial-gradient(
        circle at 4% 25%,
        rgba(38, 18, 50, 1) 0%,
        rgba(4, 6, 23, 1) 99%
    );
    background: -webkit-radial-gradient(
        circle at 4% 25%,
        rgba(38, 18, 50, 1) 0%,
        rgba(4, 6, 23, 1) 99%
    );
    background: -o-radial-gradient(
        circle at 4% 25%,
        rgba(38, 18, 50, 1) 0%,
        rgba(4, 6, 23, 1) 99%
    );
    background: -ms-radial-gradient(
        circle at 4% 25%,
        rgba(38, 18, 50, 1) 0%,
        rgba(4, 6, 23, 1) 99%
    );
    background: radial-gradient(
        circle at 4% 25%,
        rgba(38, 18, 50, 1) 0%,
        rgba(4, 6, 23, 1) 99%
    );
`
export default App
