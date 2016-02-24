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

//缓存
import Storage from 'react-native-storage';

var storage = new Storage({
  //最大容量，默认值1000条数据循环存储
  size: 1000,

  //数据过期时间，默认一整天（1000 * 3600 * 24秒）
  defaultExpires: 1000 * 3600 * 24,

  //读写时在内存中缓存数据。默认启用。
  enableCache: true,

  //如果storage中没有相应数据，或数据已过期，
  //则会调用相应的sync同步方法，无缝返回最新数据。
  sync : {
    //同步方法的具体说明会在后文提到
  }
});

// debug
import Chat from './app/views/Chat1';

var USER_TYPE = 'https://tztestzt.applinzi.com/Api/App/index';

class MyProject extends React.Component{
  renderScene (route, navigator) {
    let Component = route.component;
    let navi = navigator;
    let params = route.params;
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
          <Component navigator={navigator} route={route} {...params} />
        </View>
      )
    }else{
      return (
        <Component navigator={navigator} route={route} {...params} />
      )
    }
  }
  componentDidMount () {
    this.getuser();
  }
  getuser () {
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

    fetch(USER_TYPE)
    .then(status)
    .then(json)
    .then(function(data) {
      console.log('succeed', data);
    }).catch(function(error) {
      console.log('request failed', error);
    });
  }
  render () {
    return (
      <Navigator
        initialRoute = {{
          name: 'main',
          component: TabBar,
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
