import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
const { Provider } = require('react-redux');
import configureStore from './reducers';
import SPSContainer from './containers/SPSContainer';
import {
  BrowserRouter as Router
} from 'react-router-dom';

const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
              <Router>
                <SPSContainer />
              </Router>
            </Provider>
        );
    }
}

export default App;
