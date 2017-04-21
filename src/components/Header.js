import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.headerStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  headerStyle: {
    fontSize: 20,
  }
};

export default Header;
