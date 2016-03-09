'use strict';

import React , {
    LinkingIOS,
    Platform,
    ActionSheetIOS,
    Dimensions,
    View,
    Text
} from 'react-native'

import GiftedMessenger from 'react-native-gifted-messenger'
import Communications from 'react-native-communications'


export default class GiftedMessengerExample extends React.Component{

    getMessages() {
        return [
            {text: 'Are you building a chat app?', name: 'React-Native', image: {uri: 'https://facebook.github.io/react/img/logo_og.png'}, position: 'left', date: new Date(2015, 10, 16, 19, 0)},
            {
                text: "Yes, and I use Gifted Messenger!",
                name: 'Developer',
                image: null,
                position: 'right',
                date: new Date(2015, 10, 17, 19, 0)
                // If needed, you can add others data (eg: userId, messageId)
            },
        ];
    }

    handleSend(message = {}, rowID = null) {
        // Your logic here
        // Send message.text to your server

        // this._GiftedMessenger.setMessageStatus('Sent', rowID);
        // this._GiftedMessenger.setMessageStatus('Seen', rowID);
        // this._GiftedMessenger.setMessageStatus('Custom label status', rowID);
        //this._GiftedMessenger.setMessageStatus('ErrorButton', rowID); // => In this case, you need also to set onErrorButtonPress
    }

    handleReceive(message = {}) {
        this._GiftedMessenger.appendMessage(message);
    }

    onErrorButtonPress(message = {}, rowID = null) {
        // Your logic here
        // Eg: Re-send the message to your server

        setTimeout(() => {
            // will set the message to a custom status 'Sent' (you can replace 'Sent' by what you want - it will be displayed under the row)
            this._GiftedMessenger.setMessageStatus('Sent', rowID);
            setTimeout(() => {
                // will set the message to a custom status 'Seen' (you can replace 'Seen' by what you want - it will be displayed under the row)
                this._GiftedMessenger.setMessageStatus('Seen', rowID);
                setTimeout(() => {
                    // append an answer
                    this.handleReceive({text: 'I saw your message', name: 'React-Native', image: {uri: 'https://facebook.github.io/react/img/logo_og.png'}, position: 'left', date: new Date()});
                }, 500);
            }, 1000);
        }, 500);
    }

    // will be triggered when the Image of a row is touched
    onImagePress(rowData = {}, rowID = null) {
        // Your logic here
        // Eg: Navigate to the user profile
    }

    render() {
        return (
            <GiftedMessenger
                ref={(c) => this._GiftedMessenger = c}

                styles={{
                  bubbleRight: {
                    marginLeft: 70,
                    backgroundColor: '#007aff',
                  },
                }}

                autoFocus={false}
                messages={this.getMessages()}
                handleSend={()=>this.handleSend()}
                maxHeight={Dimensions.get('window').height - navBarHeight - statusBarHeight}

                senderName='Developer'
                senderImage={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                onImagePress={this.onImagePress}
                displayNames={true}
                forceRenderImage={true}
                keyboardDismissMode="on-drag"


            />

        );
    }

    handleUrlPress(url) {
        if (Platform.OS !== 'android') {
            LinkingIOS.openURL(url);
        }
    }

    handlePhonePress(phone) {
        if (Platform.OS !== 'android') {
            var BUTTONS = [
                'Text message',
                'Call',
                'Cancel',
            ];
            var CANCEL_INDEX = 2;

            ActionSheetIOS.showActionSheetWithOptions({
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX
                },
                (buttonIndex) => {
                    switch (buttonIndex) {
                        case 0:
                            Communications.phonecall(phone, true);
                            break;
                        case 1:
                            Communications.text(phone);
                            break;
                    }
                });
        }
    }

    handleEmailPress(email) {
        Communications.email(email, null, null, null, null);
    }
}

var navBarHeight = (Platform.OS === 'android' ? 56 : 64);
// warning: height of android statusbar depends of the resolution of the device
// http://stackoverflow.com/questions/3407256/height-of-status-bar-in-android
// @todo check Navigator.NavigationBar.Styles.General.NavBarHeight
var statusBarHeight = (Platform.OS === 'android' ? 25 : 0);