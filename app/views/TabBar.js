'use strict';

import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
}
from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import HomeScene from './HomeScene';
import ChatList from './ChatList';
import Announce from './Announce';
import Mynamecard from './Mynamecard';

export default class TabBar extends React.Component {
  state = {
    selectedTab: 'Home',
    notifCount: 0,
    presses: 0,
  };
  _renderContent() {
    return (
      <HomeScene navigator={this.props.navigator}/>
    )
  }
  _renderContent1() {
    return (
      <Announce navigator={this.props.navigator}/>
    )
  }
  _renderContent2() {
    return (
      <ChatList navigator={this.props.navigator}/>
    )
  }
  _renderContent3() {
    return (
      <Mynamecard navigator={this.props.navigator} />
    )
  }
  render() {
    return (
      <TabBarIOS>
        <Icon.TabBarItem
          title="首页"
          iconName="ios-home-outline"
          badge={3}
          selectedIconName="ios-home"
          selected={this.state.selectedTab === 'Home'}
          onPress={() => {
            this.setState({
              selectedTab: 'Home',
            });
          }}>
          {this._renderContent()}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="公告"
          iconName="ios-paper-outline"
          selectedIconName="ios-paper"
          badge={undefined}
          selected={this.state.selectedTab === 'Announcement'}
          onPress={
            () => {
              this.setState({
                selectedTab: 'Announcement',
              })
            }
          }>
          {this._renderContent1()}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="对话"
          iconName="ios-person-outline"
          selectedIconName="ios-person"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'Chat'}
          onPress={() => {
            this.setState({
              selectedTab: 'Chat',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this._renderContent2()}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="我"
          iconName="ios-star-outline"
          selectedIconName="ios-star"
          selected={this.state.selectedTab === 'Me'}
          onPress={() => {
            this.setState({
              selectedTab: 'Me',
              presses: this.state.presses + 1
            });
          }}>
          {this._renderContent3()}
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
};

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
  },
});