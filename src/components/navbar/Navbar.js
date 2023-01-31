import React, {useState} from 'react'
import styled from 'styled-components'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import Logo from '../../assets/logo'
import DesktopLinksMenu from './DesktopLinksMenu'
import MobileLinksMenu from './MobileLinksMenu'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <MainNav>
            <Links>
                <LogoDiv>
                    <Logo alt="logo" />
                </LogoDiv>
                <DesktopLinksMenu />
            </Links>
            <SignIn>
                <Item>Sign in</Item>
                <Button>Sign Up</Button>
            </SignIn>
            <NavbarMenu>
                {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && <MobileLinksMenu />}
            </NavbarMenu>
        </MainNav>
    )
};

const NavbarMenu = styled.div`
    margin-left: 1rem;
    display: none;
    position: relative;
    @media screen and (max-width: 1050px) {
        display: flex;
        flex-direction: column;
    }
`
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
    justify-content: flex-end;
    align-items: center;
    @media screen and (max-width: 550px) {
        display: none;
    }
`
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
const LogoDiv = styled.div`
    margin-right: 2rem;
`
const Links = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const MainNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 6rem;
    @media screen and (max-width: 700px) {
            padding: 2rem 4rem;
    }
    @media screen and (max-width: 550px) {
            padding: 2rem;
    }
`
export default Navbar
