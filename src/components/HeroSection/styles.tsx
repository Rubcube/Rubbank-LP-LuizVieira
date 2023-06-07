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
    position: absolute;
    top: 16vh;
    height: calc(84vh);
    padding-left: 4em;
    display: flex;
    flex-direction: column;
    gap: 5vh;

    @media screen and (max-width: 819px){
        top: 0;
        padding: 17px;
        align-items: center;
        margin-top: 9em;
        gap: 7vh;
    }

    @media screen and (max-width: 465px){
        margin-top: 13vh;
        justify-content: start;
        gap: 3vh;
    }
`;

export const Title = styled.h1`
    font-size: 4em;
    font-weight: 400;
    color: #FFFFFF;
    max-width: 45rem;

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
    max-width: 45rem;

    span{
        font-weight: 700;
        color: #B1C65C;
    }

    @media screen and (max-width: 465px){
        font-size: 3em;
        order: 1;
        text-align: center;
        font-size: 2.5vh;
        
    }
`;

export const CallToAction = styled.div`
    max-width: 45rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    justify-self: flex-end;
    align-items: center;
    gap: 2em;

    img{
        width: 16.67em;
        height: 11em;
        @media screen and (max-width: 700px){
            display: none;
        }
    }

    @media screen and (max-width: 465px){
        max-width: 80vw;
    }
`;

export const BtnDownload = styled.div`
    border: 2px dashed #B1C65C;
    padding: 1.75vh;
    display: flex;
    justify-content: center;
    align-items: center;

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
        border: none;
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
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 41.67rem;
    margin-top: -4vh;
    h2{
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