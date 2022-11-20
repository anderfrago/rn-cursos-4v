import React from "react";

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
// Navigation: react-router
import { Link } from "react-router-native";
// UI Elements  
import { StyleSheet, ScrollView } from "react-native";
import { Text, View, Button, Image } from "react-native";
// third party UI libraries
import { colors } from "react-native-elements";
import { Container, Content,  Title } from "native-base";

import Course from "./Course";

class CoursesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      courses: [],
    };
    this.setState({ loading: true });
    this.props.actions.loadCourses().catch((error) => {
      alert("Loading courses failed" + error);
    });
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.actions.loadCourses().catch((error) => {
      alert("Loading courses failed" + error);
    });
  }

  render() {
    return (
      <Container>
        <Header  navigation={this.props.navigation} />

        <Content>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView} >
            <View style={styles.body}>
              <View style={styles.sectionHeaderContainer}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image source={require("../../../assets/images/brujula.png")} />
                    <Text style={styles.sectionHeaderTitle}>
                      Oferta formativa
                    </Text>
                </View>              
                <Text style={styles.sectionHeaderSubtitle}>
              Listado de nuestra oferta educativa.
            </Text>
            <Button
              title="Agregar nuevo curso"
              onPress={() => this.props.navigation.navigate("Agregar curso")}
            />
              </View>
              <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              {this.props.courses.map((course) => (
                <Course key={course.id} {...course} navigation={this.props.navigation} />
              ))}
            </ScrollView>
            </View>
          </ScrollView>
        </Content>
        <Footer />
    </Container>
    );
  }
}



function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}
//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(CoursesScreen);

const styles = StyleSheet.create({
  sectionHeaderContainer: {

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
    backgroundColor: colors.lighter,
  },
  body: {
    backgroundColor: colors.white,
  },
  sectionContainer: {
    marginTop: 2,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: colors.dark,
  },
  footer: {
    backgroundColor: colors.white,
    fontSize: 18,
    color: colors.grey0,
    alignContent: "space-between",
  },
});
