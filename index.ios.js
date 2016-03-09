'use strict';

import React, {
  AppRegistry,
  Component
} from 'react-native';

import App from './app/containers/App';

class MyProject extends Component {
  render () {
    return (
        <App  />
    );
  }
}

AppRegistry.registerComponent('MyProject', () => MyProject);
