import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    *{
        margin: 0;
        padding: 0; 
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    }

    html{
      font-size: calc(100vw/120);
      @media screen and (max-width: 1300px){
        font-size: 12px;
      }

    }

    body{
      width: 100vw;
      height: 100vh;
      
      background: linear-gradient(112.9deg, #2D377F 0%, #6B7AE5 100%);
      @media screen and (max-width: 700px){
        background-color: linear-gradient(112.9deg, #2D377F 0%, #6B7AE5 100%) ;
      }
    }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);
