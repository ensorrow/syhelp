'use strict';

import React, {
  AppRegistry,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Navigator,
} from 'react-native';

import HomeScene from './HomeScene';
import SecondScene from './SecondScene';
import Icon from 'react-native-vector-icons/Ionicons';
import Dimensions from 'Dimensions';

export default class Navi extends React.Component{
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
            <Text style={{color: '#fff',fontSize:16,fontWeight:'bold',position:'absolute',right: 0.5*vw-48,bottom: 18}}>
              {route.name}
            </Text>
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
          name: 'home',
          component: HomeScene,
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
