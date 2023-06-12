import styled from "styled-components";

export const Content = styled.section`
    background-color: linear-gradient(112.9deg, #2D377F 0%, #6B7AE5 100%);
    width: 100vw;
    padding: 10em;
    box-shadow: inset 0px 4px 4px rgba(0,0,0,.25);
    display: flex;
    flex-direction: column;
    gap: 3em;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 680px){
        padding: 2em;
    }
`;

export const Title = styled.h1`
    font-size: 4em;
    color: #FFFFFF;
    text-align: center;
    order: 1;
    span{
        font-weight: 900;
    }

    @media screen and (max-width: 465px){
        font-size: 1.5em;
        order: 3;
    }
`;

export const Subtitle = styled.h2`
    font-size: 3em;
    color: #FFFFFF;
    text-align: center;
    order: 2;
    span{
        color: #B1C65C;
    }
    @media screen and (max-width: 465px){
        font-size: 2em;
        order: 1;
        text-align: left;
    }
`;

export const BtnDownload = styled.div`
    border: 2px dashed #B1C65C;
    padding: 1.75vh;
    display: flex;
    align-self: center;
    justify-content: center;
    align-items: center;
    order: 3;
    cursor: pointer;
    h1{
        background-color: #B1C65C;
        color: #2D3024;
        font-weight: 901;
        font-size: 2em;
        text-align: center;
        padding: 2rem 5rem;
        border-radius: 5px;
        box-shadow: 0px 4px 4px rgba(0,0,0,.25);
    }

    @media screen and (max-width: 465px){
        order: 2;
        
        h1{
            font-size: 1.5em;
            padding: 1em 3em;
        }
    }
`;

export const Tag = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 41.67rem;
    order: 4;
    h2{
        font-size: 1.9em;
        font-weight: 400;
        color: #FFFFFF;
    }

    @media screen and (max-width: 465px){
        display: none;
    }
`;