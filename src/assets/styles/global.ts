import { createGlobalStyle } from "styled-components";
import { lighten } from "polished";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

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

.scroll{
    ::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background} ;

}

::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.background} ;

}
::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => lighten(0.2, theme.background)} ;
}
}
`;
