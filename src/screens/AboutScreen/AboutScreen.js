import React from "react";
import { View,  FlatList, Image } from "react-native";
import {  StyleSheet, ScrollView } from "react-native";
// React-Native-Elements
import { colors } from "react-native-elements";
import {
  Left,
  Right,
  Container,
  Content,
  Text,
} from "native-base";
// 4Vientos Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const DATA = [
  {
    id: "1",
    text: `
    Un modelo educativo basado en la innovación, el emprendimiento, la internacionalización, y el compromiso, así como la igualdad de soportunidades (comprende la equidad, la inclusión y la no discriminación),
    `,
  },
  {
    id: "2",
    text: `
    Un modelo de gestión basado en la mejora continua y en los principios cooperativos,
    `,
  },
  {
    id: "3",
    text: `
    Y la participación y colaboración de la Comunidad Educativa (alumnado, ex alumnado, familias, personal del centro, empresas y entidades colaboradoras).
    `,
  },
];

const Item = ({ title }) => (
  <View style={styles.sectionContainer}>
    <Text>{title}</Text>
  </View>
);

export function AboutScreen({ navigation }) {
  const renderItem = ({ item }) => <Item title={item.text} />;
  return (
    <Container>
        <Header  navigation={navigation} />

      <Content>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.body}>
            <View style={styles.sectionHeaderContainer}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                  <Image source={require("../../../assets/images/brujula.png")} />
                  <Text style={styles.sectionHeaderTitle}>
                    Sobre nosotros
                  </Text>
              </View>              
              <Text style={styles.sectionHeaderSubtitle}>
                Cuatrovientos es un Centro Integrado Privado Concertado de
                Formación Profesional gestionado por una cooperativa de
                profesionales, cuyo fin es la formación integral de personas
                capaces de insertarse en el mundo socio-laboral a través de:
              </Text>
            </View>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}
            >
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </ScrollView>
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
    paddingHorizontal:  4,
  },
  sectionHeaderTitle: {
    fontSize: 24,
    marginLeft: 12,
    fontWeight: "900",
    color: colors.black,
  },
  sectionHeaderSubtitle: {
    margin: 8,
    fontSize: 18,
    fontWeight: "700",
    color: colors.grey0,
  },
  scrollView: {
    backgroundColor: colors.dark,
  },
  body: {
    backgroundColor: colors.white,
  },
  sectionContainer: { 
    paddingHorizontal: 24,
  },
});
