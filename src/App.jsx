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

// const configureStore = (initialState, options) => {
//   const middlewares = [sagaMiddleware];
//   const enhancer = process.env.NODE_ENV === 'production'
//       ? compose(applyMiddleware(...middlewares))
//       : compose(
//           applyMiddleware(...middlewares),
//           typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
//       );
//   const store = createStore(reducer, initialState, enhancer);
//   sagaMiddleware.run(rootSaga);
//   return store;
// }

export default App;