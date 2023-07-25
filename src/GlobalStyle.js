import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }

    body{
        color: #6c7983;
        font-size: 1.2rem;
        &::-webkit-scrollbar {
            width: 10px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #2575fc; 
            border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb:hover {
            background-color: #1B57E6; 
        }
        &::-webkit-scrollbar-track {
            background-color: #EDEDED;
            border-radius: 10px;
        }
    }
`;


export default GlobalStyle;