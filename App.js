import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={style.container}>
      <Text> Hello World!!! </Text>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },
});
