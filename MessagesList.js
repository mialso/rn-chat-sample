import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, FlatList, View, Text } from 'react-native';

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

function createKey(item, index) {
  return `${item.sender}_${item.message}_${index}`;
}

const Item = ({ item }) =>
  (
    <View style={styles.row}>
      <Text style={styles.sender}>{item.sender}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );

Item.propTypes = {
  item: PropTypes.shape({
    sender: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
};

const MessagesList = props =>
  <FlatList data={props.data} renderItem={Item} keyExtractor={createKey} />;

MessagesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MessagesList;
