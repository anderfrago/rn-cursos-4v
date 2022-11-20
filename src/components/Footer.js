import React from 'react';
import { StyleSheet } from 'react-native';
// React-Native-Elements
import { colors } from "react-native-elements";
import {
  Text,
  Footer as _Footer,
} from "native-base";

export default Footer = () => {

    return (
        <_Footer style={styles.footer}>
            <Text>Desarrollo de Interfaces</Text>
        </_Footer>
    );
}

const styles = StyleSheet.create({
    footer: {
      backgroundColor: colors.white,
      fontSize: 18,
      color: colors.grey0,
      alignContent: "space-between",
      marginBottom: 0
    }
  });