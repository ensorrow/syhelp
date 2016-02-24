'use strict';

import React, {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';

export default class Register extends React.Component{
    state = {
        USER_NAME: '',
        PASSWORD: '',
        CONFIRM: '',
        VERIFY: '',
        FEEDBACK: ' '
    };
    confirm () {
        if(this.state.PASSWORD!=this.state.CONFIRM) {
            this.setState({
                FEEDBACK: '两次密码输入不一致'
            })
        } else {
            this.setState({
                FEEDBACK: ' '
            })
        }
    }
    render () {
        return (
            <View style={{marginTop: 20}}>
                <View style={{paddingTop: 16,paddingBottom: 16,backgroundColor:'#eee'}}>
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
                    <View style={{borderWidth: 1,borderColor: '#ccc'}}/>
                    <TextInput
                        autoCapitalize = 'none'
                        autoCorrect={false}
                        style = {styles.loginInput}
                        onChangeText={(value)=>this.setState({
                            CONFIRM: value
                        })}
                        maxLength={20}
                        placeholder='再次输入您的密码'
                        secureTextEntry={true}
                    />
                    <View style={{borderWidth: 1,borderColor: '#ccc'}}/>
                    <View style={{height:30}}>
                        <TextInput
                            autoCapitalize = 'none'
                            autoCorrect={false}
                            onChangeText={(value)=>this.setState({
                                VERIFY: value
                            })}
                            maxLength={4}
                            placeholder="验证码"
                            style={styles.loginInput}
                        />
                        <Image style={{width:100,height:30,backgroundColor:'#ccc',marginTop:-30}} source={{uri: 'http://imgsrc.baidu.com/forum/w%3D580/sign=402fe0de622762d0803ea4b790ee0849/6059252dd42a2834dd5869f65ab5c9ea14cebf55.jpg'}} />
                    </View>
                </View>
                <Text style={{color:'red',marginTop: 6,fontSize: 12,alignSelf: 'center'}}>{this.state.FEEDBACK}</Text>
                <TouchableOpacity style={styles.submitbtn} onPress={()=>this.confirm()}>
                    <Text style={{color: '#fff'}}>注册</Text>
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