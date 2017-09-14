import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: 'lightseagreen',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

const Header = props =>
  (
    <View style={styles.header}>
      <Text style={styles.title}>
        #{props.title}
      </Text>
    </View>
  );

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
