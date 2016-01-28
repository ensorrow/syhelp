'use strict';

import React, {
  AppRegistry,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Navigator,
  Dimensions
} from 'react-native';

import Chat from './Chat';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Navi1 extends React.Component{

  renderScene (route, navigator) {
    let Component = route.component;
    let navi = navigator;
    var vw = Dimensions.get('window').width;
    if(route.bar){
      return (
        <View>
          <View style={styles.titleBar} ref='test'>
            <TouchableOpacity>
              <Icon name='ios-arrow-left' size={30} color='#fff'
                onPress={() => navi.pop()}
                style={{paddingTop:8,paddingBottom: 8,left: 10}}
              />
            </TouchableOpacity>
            <View style={{width:96,alignItems:'center',justifyContent:'center',position:'absolute',right: 0.5*vw-48,bottom: 18}}>
              <Text style={{color: '#fff',fontSize:16,fontWeight:'bold',}}>
                {route.name}
              </Text>
            </View>
          </View>
          <Component navigator={navigator} route={route} />
        </View>
      )
    }else{
      return (
        <Component navigator={navigator} route={route} />
      )
    }
  }
  render () {
    return (
      <Navigator
        initialRoute={{
          name: '张老师',
          component: Chat,
          bar: true
        }}
        renderScene={this.renderScene}
      />
    )
  }
}
var styles = StyleSheet.create({
  titleBar:{
    paddingTop: 20,
    backgroundColor:'#8956A1',
    flexDirection: 'row',
    alignItems: 'center',
  },

});
