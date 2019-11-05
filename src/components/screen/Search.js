import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../utils/Styles';

function Search(props) {
  return (
    <View style={styles.container}>
      <Text>검색 페이지...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Search;
