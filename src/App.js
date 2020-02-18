import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar'
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
