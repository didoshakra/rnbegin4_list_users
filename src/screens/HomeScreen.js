//RenderHtml.js//https://www.kindacode.com/article/how-to-render-html-content-in-react-native/
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    // <View style={styles.container}>
    <View>
      <Text style={{fontSize: 22, color: 'red'}}>HomeScreen</Text>
      {/* <Text
        style={{fontSize: 15, color: 'blue'}}
        onPress={() => navigation.navigate('Started')}>
        //https://reactnavigation.org/docs/getting-started/
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 100,
  },
});

export default HomeScreen;
