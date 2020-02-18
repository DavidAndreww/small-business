import React from 'react';
import NavBar from './components/NavBar'
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Router />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
