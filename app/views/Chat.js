'use strict';

import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Navigator,
  TextInput,
  ScrollView,
  Dimensions
} from 'react-native';

import GiftedMessenger from 'react-native-gifted-messenger';

export default class extends React.Component{
  state = {

  };
  getMessages () {
    return [
      {text: 'Are you building a chat app?', name: 'React-Native', image: {uri: 'https://facebook.github.io/react/img/logo_og.png'}, position: 'left', date: new Date(2015, 0, 16, 19, 0)},
      {text: "Yes, and I use Gifted Messenger!", name: 'Developer', image: null, position: 'right', date: new Date(2015, 0, 17, 19, 0)},
    ];
  }
  handleSend (message = {}, rowID = null) {
     // Send message.text to your server
  }
  handleReceive () {
    this._GiftedMessenger.appendMessage({
      text: 'Received message',
      name: 'Friend',
      image: {uri: 'https://facebook.github.io/react/img/logo_og.png'},
      position: 'left',
      date: new Date(),
    });
  }
  render () {
    return (
      <GiftedMessenger
        ref={(c) => this._GiftedMessenger = c}

        messages = {this.getMessages()}
        handleSend = {this.handleSend}
        maxHeight = {Dimensions.get('window').height-63}
        autoFocus = {false}
        placeholder = '输入信息'
        sendButtonText = '发送'
        keyboardDismissMode = 'on-drag'

        styles={{
          bubbleLeft: {
            backgroundColor: '#e6e6eb',
            marginRight: 70,
          },
          bubbleRight: {
            backgroundColor: '#007aff',
            marginLeft: 70,
          },
        }}
      />
    );
  }
}

var styles = StyleSheet.create({

});
