import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PrimaryLayout } from './layouts';
import { store } from './store'
import { Provider } from 'react-redux';

class App extends React.Component {
  render() {
    return (
    	<Provider store={store}>
        <BrowserRouter>
            <div className="App">
                <PrimaryLayout />
            </div>
        </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
