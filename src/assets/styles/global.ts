import { createGlobalStyle } from "styled-components";
import { lighten } from "polished";
import "./css/fonts.css";

export default createGlobalStyle`

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html,body,#root{
    height: 100vh;
    font-family: Roboto ,sans-serif;
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
    outline: none;
}

h1,h2,h3,h4,h5,h6,p,span,small,strong,input,button,a{
    font-family: Roboto ,sans-serif;

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
    background: ${({ theme }) => theme.colors.primary} ;

}
::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => lighten(0.2, theme.background)} ;
}
}
`;
