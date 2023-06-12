import styled from "styled-components";
import mockup from "../../assets/img/mockup.svg"

export const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: #1D1C3E;
    mix-blend-mode: hard-light;
    width: 100vw;
    height: 100vh;

    @media screen and (max-width: 465px){
        opacity: .5;
        mix-blend-mode: hard-light;
    }
`;

export const Mockup = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-image: url(${mockup});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vh;

    @media screen and (max-width: 980px){
        filter: blur(7px);
    }

    @media screen and (max-width: 465px){
        display: none;
    }
`;

export const Content = styled.section`
    position: relative;
    min-height: 88vh;
    padding-left: 4em;
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    gap: 7vh;
    max-width: 50vw;
    
    @media screen and (max-width: 1024px){
        max-width: 80vw;
    }

    @media screen and (max-width: 819px){
        padding: 17px;
        align-items: center;
        margin-top: 9em;
        gap: 7vh;
        max-width: 100vw;
        margin-top: 3vh;
    }

    @media screen and (max-width: 465px){
        margin-top: 0em;
        justify-content: start;
        gap: 3vh;
        
    }
`;

export const Title = styled.h1`
    font-size: 4em;
    font-weight: 400;
    color: #FFFFFF;

    span{
        font-weight: 700;
    }

    @media screen and (max-width: 465px){
        font-size: 3em;
        text-align: center;
        font-size: 3.5vh;
    }
    
`;

export const Subtitle = styled.h2`
    font-size: 2.6em;
    font-weight: 400;
    color: #FFFFFF;

    span{
        font-weight: 700;
        color: #B1C65C;
    }

    @media screen and (max-width: 465px){
        font-size: 3em;
        order: 1;
        text-align: center;
        font-size: 2.5vh;
        margin-bottom: 2em;
    }
`;

export const BtnDownload = styled.div`
    border: 2px dashed #B1C65C;
    padding: 1.75vh;
    display: flex;
    align-self: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    h1{
        background-color: #B1C65C;
        color: #2D3024;
        font-weight: 901;
        font-size: 2em;
        padding: 2rem 5rem;
        border-radius: 5px;
        box-shadow: 0px 4px 4px rgba(0,0,0,.25);
    }


    @media screen and (max-width: 465px){
        h1{
            font-size: 1.5em;
            font-weight: bolder;
            padding: 2.5vh 15vw;
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
    margin-top: -5vh;
    h2{
        font-size: 1.9em;
        font-weight: 400;
        color: #FFFFFF;
    }

    @media screen and (max-width: 465px){
        display: none;
    }
`;

export const Visualizer = styled.img`
    display: none;
    align-self: center;
    width: 40vh;
    @media screen and (max-width: 465px){
        display: block;
    }
    @media screen and (max-width: 300px){
        width: 30vh;
    }
`;