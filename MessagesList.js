import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

function renderItem({ item }) {
    return (
      <View style={styles.row}>
        <Text style={styles.sender}>{item.sender}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    );
}

function createKey(item, index) {
  return `${item.sender}_${item.message}_${index}`;
}

export default function MessagesList(props) {
  return <FlatList data={props.data} renderItem={renderItem} keyExtractor={createKey}/>;
}

const styles = StyleSheet.create({
  row: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  message: {
    fontSize: 18,
  },
  sender: {
    fontWeight: 'bold',
    paddingRight: 10,
  },
});
