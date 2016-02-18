'use strict';

import React, {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Navigator,
    TouchableOpacity,
    Picker
} from 'react-native';

import Dimensions from 'Dimensions';
import RadioButtons from 'react-native-radio-buttons';
var vw = Dimensions.get('window').width;
var vh = Dimensions.get('window').height;
class TitleText extends React.Component{
  render () {
    let content = this.props.children;
    if(!content){
      return undefined;
    }
    else{
      return (
          <Text style={styles.title}>
            {content}
          </Text>
      )
    }
  }
}
class BorderBtn extends React.Component{
  state = {
    selected : 0,
  };
  render () {
    let content = this.props.children;

    if(!content){
      return undefined;
    }
    else{
      let selected = this.state.selected;
      if(!selected) {
        return (
            <TouchableOpacity
                style={styles.borderbtn}
                onPress={
             () => {
               if(this.state.selected) {
                 this.setState({selected:0})
               }
               else {
                 this.setState({selected:1})
               }
             }
           }
            >
              <Text style={{color:'#8956A1'}}>{content}</Text>
            </TouchableOpacity>
        )
      }
      else {
        return (
            <TouchableOpacity
                style={styles.borderbtn0}
                onPress={
             () => {
               if(this.state.selected) {
                 this.setState({selected:0})
               }
               else {
                 this.setState({selected:1})
               }
             }
           }
            >
              <Text style={{color:'#fff'}}>{content}</Text>
            </TouchableOpacity>
        )
      }
    }
  }
}

class RankSelect extends React.Component{
  state = {
    selectedOption : '特级师友家教'
    // 通过state获取当前选中
  };
  render () {
    const options = [
      "特级师友家教",
      "一级师友家教",
      "二级师友家教",
      "三级师友家教"
    ];
    function setSelectedOption(selectedOption) {
      this.setState({
        selectedOption
      });
    };
    function renderOption (option, selected, onSelect, index){
      if(selected) {
        return (
            <TouchableOpacity
                style={[styles.borderbtn0,{width: (vw-68-10)/2}]}
                onPress={
             onSelect
           }
            >
              <Text style={{color:'#fff'}}>{option}</Text>
            </TouchableOpacity>
        )
      }
      else{
        return (
            <TouchableOpacity
                style={[styles.borderbtn,{width: (vw-68-10)/2}]}
                onPress={
             onSelect
           }
                key={index}
            >
              <Text style={{color:'#8956A1'}}>{option}</Text>
            </TouchableOpacity>
        )
      }
    }
    // function renderContainer(optionNodes){
    //   return <View>{optionNodes}</View>;
    // }
    // 自定义RadioButtons组件样式
    return (
        <View style={{flexDirection: 'row',marginTop: 5}}>
          <RadioButtons
              options={ options }
              onSelection={ setSelectedOption.bind(this) }
              selectedOption={this.state.selectedOption }
              renderOption={ renderOption }
              renderContainer={RadioButtons.getViewContainerRenderer({
          flexDirection: 'row',
          flexWrap: 'wrap',
          flex: 1,
          marginRight: -10,
        })}
          />
        </View>);
  }
}

class SubmitBtn extends React.Component{
  render () {
    let content = this.props.children;
    if(!content){content = 0;}
    else{
      return (
          <TouchableOpacity style={styles.submitbtn}>
            <Text style={{color: '#fff'}}>
              {content}
            </Text>
          </TouchableOpacity>
      )
    }
  }
}
export default class Order extends React.Component{
  state = {

  };
  render () {
    return (
        <ScrollView style={{paddingLeft: 34,paddingRight: 34,}} height={vh-63}>
          <TitleText>选择品牌级别</TitleText>
          <RankSelect/>
          <TitleText>单击方块选择试听时间</TitleText>
          <Timetable />
          <SubmitBtn>提交</SubmitBtn>
        </ScrollView>
    )
  }
}

class Days extends React.Component{
  state = {
    selected: false
  };
  changeState () {
    this.setState({
      selected: !this.state.selected
    });
  }
  render () {
    let btn;
    if(this.props.free){
      if(this.state.selected) {
        btn = (
            <TouchableOpacity style={[styles.items,{backgroundColor: '#8806A1'}]} onPress = {()=>this.changeState()}>
              <Text style={styles.white}>
                已选中
              </Text>
            </TouchableOpacity>
        )
      } else {
        btn = (
            <TouchableOpacity style={[styles.items,{backgroundColor: '#8956A1'}]} onPress = {()=>this.changeState()}>
              <Text style={styles.white}>
                可预约
              </Text>
            </TouchableOpacity>
        )
      }
    } else {
      btn = (
          <View style={styles.items}>
            <Text style={styles.white}>
            </Text>
          </View>
      )
    }
    return btn;
  }
}

class Timetable extends React.Component{
  render(){
    return (
        <View style={styles.timetable}>
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
              <Days />
              <Days />
              <Days />
            </View>
            <View style={styles.row}>
              <View style={styles.items0}>
                <Text style={styles.white}>星期二
                </Text>
              </View>
              <Days free={true} />
              <Days />
              <Days />
            </View>
            <View style={styles.row}>
              <View style={styles.items0}>
                <Text style={styles.white}>星期三
                </Text>
              </View>
              <Days free={true} />
              <Days />
              <Days free={true} />
            </View>
            <View style={styles.row}>
              <View style={styles.items0}>
                <Text style={styles.white}>星期四
                </Text>
              </View>
              <Days />
              <Days free={true} />
              <Days />
            </View>
            <View style={styles.row}>
              <View style={styles.items0}>
                <Text style={styles.white}>星期五
                </Text>
              </View>
              <Days />
              <Days />
              <Days />
            </View>
            <View style={styles.row}>
              <View style={styles.items0}>
                <Text style={styles.white}>星期六
                </Text>
              </View>
              <Days free={true} />
              <Days />
              <Days />
            </View>
            <View style={styles.row}>
              <View style={styles.items0}>
                <Text style={styles.white}>星期日
                </Text>
              </View>
              <Days />
              <Days />
              <Days />
            </View>
          </View>
        </View>
    )}
}
var styles = StyleSheet.create({
  title: {
    color: '#8956A1',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10
  },
  borderbtn: {
    borderWidth: 1,
    borderColor: '#8956A1',
    borderRadius: 8,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 5,
  },
  borderbtn0: {
    borderWidth: 1,
    borderColor: '#8956A1',
    borderRadius: 8,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 5,
    backgroundColor: '#8956A1'
  },
  row: {
    flexDirection: 'row',
  },
  timetable: {
    marginLeft: -5,
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
  submitbtn: {
    flex: 1,
    marginTop: 20,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8956a1'
  }
});
