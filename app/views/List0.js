'use strict';

import React, {
  AppRegistry,
  Navigator,
  View,
  Text,
  Image,
  ListView,
  TextInput,
  StyleSheet
} from 'react-native';

// var JSON_DEMO = {'tutor: {
//   items:[
//     {
//       'name': 'Louis',
//       'qianming': '我们更专业',
//       'touxiang': 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2823961627,3572677526&fm=58',
//     },
//     {
//       'name': 'Louis2',
//       'qianming': '我们更专业2',
//       'touxiang': 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2823961627,3572677526&fm=58',
//     },
//     {
//       'name': 'Louis3',
//       'qianming': '我们更专业3',
//       'touxiang': 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2823961627,3572677526&fm=58',
//     }
//   ]}'};
var BASE_URL = "https://api.github.com/search/repositories?q=";
export default class List extends React.Component{
  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1,row2) => row1 !== row2,
    }),
  }
  onSearchChange () {
    var searchTerm = event.nativeEvent.text.toLowerCase();
    var queryURL = BASE_URL + encodeURIComponent(searchTerm);
    fetch(queryURL)
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData.items) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.items),
        })
      }
    })
    .done();
  }
  renderRow (repo: Object) {
    return (
      <View>
        <View style={styles.rows}>
          <Image
            source={{uri: repo.owner.avatar_url}}
            style={styles.profpic}
          />
          <View style={styles.textcontainer}>
            <Text style={styles.title}>{repo.name}</Text>
            <Text style={styles.subtitile}>{repo.owner.login}</Text>
          </View>
        </View>
        <View style={styles.cellBorder} />
      </View>
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
          dataSource={this.state.dataSource}
          renderRow={(arg) => this.renderRow(arg)}
          automaticallyAdjustContentInsets={false}
          keyboardShouldPersistTaps={true}
          showsVerticalScrollIndicator={true}/>
    }
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder='搜索教师'
              autoCapitalize = 'none'
              autoCorrect={false}
              onEndEditing={() => this.onSearchChange}
              style = {[styles.defaultInput,{marginLeft: 10,marginRight: 10}]}
            />
          </View>
        </View>
        {content}
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
    height: 26,
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    borderRadius: 3,
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  searchBarInput: {
    marginTop: 30,
    padding: 5,
    fontSize: 15,
    height: 30,
    backgroundColor: '#eaeaea',
  },
  rows: {
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 5,
  },
  cellBorder: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    height: 1,
    marginLeft: 4,
  },
  profpic: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  subtitile: {
    color: '#ccc',
    marginBottom: 8,
  },
  textcontainer: {
    flex: 1,
    paddingLeft: 10,
  },
  blanktext: {
    padding: 10,
    fontSize: 20,
  }
});
