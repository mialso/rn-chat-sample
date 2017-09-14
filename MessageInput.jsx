import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    flex: 1,
  },
  send: {
    alignSelf: 'center',
    color: 'lightseagreen',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
  },
});

const MessageInput = props =>
  (
    <View style={styles.footer}>
      <TextInput
        value={props.text}
        onChangeText={props.changeHandler}
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Type something nice"
      />
      <TouchableOpacity onPress={props.sendMessage}>
        <Text style={styles.send}>Send</Text>
      </TouchableOpacity>
    </View>
  );

MessageInput.propTypes = {
  text: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default MessageInput;
