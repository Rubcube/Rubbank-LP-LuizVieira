import styled, { createGlobalStyle } from "styled-components";
import logoicon from '../../assets/img/logo.svg';
import logoicon2 from '../../assets/img/logoroxa.svg';
import menuicon from '../../assets/img/menu.svg';
import menuclose from '../../assets/img/CLOSE.svg';

interface Props {
    isScrolling?: Boolean
    drop?: Boolean
}

export const GlobalMenuClasses = createGlobalStyle<Props>`
    .scrolling{
        background-color: #FFFFFF;
        box-shadow: 4px 0px 4px rgba(0,0,0,.25);

        >ul li a{
            color: #6B7AE5 !important;
        }

    }

    .active{
        padding-bottom: .2em;
        border-bottom: 3px solid ${props => props.isScrolling? "#6B7AE5":"#FFFFFF"} ;
    }
`;

export const Logo = styled.div<Props>`
    width: 15.75em;
    height: 3.5em;
    cursor: pointer;
    background-image: url(${props => props.isScrolling? logoicon2: logoicon});
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

export const MenuIcon = styled.div<Props>`
    width: 2.9em;
    height: 2em;
    display: none;
    background-image: url(${props => props.drop? menuclose: menuicon});
    align-self: center;
    transition: all .1s linear;
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
    top: 0;
    left: 0;
    width: 100vw;
    height: 8em;
    z-index: 3;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2em;
    gap: 4.25em;

    transition: all .1s linear;

    >ul {
        display: flex;
        flex-direction: row;
        gap: 2em;
        list-style: none;
    }

    >ul li {
        align-self: flex-end;
        margin-top: .6em;
    }

    >ul li a{
        font-size: 2em;
        font-weight: 600;
        color: #FFFFFF;
        text-decoration: none;
        transition: all .2s linear;
    }

    @media screen and (max-width: 840px){
        background-color: #FFFFFF;
        justify-content: space-between;
        >ul{
            display: none;
        }
    }

`; 

export const BtnBaixar = styled.div<Props>`
    background: #6B7AE5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    width: 19em;
    height: 5.4em;
    display: ${props => props.isScrolling? 'flex': 'none'};

    position: fixed;
    top: 1em;
    right: 2em;
    justify-content: center;
    margin-right: 0px;
    align-items: center;
    cursor: pointer;
    h1 {
        color: #FFFFFF;
        font-size: 2em;
        font-weight: 800;
        align-self: center;
    }
    @media screen and (max-width: 1000px){
        display: none;
    }
`;

export const Dropdown = styled.div<Props>`
    position: fixed;
    top: 8em;
    left: 0;
    height: ${props => props.drop? 'calc(100vh - 8em)':'0'};
    visibility: ${props => props.drop? 'visible':'hidden'};
    width: 100vw;
    background-color: rgba(29, 28, 62,.80);
    filter: blur(100%);
    transition: all .1s linear;
    div{
        background-color: #EDEDED;
        box-shadow: inset 0px 4px 4px rgba(0,0,0,.25);
        width: 100%;
        padding: 1em;
        opacity: ${props => props.drop? '1':'0'};
        transition: all .1s linear;
        ul{
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 2em;
            padding: 1.5em;
            border-bottom: 1px solid #C1C1C1;
            margin-bottom: 2em;
        }
        ul li a{
            font-size: 2em;
            font-weight: 600;
            color: #1D1C3E;
            text-decoration: none;
            transition: all .2s linear;
        }
    }
`;