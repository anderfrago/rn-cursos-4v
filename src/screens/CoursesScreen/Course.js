import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";

import PropTypes from "prop-types";
import { StyleSheet } from 'react-native';
// React-Native-Elements
import { colors } from "react-native-elements";


import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Right,
} from "native-base";


export class Course extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(id) {
    this.props.actions.deleteCourse(id).catch((error) => {
      alert("Deleting course failed" + error);
    });
  }

  render() {
    let { id, name, description, level, type, duration, navigation } = this.props;

    return (
      <Container>
        <Content>
          <Card style={styles.sectionContainer}>
          <CardItem header >
              <Text  style={styles.sectionTitle}>{name}</Text>
            </CardItem>
            <CardItem>
              <Content>
                <Text  style={styles.sectionDescription}>{description}</Text>
                <CardItem >
                  <Text>{level}</Text>
                </CardItem>
                <CardItem >
                  <Text>Familia profesional:</Text>
                  <Text> {type}</Text>
                </CardItem>
                <CardItem >
                  <Text>Duración: {duration}</Text>
                </CardItem>
              </Content>
            </CardItem>
            <CardItem footer>
            <Button  rounded success
              onPress={()=>navigation.navigate("Editar curso", {id: id})}>
                    <Text  style={styles.buttonText}>Editar</Text>
              </Button>
              <Right />
              <Button rounded danger onPress={() => this.handleDelete(id)}>
                <Text  style={styles.buttonText}>Borrar</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

Course.propTypes = {
  onClick: PropTypes.func,
  completed: PropTypes.bool,
  name: PropTypes.string,
  description: PropTypes.string,
  level: PropTypes.string,
  type: PropTypes.string,
  duration: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    course: state.course,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}
//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Course);



const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.grey1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.white,
  },
});
