import React from "react";

// React-Native-Elements
import { colors } from "react-native-elements";
import {
  Left,
  Right,
  Container,
  Content,
  Text,
} from "native-base";
// React-Native
import { View, ScrollView, StyleSheet, Image, Button } from "react-native";
// 4Vientos Components
import  Header from '../../components/Header';
import  Footer from '../../components/Footer';

export function HomeScreen({ navigation }) {
  return (
      <Container>
        <Header  navigation={navigation} />

        <Content>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView} >
            <View style={styles.body}>
              <Image source={require("../../../assets/images/4Vientos.png")} />
              <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionHeaderSubtitle}>
                  NUESTRA MISIÓN ES LA{" "}
                  <Text style={styles.highlight}>
                    EDUCACIÓN INTEGRAL DE PERSONAS{" "}
                  </Text>
                  PARA SU INCLUSIÓN EN LA SOCIEDAD Y LA EMPRESA.
                </Text>
              </View>
              <Button
                title="Saber más"
                onPress={() => navigation.navigate("About")}
              ></Button>
            </View>
          </ScrollView>
        </Content>
        <Footer />
      </Container>
  );
}

const styles = StyleSheet.create({
  sectionHeaderContainer: {
    margin: 12,
    paddingHorizontal: 24,
  },
  sectionHeaderTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: colors.black,
  },
  sectionHeaderSubtitle: {
    margin: 2,
    fontSize: 18,
    fontWeight: "700",
    color: colors.grey0,
  },
  body: {
    backgroundColor: colors.white,
    padding: 30,
  },

});
