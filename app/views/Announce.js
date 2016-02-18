'use strict';

import React , {
  View,
  Text,
  Image,
  TouchableOpacity,
  Navigator,
  ListView,
  StyleSheet,
  Dimensions
} from 'react-native';

var vh = Dimensions.get('window').height;
var BASE_URL = 'http://platform.sina.com.cn/sports_all/client_api?app_key=3571367214&_sport_t_=football&_sport_s_=opta&_sport_a_=teamOrder&type=213&season=2015&format=json';
export default class extends React.Component{
  state = {
    dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    loaded: false,
  };
  componentDidMount () {
    fetch(BASE_URL)
    .then((res) => res.json())
    .then((resData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(resData.result.data),
        loaded: true,
      })
    }).done();
  }
  renderRow (dataSource) {
    return (
      <TouchableOpacity style={styles.rowItem}>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <Text style={styles.title}>{dataSource.team_cn}</Text>
            <Text style={styles.date}>2015.5.26</Text>
          </View>
          <Image
            source={{uri: dataSource.logo}}
            style={{width: 108,height: 68,backgroundColor: '#d2d2d2'}}
          />
        </View>
        <View style={styles.rowBorder}>
        </View>
      </TouchableOpacity>
    )
  }
  render () {
    let content;
    if(!this.state.loaded){
      content = (
        <View height={vh-111} style={{alignItems: 'center',justifyContent: 'center'}}>
          <Text>加载中。。。</Text>
        </View>
      )
    }else {
      content = (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          height={vh-111}
          automaticallyAdjustContentInsets={false}
        />
      )
    }
    return (
      <View>
        <View style={styles.statusbar}>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>公告
          </Text>
        </View>
        {content}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  statusbar: {
    height: 20,
    backgroundColor: '#8956a1'
  },
  header: {
    backgroundColor: '#8956a1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 12
  },
  rowBorder: {
    borderWidth: 1,
    borderColor: '#535353',
    flex: 1
  },
  rowContainer: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 8
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8
  },
  date: {
    fontSize: 12,
    color: '#707070'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
