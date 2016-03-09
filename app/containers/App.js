'use strict';

import React , {
    Component
} from 'react-native';
import { Provider } from 'react-redux/native';
import {
    createStore, applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import BaseApp from './BaseApp';

import reducer from '../reducers';
const createStoreWithThunk = applyMiddleware(thunk)(createStore);
const store = createStoreWithThunk(reducer);

export default class extends Component {
  render () {
    return (
        <Provider store={store}>
          {() => <BaseApp />}
        </Provider>
    );
  }
}