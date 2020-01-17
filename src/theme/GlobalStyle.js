import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700&display=swap');

*,*::before, *::after {
    box-sizing: border-box;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

html {
    font-size: 62.5%; // zmienia wielkość trzcinki przegldarki z 16px na 10 px - by się lepiej przeliczałp wartpści teraz 1rem ma 10px
}

body {
    font-size: 1.6rem; // przywraca nam wielkość trzcionki na 16px czyli domyślna wartość przegladarki
    font-family: "Montserrat", sans-serif;
}
`;

export default GlobalStyle;
