'use strict';
import React, {
    Component,
    Text,
    View,
    TouchableHighlight,
    Image,
    Navigator,
    Dimensions,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import TabBar from './TabBar';
import { connect } from 'react-redux/native';
import * as action from '../actions';

//DEBUG
import List from './List';

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

class TitleBar extends Component {
  render () {
    let vw = Dimensions.get('window').width;
    return (
        <View style={styles.titleBar} ref='test'>
          <TouchableOpacity>
            <Icon name='ios-arrow-left' size={30} color='#fff'
                  onPress={() => this.props.navigator.pop()}
                  style={{paddingTop:4,paddingBottom: 6,left: 16}}
            />
          </TouchableOpacity>
          <View style={{width:96,alignItems:'center',justifyContent:'center',position:'absolute',right: 0.5*vw-48,bottom: 18}}>
            <Text style={{color: '#fff',fontSize:16,fontWeight:'bold',top: 3}}>
              {this.props.name}
            </Text>
          </View>
        </View>
    )
  }
}

class BaseApp extends Component {
  renderScene (route, navigator) {
    let Component = route.component;
    let navi = navigator;
    let params = route.params;
    if(route.bar){
      return (
          <View>
            <TitleBar navigator={navigator} name={route.name}/>
            <Component navigator={navigator} {...params} />
          </View>
      )
    }else{
      return (
          <Component navigator={navigator} {...params} />
      )
    }
  }
  render () {
    return (
        <Navigator
            initialRoute = {{
              name: 'main',
              component: TabBar,
              bar: false,
              params: {
                storage: storage
              }
            }}
            renderScene = {this.renderScene}
        />
    );
  }
}

const styles = StyleSheet.create({
  titleBar:{
    paddingTop: 20,
    backgroundColor:'#8956A1',
    flexDirection: 'row',
    alignItems: 'center',
  }
});

function selector(state) {
  return {
    state: state
  }
}

export default connect(selector)(BaseApp);