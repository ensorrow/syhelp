'use strict';

import React, {
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
  getMessages () {
    return [
      {text: 'Are you building a chat app?', name: 'React-Native', image: {uri: 'https://facebook.github.io/react/img/logo_og.png'}, position: 'left', date: new Date(2015, 0, 16, 19, 0)},
      {text: "Yes, and I use Gifted Messenger!", name: 'Developer', image: {uri: 'https://facebook.github.io/react/img/logo_og.png'}, position: 'right', date: new Date(2015, 0, 17, 19, 0)},
    ];
  }
  handleSend (message = {}, rowID = null) {
     // Send message.text to your server
      this._GiftedMessenger.setMessageStatus('ErrorButton', rowID); // => In this case, you need also to set onErrorButtonPress
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
    onErrorButtonPress(message = {}, rowID = null) {
        this._GiftedMessenger.setMessageStatus('Sent', rowID);
    }
  render () {
    return (
      <View>
          <GiftedMessenger
              ref={(c) => this._GiftedMessenger = c}

              messages = {this.getMessages()}
              handleSend = {()=>this.handleSend()}
              maxHeight = {Dimensions.get('window').height-63}
              keyboardDismissMode = 'on-drag'
              hideTextInput = {false}
              sendButtonText = '发送'
              autoFocus = {true}

              senderName = "name"
              senderImage={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
              forceRenderImage={true}
              onErrorButtonPress={()=>this.onErrorButtonPress()}

              styles={{
                  bubbleLeft: {
                    backgroundColor: '#e6e6eb',
                    marginRight: 70,
                  },
                  bubbleRight: {
                    backgroundColor: '#007aff',
                    marginLeft: 70,
                  }
                }}
              inverted={true}
          />
      </View>
    );
  }
}

var styles = StyleSheet.create({
    chatInput: {
        backgroundColor: '#fff',
        borderRadius: 3,
        flex: 1,
        paddingBottom: 7,
        paddingTop: 7,
        height: 30,
        fontSize: 16
    },
    inputWra: {
        flexDirection: 'row',
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: '#8957a1',
        alignItems: 'center',
        paddingLeft: 8
    },
    sendBtn: {
        marginLeft: 8,
        marginRight: 8,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 5
    }
});
