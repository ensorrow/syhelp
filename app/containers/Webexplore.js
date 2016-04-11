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
    Dimensions,
    WebView
} from 'react-native';

var vw = Dimensions.get('window').width;
var vh = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/Ionicons';

class Webbar extends React.Component{
    render () {
        return (
            <View style={styles.webviewbar}>
                <TouchableOpacity onPress={this.props.goBack}>
                    <Icon
                        name = "chevron-left"
                        style={styles.baricon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.closeWin}>
                    <Icon
                        name = "close"
                        style = {styles.baricon}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

export default class Webexplore extends React.Component{
    state = {
        source : 'http://www.baidu.com',
    };
    getNetworkstatus () {
        //待修改
        return true;
    }
    goBack () {
        let webpage = this.refs.webview;
        webpage.goBack();
    }
    closeWin () {
        let nav = this.props.navigator;
        nav.pop();
    }
    render () {
        let netstatus = this.getNetworkstatus();
        let content;
        if(!netstatus) {
            content = (
                <View>
                    <Text>检查网络再试试哦~</Text>
                </View>
            )
        }
        else{
            let link;
            if(this.props.source){link = this.props.source}
            else{link=this.state.source}
            content = (
                <WebView
                    ref='webview'
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    url={link}
                    onNavigationStateChange={this.onNavigationStateChange}
                    onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                    startInLoadingState={true}
                    scalesPageToFit={false}
                    />
            )
        }
        return (
            <View>
                <View style={styles.statusbar} />
                <Webbar goBack={() => this.goBack()} closeWin={() => this.closeWin()}/>
                {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    statusbar: {
        height: 20,
        backgroundColor: '#e5e5e5'
    },
    webviewbar: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e5e5e5',
        paddingLeft: 10,
        paddingRight: 10
    },
    baricon: {
        color: '#000',
        fontSize: 24,
    },
    webView: {
        height: vh-40,
    }
})