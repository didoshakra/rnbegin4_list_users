//PersonListScreen.js

import React, {useState} from 'react';
import {FlatList, View, StyleSheet,Text} from 'react-native';
import {PersonListItem} from './PersonListItem';

export default function PersonListScreen({navigation}) {
  const [list, listSetstate] = useState([]);
  const [isLoading, isLoadingSetstate] = useState([]);

  const componentDidMount = () => {
    onRefresh();
  };

  const onRefresh = () => {
    getMoreData(true);
  };

  const onScrollToEnd = ({distanceFromEnd}) => {
    if (distanceFromEnd < 0) {
      return;
    }
    getMoreData(false);
  };

  onItemPress = item => {
    navigation.navigate('info', {person: item});
  };

  keyExtractor = person => person.login.uuid;

  const getMoreData = isRefreshing => {
    const limit = 15;
    const offset = isRefreshing ? 0 : list.length;
    const page = Math.ceil(offset / limit) + 1;
    fetch(`https://randomuser.me/api/?seed=foobar&results=15&page=${page}`)
      .then(r => r.json())
      .then(json => {
        listSetState({
          list: isRefreshing ? list.concat(json.results) : json.results,
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  const renderItem = ({item}) => {
    return (
      <PersonListItem person={item} onPress={onItemPress.bind(this, item)} />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 22, color: 'red'}}>PersonListScreen</Text>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        refreshing={isLoading}
        onRefresh={onRefresh}
        onEndReached={onScrollToEnd}
        onEndReachedThreshold={0.2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
