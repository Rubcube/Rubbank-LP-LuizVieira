import styled from "styled-components";
import background from "../../assets/img/background_roxo.svg"

export const Content = styled.section`
    background-color: #FFFFFF;
    padding-top: 10em;
    width: 100vw;
    @media screen and (max-width: 1165px){
        background-color: rgba(0,0,0,0);
    }

    @media screen and (max-width: 465px){
        padding-top: 0em;
    }
`;

export const Background = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100vw;
    position: absolute;
    margin-top: -45em;
    height: 120em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    @media screen and (max-width: 1165px){
        position: relative;
        margin-top: -37em;
        background-image: url("") !important;
        background-color: linear-gradient(112.9deg, #2D377F 0%, #6B7AE5 100%);
        height: max-content;
        box-shadow: inset 0px 4px 4px rgba(0,0,0,.25);
    }

    @media screen and (max-width: 465px){
        margin-top: 0em;
    }
`;

export const Title = styled.h1`
    margin-top: 12em;
    font-size: 4em;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 1em;

    @media screen and (max-width: 465px){
        margin-top: 1em;
        font-size: 2em;
    }
`;

export const Carousel = styled.div`
    height: 39.6em;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5em;
    flex-wrap: wrap;
    margin-top: 1em; 

    @media screen and (max-width: 465px){
        height: 30em;
    }
`;

interface Props {
    order: number
}

export const Card = styled.div<Props>`
    background-color: #FFFFFF;
    height: 39.6em;
    width: 29em;

    border-radius: 5%;
    box-shadow: 0px 4px 4px rgba(0,0,0,.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    padding: 3em;
    transition: opacity .5s linear;
    h1{
        font-size: 2em;
        color: #6B7AE5;
    }
    p{
        font-size: 2em;
        color: #3C3C3C;
        text-align: center;
    }

    @media screen and (max-width: 1165px){
        order: ${props => props.order};
        max-height: ${props => props.order === 2 || props.order === 3 ? '0px' : 'auto'};
        visibility: ${props => props.order === 2 || props.order === 3 ? 'hidden' : 'visible'};
        opacity: ${props => props.order === 2 || props.order === 3 ? '0' : '1'};
    }

    @media screen and (max-width: 465px){
        width: 70vw;
        height: 25em;
        padding: 1.5em;

        img{
            width: 60%;
        }
        p{
            font-size: 1.5em;
        }
    }

    @media screen and (max-width: 310px){
        width: 80vw;
    }
`;

export const Navigation = styled.div`
    display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 3em;
    margin-top: -3em;
    gap: 1em;

    @media screen and (max-width: 1165px){
        display: flex;
    }
`;

interface CircleProps {
    page: number
    cicleId: number
}

export const Circle = styled.div<CircleProps>`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${props => props.page === props.cicleId ? '#B7D442' : '#FFFFFF'};
`;

export const ArrowRight = styled.img`
    display: none;
    position: absolute;
    right: 1em;
    width: 1.2em;
    margin-top: -5em;
    @media screen and (max-width: 1165px){
        display: flex;
    }
`;

export const ArrowLeft = styled.img`
    display: none;
    position: absolute;
    left: 1em;
    width: 1.2em;
    margin-top: -5em;

    @media screen and (max-width: 1165px){
        display: flex;
    }
`;