import React from 'react'
import { ApolloProvider } from '@apollo/client/react';
import Client from './config/config'
// import Home from './component/home'
import RouterConfig from './component/navbar/router'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <ApolloProvider client={Client}>
      <RouterConfig/>
    </ApolloProvider>
  );
}

export default App;
