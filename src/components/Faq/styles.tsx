import styled, { createGlobalStyle } from "styled-components";

interface Props{
    isColapsable: boolean
}

export const Content = styled.section`
    margin-top: 90vh;
    position: relative;
    background-color: #FFFFFF;
    padding: 5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4em;

    @media screen and (max-width: 1165px){
        margin-top: 0px;
    }

    @media screen and (max-width: 465px){
        gap: 1.5em;
        padding: 1em;
        margin-top: 0px;
    }
`;

export const Title = styled.h1`
    font-size: 4em;
    color: #6B7AE5;
    @media screen and (max-width: 465px){
        margin-top: 1em;
        font-size: 2em;
    }
`;

export const Card = styled.div<Props>`
    background-color: #eaeaea;
    box-shadow: 0px 1px 2px rgba(0,0,0,.25);
    display: flex;
    flex-direction: column;
    gap: 4em;
    justify-content: center;
    align-items: flex-start;
    padding: 3em;
    border-radius: 1em;
    width: 100%;
    transition: height .1s linear;
    height: ${props => props.isColapsable? "20em": "9em"};
    cursor: pointer;
    div{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 1em;
        span{
            font-size: 2em;
            color: #7786F3;
        }
        .more{
            display: ${props => props.isColapsable? 'none':'block'};
            margin-top: 1.5em;
        }
        .minus{
            display: ${props => props.isColapsable? 'block':'none'};
        }
    }
    h1{
        font-size: 2.6em;
        color: #1D1C3E;
        margin-top: ${props => props.isColapsable? '0': '1.5em'};
        transition: height .1s linear;
    }

    p{
        font-size: 2.6em;  
        color: #3C3C3C;
        text-indent: 1em;
        text-align: justify;
        transition: height .1s linear;
        visibility: ${props => props.isColapsable? 'visible': 'hidden'};
        height: ${props => props.isColapsable? 'auto': '0'};
    }

    @media screen and (max-width: 465px){
        padding: 1em;
        gap: 1.5em;
        height: ${props => props.isColapsable? "14em": "7.5em"};
        h1{
            font-size: 1.5em;
        }
        p{
            font-size: 1.25em;
        }
    }
`;