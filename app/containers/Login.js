'use strict';

import React, {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    TextInput
} from 'react-native';

export default class extends React.Component{
    state = {
        USER_NAME: '',
        PASSWORD: '',
        VERIFY: ''
    };
    login () {
      let postmsg = 'user='+this.state.USER_NAME+'&pwds='+this.state.PASSWORD;
      let USER_LOGIN = 'https://tztestzt.applinzi.com/Api/App/login';
      function status(response) {
        if (response.status >= 200 && response.status<300) {
          return Promise.resolve(response);
        } else {
          return Promise.reject(new Error(response.statusText));
        }
      }
      function json(response) {
        return response.json();
      }
      let request = new Request(USER_LOGIN, {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: postmsg
      });
      let storage = this.props.storage;
      fetch(request)
          .then(status)
          .then(json)
          .then(function(data) {
            data = JSON.parse(data);
            console.log(data.data);
            storage.save({
              key: 'loginState',
              rawData: {
                token: data.data
              }
            })
          }).catch(function(error) {
        console.log('request failed', error);
      });
    }
    render () {
        return (
            <View style={{marginTop: 20}}>
                <View style={{paddingTop: 6,paddingBottom: 6,backgroundColor:'#eee'}}>
                    <TextInput
                        autoCapitalize = 'none'
                        autoCorrect={false}
                        style = {styles.loginInput}
                        onChangeText={(value)=>this.setState({
                            USER_NAME: value
                        })}
                        maxLength={20}
                        placeholder='输入您的用户名'
                    />
                    <View style={{borderWidth: 1,borderColor: '#ccc'}}/>
                    <TextInput
                        autoCapitalize = 'none'
                        autoCorrect={false}
                        style = {styles.loginInput}
                        onChangeText={(value)=>this.setState({
                            PASSWORD: value
                        })}
                        maxLength={20}
                        placeholder='输入您的密码'
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={styles.submitbtn} onPress={() => this.login()}>
                    <Text style={{color: '#fff'}}>登录</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    submitbtn: {
        flex: 1,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 40,
        marginRight: 40,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8956a1',
        borderRadius: 5
    },
    loginInput: {
        backgroundColor: '#eee',
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: 14,
        height: 30,
        textAlign: 'center'
    }
});