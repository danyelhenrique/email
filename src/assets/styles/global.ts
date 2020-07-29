import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html,body,#root{
    height: 100vh;
    font-family: ${({ theme }) => theme.primaryFont} ,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #282828;
	max-width: 1366px;
	margin: 0 auto;
	font-size: 1rem;
	line-height: calc(1rem * 1.5);
}

a{
    text-decoration: none;
}

ul {
    list-style: none;
}

button{
    background: none;
    border: none;
    cursor: pointer;
}

h1,h2,h3,h4,h5,h6,p,span,small,strong,input,button,a{
    font-family: ${({ theme }) => theme.primaryFont} ,sans-serif;

    font-weight: 400;
}
`;
