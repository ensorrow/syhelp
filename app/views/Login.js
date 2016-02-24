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
                <TouchableOpacity style={styles.submitbtn}>
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