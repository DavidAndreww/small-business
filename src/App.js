import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import NavBar from './containers/NavBar'
import Router from './Router';
import store from './redux/store';

class App extends React.Component {
  render() {
    return (
      <div>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Router />
        </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
