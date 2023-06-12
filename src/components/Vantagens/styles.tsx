import styled, { createGlobalStyle } from "styled-components";

export const Classes = createGlobalStyle`
    .dashed{
        padding: 1.5em 2em 1.5em 2em;
        border: 3px dashed #B1C65C;
        margin-left: 0em;

        @media screen and (max-width: 465px){
            border: 1px dashed #B1C65C;
            padding: .5em;
        }
    }
`;

export const Content = styled.section`
    position: relative;
    padding: 4em;
    padding-right: 0;
    background-color: #FFFFFF;
    max-width: 100vw;
    margin-top: -3px;
    display: flex;
    flex-direction: column;
    main{
        display: flex;
        flex-direction: row;
        margin-bottom: 10em;
    }
    main>div{
        display: flex;
        flex-direction: column;
        gap: 3em;  
    }
    main>img{
        z-index: 1;
    }

    @media screen and (max-width: 1000px){
        padding-right: 4em;
        main>img{
            display: none;
        }
    }

    @media screen and (max-width: 1024px){
        margin-top:-3em;
    }

    @media screen and (max-width: 465px){
        margin-top: -2.5em !important;
        padding: 1em;
        main>div{
            gap: .5em;
        }
    }

    @media screen and (max-width: 325px){
        margin-top:-4em;
    }
`;

export const Header = styled.header`
    h2{
        font-size: 3em;
        font-weight: 400;
        color: #9B9B9B;
    }
    h1{
        font-size: 4em ;
        font-weight: 800;
        color: #2D377F;
    }
    @media screen and (max-width: 465px){
        margin: 1em;
        h2{
            font-size: 1.25em;
        }
        h1{
            font-size: 2em;
        }
    }
`;

export const Items = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 2em;
    margin-left: 2.5em;
    div{
        h3{
            margin-top: .8em;
            font-size: 2.5em;
            font-weight: 400;
            color: #6B7AE5;
        }  
        p{
            margin-top: 1rem;
            font-size: 2.5em;
            font-weight: 400;
            color: #9B9B9B;
        }
    }

    @media screen and (max-width: 465px){
        margin-top: 1.5em;;
        margin-left: 8px;
        gap: .5em;
        h3{
            margin-top: 0px !important;
            font-size: 1.25rem !important;
        }
        p{
            font-size: 1.25rem !important;
        }
        img{
            //margin-top: .9em;
            width: 1.2em;
        }
    }
`;

 