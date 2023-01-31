import React from 'react'
import styled from 'styled-components'
import google from '../assets/google.png'
import slack from '../assets/slack.png'
import atlassian from '../assets/atlassian.png'
import shopify from '../assets/shopify.png'
import dropbox from '../assets/dropbox.png'

const Brand = () => {
    return (
        <Main>
            <Div>
                <img src={google} alt="google" />
            </Div>
            <Div>
                <img src={slack} alt="slack" />
            </Div>
            <Div>
                <img src={atlassian} alt="atlassian" />
            </Div>
            <Div>
                <img src={dropbox} alt="dropbox" />
            </Div>
            <Div>
                <img src={shopify} alt="shopify" />
            </Div>
        </Main>
    )
}

const Div = styled.div`
    flex: 1;
    max-width: 150px;
    min-width: 120px;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 4rem 6rem;
    @media screen and (max-width: 850px) {
        padding: 2rem;
    }
`

export default Brand
