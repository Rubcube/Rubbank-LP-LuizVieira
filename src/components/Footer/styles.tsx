import styled, { createGlobalStyle } from "styled-components";

export const Classes = createGlobalStyle`
    .stores{
        @media screen and (max-width: 920px){
            display: none !important;
        }
    }
    .logoRub{
        @media screen and (max-width: 465px){
            height: 21px !important;
        }
    }
`;

export const Content = styled.section`
    background-color: #FFFFFF;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3em;
    gap: 2em;
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: self-start;
    justify-content: flex-start;
    gap: 1em;
    h1{
        font-size: 2em;
        color: #1D1C3E;
        text-align: left;
    }

    @media screen and (max-width: 465px){
        h1{
            font-size: 1.25em;
        }
    }
`;

export const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 5em;
    @media screen and (max-width: 465px){
        gap: 3em;
        img{
            height:  30px;
        }
    }
`;

export const Rights = styled.div`
    font-size: 1.8em;
    color: #9B9B9B;
    border-top: 1px #9B9B9B solid;
    text-align: center;
    width: 100%;
    padding-top: .5em;
    margin-bottom: -1em;

    @media screen and (max-width: 465px){
        font-size: 1em;
    }
`;

