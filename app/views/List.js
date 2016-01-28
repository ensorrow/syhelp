'use strict';

import React, {
  AppRegistry,
  Navigator,
  View,
  Text,
  Image,
  ListView,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Dimensions from 'Dimensions';
import Detail from './Detail';
import Order from './Order';
import Icon from 'react-native-vector-icons/Ionicons';
var vh = Dimensions.get('window').height;
export default class List extends React.Component{
  state = {
    opacity: 1,
    dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(['小张老师','交大李老师','师友团队','师友团队','师友团队','师友团队','师友团队','师友团队','师友团队','师友团队','师友团队','师友团队','师友团队','师友团队','师友团队','师友团队']),
  }
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
  renderRow (rowData) {
    if(!rowData){rowData=0;}
    return (
      <TouchableOpacity
        style={styles.listRow}
        onPress={() => {
          let nav = this.props.navigator;
          if(nav) {
            nav.push({
              name: '家教名片',
              component: Detail,
              bar: true,
            });
          } else{
            throw error;
          }
        }}
      >
        <View style={{padding:10}}>
          <Image
            source={{uri:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2823961627,3572677526&fm=58'}}
            height={45}
            width={45}
            style={styles.touxiang}
          />
        </View>
        <View style={styles.wordsContainer}>
          <Text style={styles.name}>
            {rowData}
          </Text>
          <Text style={styles.qianming}>
            愿我们一起实现理想！
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
  render () {
    var content;
    if(this.state.dataSource.getRowCount() === 0) {
      content =
        <Text style={styles.blanktext}>
          检查网络再试哦~
        </Text>;
    } else {
      content =
        <ListView
          ref="listview"
          height={vh-103}
          dataSource={this.state.dataSource}
          renderRow={e=>this.renderRow(e)}
          automaticallyAdjustContentInsets={false}
          keyboardShouldPersistTaps={true}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode = 'on-drag'/>

    }
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.searchContainer}>
            <TextInput
              ref='search'
              autoCapitalize = 'none'
              autoCorrect={false}
              onEndEditing={() => this.onSearchChange}
              style = {[styles.defaultInput,{marginLeft: 10,marginRight: 10}]}
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
                <Icon name='search' style={{fontSize:14,color: '#535353',}}/>
                <Text style={{color: '#535353'}}>搜索家教名称</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {content}
        <TouchableOpacity
         style={styles.flBtn}
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
          <Text style={styles.white}>
          预约
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  searchContainer: {
    paddingTop: 6,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 6,
    backgroundColor: '#DCDCDC'
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
  listRow: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row'
  },
  wordsContainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10
  },
  touxiang: {
    borderRadius: 23,
  },
  name: {
    fontSize: 16,
    marginBottom: 10
  },
  qianming: {
    fontSize: 12,
  },
  white: {
    color: '#fff',
    fontWeight: 'bold'
  },
  flBtn: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#8956A1',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  }
})
