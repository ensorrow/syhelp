'use strict';

import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Navigator,
  ScrollView
} from 'react-native';

import Order from './Order';
import Dimensions from 'Dimensions';
import Chat from './Chat';

var vh = Dimensions.get('window').height;
var vw = Dimensions.get('window').width;
class Namecard extends React.Component{
  render () {
    return (
    <View style={styles.namecard}>
      <View style={{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
      }}>
        <Image
          source={{uri:'http://ensorrow.github.io/img/head.gif'}}
          width={80}
          height={80}
          style={styles.cardpic}
        />
      </View>
      <View style={{flex: 1,paddingTop: 10}}>
        <View style={{flexDirection:'row',paddingTop:5,paddingBottom:5}}>
          <Text style={{color:'#8A56A1',fontSize: 16}}>王小明
          </Text>
          <Text style={{color: '#00469E',left: 5}}>♂
          </Text>
        </View>
        <View style={{flexDirection:'row',paddingBottom: 3}}>
          <Text style={{}}>西安交大
          </Text>
          <Text style={{left: 40}}>八级
          </Text>
        </View>
        <Text style={{}}>本科学历
        </Text>
      </View>
    </View>
  )}
}
class Timetable extends React.Component{
  render(){
    return (
    <View style={styles.timetable}>
      <Text style={{color:'#8957A0',fontSize:16,fontWeight:'bold',marginTop: 10,marginBottom: 10,paddingLeft:10}}>个人教学时间
      </Text>
      <View style={styles.chart}>
        <View style={styles.row}>
          <View style={[styles.items,{backgroundColor: '#626262'}]}>
            <Text style={styles.white}>星期
            </Text>
          </View>
          <View style={styles.items0}>
            <Text style={styles.white}>上午
            </Text>
          </View>
          <View style={styles.items0}>
            <Text style={styles.white}>下午
            </Text>
          </View>
          <View style={styles.items0}>
            <Text style={styles.white}>晚上
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.items0}>
            <Text style={styles.white}>星期一
            </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.white}>
            </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.white}>
            </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.white}>
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.items0}>
            <Text style={styles.white}>星期二
            </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.white}>
            </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.white}>
            </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.white}>
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.items0}>
            <Text style={styles.white}>星期三
            </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.white}>
            </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.white}>
            </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.white}>
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.items0}>
            <Text style={styles.white}>星期四
            </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.white}>
            </Text>
          </View>
          <View style={[styles.items,{backgroundColor: '#8956A1'}]}>
            <Text style={styles.white}>
            可预约
            </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.white}>
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.items0}>
            <Text style={styles.white}>星期五
            </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.white}>
            </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.white}>
            </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.white}>
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.items0}>
            <Text style={styles.white}>星期六
            </Text>
          </View>
          <View style={[styles.items,{backgroundColor: '#8956A1'}]}>
            <Text style={styles.white}>
            可预约
            </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.white}>
            </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.white}>
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.items0}>
            <Text style={styles.white}>星期日
            </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.white}>
            </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.white}>
            </Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.white}>
            </Text>
          </View>
        </View>
      </View>
    </View>
  )}
}
export default class Detail extends React.Component{
  render () {
    return (
      <View>
        <ScrollView height={vh-63}>
          <Namecard />
          <Timetable />
        </ScrollView>
        <View style={{flexDirection: 'row',position: 'absolute',bottom: 0,width: vw,borderWidth: 1,borderColor: '#535353'}}>
          <TouchableOpacity
              style={styles.bottomBtn}
              onPress={
           () => {
             let nav = this.props.navigator;
             nav.push({
               component: Chat,
               name: '待添加',
               bar: true,
             });
           }
         }
          >
            <Text style={{color: '#8956a1'}}>
              私信
            </Text>
          </TouchableOpacity>
            <View style={styles.columnBorder}></View>
          <TouchableOpacity
              style={styles.bottomBtn}
              onPress={
           () => {
             let nav = this.props.navigator;
             nav.push({
               component: Order,
               name: '订单填写',
               bar: true,
             });
           }
         }
          >
            <Text style={{color: '#8956a1'}}>
              预约
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  namecard: {
    backgroundColor: '#eee',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  cardpic: {
    borderRadius: 40,
    backgroundColor: '#bfbfbf'
  },
  timetable:{
    paddingLeft: 15,
    paddingRight: 15,
  },
  row: {
    flexDirection: 'row',
  },
  items0: {
    flex: 1,
    margin: 5,
    backgroundColor: '#B5B5B5',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  items: {
    flex: 1,
    margin: 5,
    backgroundColor: '#E5E5E5',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  white: {
    color: '#fff',
    fontWeight: 'bold'
  },
  bottomBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
      backgroundColor: '#fff',
  },
    columnBorder: {
        borderWidth: 1,
        borderColor: '#535353',
        height: 34,
    },
});
