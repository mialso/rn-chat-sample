import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { send, subscribe } from 'react-native-training-chat-server';
import Header from './Header';
import MessagesList from './MessagesList';
import MessageInput from './MessageInput';

const NAME = 'mialso';
const CHANNEL = 'Reactivate';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: '',
      messages: [],
    };
  }

  componentDidMount() {
    subscribe(CHANNEL, (messages) => {
      this.setState({ messages });
    });
  }

  sendMessage = async () => {
    await send({
      channel: CHANNEL,
      sender: NAME,
      message: this.state.typing,
    });
    this.setState({ typing: '' });
  };

  updateInput = text => this.setState({ typing: text });

  render() {
    return (
      <View style={styles.container}>
        <Header title={CHANNEL} />
        <MessagesList data={this.state.messages} />
        <KeyboardAvoidingView behavior="padding">
          <MessageInput
            text={this.state.typing}
            changeHandler={this.updateInput}
            sendMessage={this.sendMessage}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}
