import * as React from 'react';
const { BrowserRouter } = require('react-router-dom');
import 'bootstrap/dist/css/bootstrap.css';
import AllocationTableContainer from './components/AllocationTableContainer';
const { Provider } = require('react-redux');
import configureStore from './reducers';

const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="no-padding">
                        <AllocationTableContainer />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
