import React from 'react'
import styled from 'styled-components'
import Feature from './Feature'

const Company = () => {
    return (
        <Main id="company">
            <TopFeature>
                <ModFeature
                    title="What is Company"
                    text="Unlock your full potential with our cutting-edge solutions. Experience the future of technology today and make your vision a reality. Embrace progress and join us on this exciting journey towards a better tomorrow. Make it happen with our company."
                />
            </TopFeature>
            <Heading>
                <MainText>
                    Let's Build Something amazing together. Today.
                </MainText>
                <Subtext>Explore the Library</Subtext>
            </Heading>
            <Container>
                <Feature
                    title="Values"
                    text="Elevate your business to new heights with our innovative solutions. Join us in embracing progress and create a brighter future. "
                />
                <Feature
                    title="Results"
                    text="Explore the limitless possibilities of the future and bring your dreams to life. Join us in embracing progress and create a brighter future. "
                />
                <Feature
                    title="Education"
                    text="At our core, we believe that great solutions stem from great ideas. That's why we invest in education and knowledge-sharing to bring the best insights to our clients. "
                />
            </Container>
        </Main>
    )
}

const ModFeature = styled(Feature)`
    flex-direction: row;
    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    flex: 1;
    margin: 1rem;
    min-width: 210px;
    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`
const MainText = styled.h1`
    background: var(--gradient-text);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 34px;
    line-height: 45px;
    font-weight: 800;
    max-width: 510px;
    @media screen and (max-width: 650px) {
        font-size: 28px;
        line-height: 40px;
    }
`
const Subtext = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: var(--color-subtext);
    cursor: pointer;
    @media screen and (max-width: 850px) {
        margin-top: 1rem;
    }
`
const Heading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0 2rem;
    @media screen and (max-width: 850px) {
        flex-direction: column;
        align-items: flex-start;
        margin: 1rem 2rem;
    }
`
const TopFeature = styled.div`
    display: flex;
    margin: 1rem;
`
const Main = styled.div`
    margin: 6rem 6rem 4rem 6rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    font-family: var(--font-family);
    background: -moz-radial-gradient(
        circle at 17% 21%,
        rgba(37, 12, 70, 1) 0%,
        rgba(37, 12, 70, 1) 50%,
        rgba(32, 41, 93, 1) 99%
    );
    background: -webkit-radial-gradient(
        circle at 17% 21%,
        rgba(37, 12, 70, 1) 0%,
        rgba(37, 12, 70, 1) 50%,
        rgba(32, 41, 93, 1) 99%
    );
    background: -o-radial-gradient(
        circle at 17% 21%,
        rgba(37, 12, 70, 1) 0%,
        rgba(37, 12, 70, 1) 50%,
        rgba(32, 41, 93, 1) 99%
    );
    background: -ms-radial-gradient(
        circle at 17% 21%,
        rgba(37, 12, 70, 1) 0%,
        rgba(37, 12, 70, 1) 50%,
        rgba(32, 41, 93, 1) 99%
    );
    background: radial-gradient(
        circle at 17% 21%,
        rgba(37, 12, 70, 1) 0%,
        rgba(37, 12, 70, 1) 50%,
        rgba(32, 41, 93, 1) 99%
    );
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    @media screen and (max-width: 850px) {
        margin: 1rem 2rem;
        padding: 1rem;
    }
`
export default Company
