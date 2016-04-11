'use strict';

import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Navigator,
  TextInput,
  ScrollView,
  Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper';
import List from './List';
import Icon from 'react-native-vector-icons/Ionicons';
import Webexplore from './Webexplore';
var vw = Dimensions.get('window').width;
var vh = Dimensions.get('window').height;

export default class HomeScene extends React.Component{
  state = {
    opacity: 1,
  };
  changeState (e) {
    if(this.state.opacity==0){
      this.setState({
        opacity: 1,
      });
    }
    else{
      this.setState({
        opacity: 0,
      });
    }
  }
  jump (url) {
    let nav = this.props.navigator;
    if(nav){
      nav.push({
        name: 'webview',
        component: Webexplore,
        params: {
          source: url
        }
      })
    }
  }
  render () {
    return (
      <View>
        <View style={styles.statusbar}/>
        <View style={styles.headerContainer}>
          <TextInput
            ref='search'
            autoCapitalize = 'none'
            autoCorrect={false}
            style = {styles.defaultInput}
            onFocus = {e=>this.changeState(e)}
            onBlur = {e=>this.changeState(e)}
          />
          <View
            style={{opacity: this.state.opacity}}>
            <TouchableOpacity
              style={styles.placeholder}
              onPress={() => {
                if(this.refs.search){
                  this.refs.search.focus();
                }else{
                  alert('没有对应的输入组件！');
                }
              }}
            >
              <Icon name='search' size={14} color='#535353'/>
              <Text style={{color: '#535353'}}>搜索辅导班/群组/品牌家教</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView height={vh-124} style={styles.container} automaticallyAdjustContentInsets={false}>
          <Swiper paginationStyle={{bottom: 6}} autoplay={true} height={77} horizontal={true} >
            <TouchableOpacity onPress={()=>this.jump('http://ensorrow.github.io')}>
              <Image style={styles.scrollimg}  source={require('../images/scrollimgs1.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.jump('http:/baidu.com')}>
              <Image style={styles.scrollimg}  source={require('../images/scrollimgs2.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.jump('http://bing.com')}>
              <Image style={styles.scrollimg}  source={require('../images/scrollimgs3.png')}/>
            </TouchableOpacity>
          </Swiper>
          <View style={styles.mainWrapper}>
            <View style={[styles.title,{marginTop: 13}]}>
              <View style={styles.square}></View>
              <Text style={{paddingLeft:6}}>正在讨论</Text>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn0}>
                <Text style={styles.color}>#高中数学</Text>
              </TouchableOpacity>
              <View style={styles.columnBorder}>
              </View>
              <TouchableOpacity style={styles.btn0}>
                <Text style={styles.color}>#如何学好高中物理</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.row,{marginLeft:4,marginRight:4}]}>
              <View style={styles.rowBorder}>
              </View>
              <View style={styles.rowBorder}>
              </View>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn0}>
                <Text style={styles.color}>#初中英语</Text>
              </TouchableOpacity>
              <View style={styles.columnBorder}>
              </View>
              <TouchableOpacity style={styles.btn0}>
                <Text style={styles.color}>#学习方法</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.sytt} onPress={() => {
                let nav = this.props.navigator;
                if(nav) {
                  nav.push({
                    name: '品牌家教列表',
                    component: List,
                    bar: true
                  });
                } else{
                  throw error;
                }
              }}>
                <Text style={{color: '#fff'}}>
                  师友品牌家教
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.mktt}  onPress={() => {
                let nav = this.props.navigator;
                if(nav) {
                  nav.push({
                    component: Webexplore,
                    bar: false,
                    params: {
                      source: 'http://ensorrow.github.io'
                    }
                  });
                } else{
                  throw error;
                }
              }}>
                <Text style={{color: '#fff'}}>
                  市场自由家教
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.title,{marginBottom:10,marginTop: 4}]}>
              <View style={styles.square}></View>
              <Text style={{paddingLeft:6}}>本地热门</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.otbtn}>
                <Text>
                  市场自由家教1
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.otbtn}>
                <Text>
                  市场自由家教2
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.otbtn}>
                <Text>
                  市场自由家教3
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.otbtn}>
                <Text>
                  市场自由家教4
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.otbtn}>
                <Text>
                  市场自由家教5
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.otbtn}>
                <Text>
                  市场自由家教6
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: 13,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    backgroundColor: '#8956a1'
  },
  row: {
    flexDirection: 'row'
  },
  color: {
    color: '#8957a0'
  },
  mainWrapper: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    width:86,
    height:14,
    flexDirection:'row'
  },
  defaultInput: {
    height: 28,
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    flex: 1
  },
  placeholder: {
    flexDirection: 'row',
    marginTop: -22,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  imgWrapper: {
    flexDirection: 'row',
    height: 77,
  },
  scrollimg: {
    flex: 1,
  },
  tobtn: {
    flex: 1,
    height: 60,
    backgroundColor: 'rgba(0,0,0,.2)',
  },
  btnbg: {
    flex: 2,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn0: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderColor: '#535353',
  },
  columnBorder: {
    borderWidth: 1,
    borderColor: '#535353',
    height: 31,
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 5,
    marginRight: 5
  },
  rowBorder: {
    borderWidth: 1,
    borderColor: '#535353',
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  sytt: {
    paddingLeft: 32,
    paddingRight:32,
    paddingTop: 26,
    paddingBottom: 26,
    borderRadius: 10,
    alignItems:'center',
    flex: 1,
    margin: 9,
    backgroundColor: '#8956a1'
  },
  mktt: {
    paddingLeft: 32,
    paddingRight:32,
    paddingTop: 26,
    paddingBottom: 26,
    borderRadius: 10,
    alignItems:'center',
    flex: 1,
    margin: 9,
    backgroundColor: '#535353'
  },
  otbtn: {
    borderColor: '#8956a1',
    borderWidth: 2,
    borderRadius: 6,
    padding: 13,
    alignItems: 'center',
    marginBottom: 12,
  },
  statusbar: {
    height: 20,
    backgroundColor: '#8956a1'
  },
  square: {
    width:10,
    height:10,
    backgroundColor:'#8956a1',
    top:2
  }
});
