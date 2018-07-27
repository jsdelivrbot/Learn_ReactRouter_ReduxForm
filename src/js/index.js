import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

class Hello extends React.Component {
    render() { return <div>Hello!</div>; }
}

class Goodbye extends React.Component {
    render() { return <div>Good bye!</div>; }
}


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                First Hello?
                <Route path="/hello" component={Hello}/>
                <Route path="/goodbye" component={Goodbye}/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));

