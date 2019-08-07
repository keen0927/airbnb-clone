import React from 'react';
import Home from './pages/Home';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

const App = () => {

  return (
    <div>
      <GlobalStyle />
      <Home />
    </div>
  )
}

export default App;