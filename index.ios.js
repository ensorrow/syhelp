/**
 * Shiyouhelp.com
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Navigator,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import HomeScene from './app/views/HomeScene';
import TabBar from './app/views/TabBar';
import Icon from 'react-native-vector-icons/Ionicons';

// debug
import Order from './app/views/Order';

class MyProject extends React.Component{
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
                style={{paddingTop:4,paddingBottom: 6,left: 16}}
              />
            </TouchableOpacity>
            <View style={{width:96,alignItems:'center',justifyContent:'center',position:'absolute',right: 0.5*vw-48,bottom: 18}}>
              <Text style={{color: '#fff',fontSize:16,fontWeight:'bold',top: 3}}>
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
        initialRoute = {{
          name: 'main',
          component: Order,
          bar: false
        }}
        renderScene = {this.renderScene}
        />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    padding: 10,
    paddingTop: 74,
    flex: 1
  },
  titleBar:{
    paddingTop: 20,
    backgroundColor:'#8956A1',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
