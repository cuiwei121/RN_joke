
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
import utils from '../common/utils.js'
import JokeListView from './JokeListView.js'

class JokeController extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.fetchData();

    }

    fetchData() {
        var joke_date = 1418814837;
        var jokeurl = common.url.joke_url
                      +'?sort=asc'
                      +'&page=1'
                      +'&pagesize=3'
                      +'&time='+joke_date
                      +'&key=a91393365afb1f6ca19b3fdd7d9409ec';
        console.log('fetchData url11 :'+jokeurl  +'/n date = ');
        utils.get(jokeurl,(response) => {
            console.log('fetchData url :'+jokeurl +'\n response = '+response);
            if (response.code === 0) {
                console.log('有数据');
            }
        },(error) => {

        });
    }

    render(){
        return(
            <View style = {{flex:1}}>
                <JokeListView/>
             </View>
        )
    }
}


module.exports = JokeController;
