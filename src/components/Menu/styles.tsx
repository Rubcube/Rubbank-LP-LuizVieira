import styled from "styled-components";
import logoicon from '../../assets/img/logo.svg';
import logoicon2 from '../../assets/img/logoroxa.svg';
import menuicon from '../../assets/img/menu.svg'

export const Logo = styled.div`
    width: 15.75em;
    height: 3.5em;
    cursor: pointer;
    background-image: url(${logoicon});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 840px){
        background-image: url(${logoicon2});
    }

    @media screen and (max-width: 465px){
        width: 12.6em;
        height: 2.8em;
    }
`;

export const MenuIcon = styled.div`
    width: 2.9em;
    height: 2em;
    display: none;
    background-image: url(${menuicon});
    align-self: center;

    @media screen and (max-width: 840px){
        display: block;
    }

    @media screen and (max-width: 465px){
        width: 2.3em;
        height: 2em;
    }
`;

export const NavBar = styled.nav`
    position: sticky;
    width: 100vw;
    height: 10vh;
    z-index: 1;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2em;
    gap: 4.25em;

    ul {
        display: flex;
        flex-direction: row;
        gap: 2em;
        list-style: none;
    }

    ul li {
        align-self: flex-end;
        margin-bottom: 5px;
    }

    ul li a{
        font-size: 2em;
        font-weight: 600;
        color: #FFFFFF;
        text-decoration: none;
    }

    @media screen and (max-width: 840px){
        background-color: #FFFFFF;
        justify-content: space-between;
        ul{
            display: none;
        }
    }

`; 

export const BtnBaixar = styled.div`
    background: #B1C65C;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    width: 185;
    height: 50;

    h1 {
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 800;
        align-self: center;
    }
`;