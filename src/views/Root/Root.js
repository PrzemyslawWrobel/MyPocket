import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <>
    <GlobalStyle />
    <h1>Moja app</h1>
    <Button> CLOSE / Save </Button>
    <Button secondary> Remoove </Button>
  </>
);
export default Root;
