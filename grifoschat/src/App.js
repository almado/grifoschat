import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Room from './components/Room';
import reducers from './reducers';
import './App.css';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <div className="App">
          <Room />
        </div>
      </Provider>
    );
  }
}

export default App;
