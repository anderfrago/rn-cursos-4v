import React from "react";
import {  StyleSheet, } from "react-native";
import {  Header as _Header } from "react-native-elements";
// React-Native-Elements
import { colors, Button, Icon } from "react-native-elements";


const toggleSidebar = (navigation) => {
  navigation.toggleDrawer();
} 

export default Header = ({navigation}) => {

    return (
      <_Header
        leftComponent={
          <Button onPress={ () =>  toggleSidebar(navigation)}
          icon={
            <Icon
              name="menu"
              size={15}
              color="white"
            />
          }
        />
        }
        centerComponent={{
          text: "Instituto Cuatrovientos",
          style: { color: "#fff" },
        }}
      />
    );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
  },
  headerText: {
    marginTop: 12,
    fontSize: 18,
    color: colors.grey0,
  },
});
