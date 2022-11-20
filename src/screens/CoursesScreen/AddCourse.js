import React from "react";
// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";

import PropTypes from "prop-types";

import { Text, Button } from "react-native";
// third party UI libraries
import { Content, Container, Form, Item, Input ,  Picker } from 'native-base';
// 4Vientos Components
import  Header from '../../components/Header';
import  Footer from '../../components/Footer';


export class AddCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: "",
      error: "",
      newcourse: {
        id: 0,
        name: "",
        description: "",
        level: "Nivel 3 Grado superior",
        type: "Informática y comunicaciones",
        duration: "",
      },
    };
    this.onChangeName.bind(this);
    this.onChangeDescription.bind(this);
    //this.onChangeLevel.bind(this);
    // this.onChangeType.bind(this);
    this.onChangeDuration.bind(this);
    //this.handleSubmit.bind(this);
  }

  onChangeName(event) {
    this.setState({
      newcourse: {
        ...this.state.newcourse,
        name: event.nativeEvent.text,
      },
    });
  }
  onChangeDescription(event) {
    this.setState({
      newcourse: {
        ...this.state.newcourse,
        description: event.nativeEvent.text,
      },
    });
  }
  onChangeLevel(value) {
    this.setState({
      newcourse: {
        ...this.state.newcourse,
        level: value,
      },
    });
  }
  onChangeType(value) {
    this.setState({
      newcourse: {
        ...this.state.newcourse,
        type: value,
      },
    });
  }
  onChangeDuration(event) {
    this.setState({
      newcourse: {
        ...this.state.newcourse,
        duration: event.nativeEvent.text,
      },
    });
  }

  handleSubmit(event) {
    if (
      !this.state.newcourse.name.trim() ||
      !this.state.newcourse.description.trim() ||
      !this.state.newcourse.level.trim() ||
      !this.state.newcourse.type.trim() ||
      !this.state.newcourse.duration.trim()
    ) {
      return;
    }
    this.setState({
      redirect: "Mostrar cursos",
      newcourse: {
        ...this.state.newcourse,
        id: this.props.courses.length + 1,
      },
    });
    this.props.actions.saveCourse(this.state.newcourse);
    //this.props.navigation.navigate("Mostrar cursos");
  }

  render() {
    return (
      <Container>
        <Header  navigation={this.props.navigation} />
        <Content>
        <Form        >
          <Item controlId="formname">
            <Text>Course Name</Text>
            <Input name="name"
              type="text"
              value={this.state.newcourse.name}
              onChange={(event) => this.onChangeName(event)}
              placeholder="Enter course name"
            />
          </Item>
          <Item controlId="formdescription">
            <Text>Course Description</Text>
            <Input name="description"
              type="text"
              value={this.state.newcourse.description}
              onChange={(event) => this.onChangeDescription(event)}
              placeholder="Enter description"
            />
          </Item>
          <Item picker controlId="exampleInputSelect1">
            <Text>Course level</Text>
            <Picker
                mode="dropdown"
                selectedValue={this.state.newcourse.level}
              onValueChange={this.onChangeLevel.bind(this)}            >
               <Picker.Item label="Nivel 3 Grado superio" value="Nivel 3 Grado superio" />
               <Picker.Item label="Nivel 2 Grado medio" value="Nivel 2 Grado medio" />
               <Picker.Item label="Nivel 1 Formación Profesional Especial" value="Nivel 1 Formación Profesional Especial" />
            </Picker>
          </Item>
          <Item picker controlId="exampleInputSelect1">
            <Text>Course type</Text>
            <Picker
                mode="dropdown"
                selectedValue={this.state.newcourse.type}
              onValueChange={this.onChangeType.bind(this)}            >
               <Picker.Item label="Informática y comunicaciones" value="Informática y comunicaciones" />
               <Picker.Item label="Comercio y marketing" value="Comercio y marketing" />
               <Picker.Item label="Administración y gestión" value="Administración y gestión" />
            </Picker>
          </Item>        
          <Item controlId="formduration">
            <Text>Duration</Text>
            <Input name="duration"
              type="text"
              placeholder="Duration"
              value={this.state.newcourse.duration}
              onChange={(event) => this.onChangeDuration(event)}
            />
          </Item>
          <Button onPress={ this.handleSubmit.bind(this)} title="Add Course" />
        </Form>
        </Content>
        <Footer />
      </Container>
    );
  }
}

AddCourse.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

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
export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);
