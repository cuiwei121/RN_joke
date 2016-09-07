import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} from 'react-native';

import common from '../common/constants.js'

class JokeListView extends Component {
    constructor(props) {
        super(props);

        //cell中 内容改变 或 不改变  都要刷新ListView
        var jokeListV = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 == r2 || r1 !== r2});
        this.state = {
            jokeDataSource:jokeListV.cloneWithRows(['111','222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222',
                                                    '33333','4444','55555']),
        }
    }

    renderJoke(jokeText,sectionID,rowID) {
        return (
            <View style = {{flex:1,margin:2,width:common.window.width,height:40}}>
                <Text style = {{flex:1}}
                      numberOfLines={0}>
                      {jokeText}</Text>
            </View>
        );
    }


    render() {
        return (
            <ListView sytle = {{flex:1}}
            dataSource = {this.state.jokeDataSource}
            renderRow = {this.renderJoke.bind(this)}
            enableEmptySections = {true}
            />

        );
    }
}


module.exports = JokeListView;
