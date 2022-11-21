import React from "react";
import { StyleSheet } from "react-native";
// React-Native-Elements
import {
  Header as _Header,
  lightColors as colors,
  Button,
} from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";

const toggleSidebar = (navigation) => {
  navigation.toggleDrawer();
};

export const Header = ({ navigation }) => {
  return (
    <_Header
      leftComponent={
        <Button
          onPress={() => toggleSidebar(navigation)}
          icon={<Icon name="menu" size={15} color="white" />}
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
