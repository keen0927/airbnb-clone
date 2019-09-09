import React from 'react';
import Home from './pages/Home';
import { GlobalStyle } from './injectGlobalJS';

const App = () => {

  return (
    <div>
      <GlobalStyle />
      <Home />
    </div>
  )
}

export default App;