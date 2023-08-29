import React, { Component} from 'react';
import Layout from './hoc/Layout/layout';

class App extends React.Component {
  render (){
    return (
      <Layout>
        <div style={{widows:40, border: '1px solid black'}}>
          <h1>Layout works</h1>
        </div>
      </Layout>
    )}
    }
export default App;
