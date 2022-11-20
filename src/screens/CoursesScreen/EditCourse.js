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

class EditCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: props.route.params.id,
      loading: true,
      redirect: "",
      error: "",
      updatecourse: props.courses[props.route.params.id-1]
    };

    this.onChangeName.bind(this);
    this.onChangeDescription.bind(this);
    // this.onChangeLevel.bind(this);
    // this.onChangeType.bind(this);
    this.onChangeDuration.bind(this);
    this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.courses
      .filter((c) => c.id === this.state.courseId)
      .map((course) =>
        this.setState({
          updatecourse: {
            id: course.id,
            name: course.name,
            description: course.description,
            level: course.level,
            type: course.type,
            duration: course.duration,
          },
        })
      );
    this.setState({ loading: false });
  }

  onChangeName(event) {
    this.setState({
      updatecourse: {
        ...this.state.updatecourse,
        name: event.nativeEvent.text,
      },
    });
  }
  onChangeDescription(event) {
    this.setState({
      updatecourse: {
        ...this.state.updatecourse,
        description: event.nativeEvent.text,
      },
    });
  }
  onChangeLevel(value) {
    this.setState({
      updatecourse: {
        ...this.state.updatecourse,
        level: value,
      },
    });
  }
  onChangeType(value) {
    this.setState({
      updatecourse: {
        ...this.state.updatecourse,
        type: value,
      },
    });
  }
  onChangeDuration(event) {
    this.setState({
      updatecourse: {
        ...this.state.updatecourse,
        duration: event.nativeEvent.text,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      redirect: "Mostrar cursos",
      updatecourse: {
        ...this.state.updatecourse,
        id: this.state.courseId,
      },
    });
    this.props.actions.saveCourse(this.state.updatecourse);
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
              value={this.state.updatecourse.name}
              onChange={(event) => this.onChangeName(event)}
              placeholder="Enter course name"
            />
          </Item>
          <Item controlId="formdescription">
            <Text>Course Description</Text>
            <Input name="description"
              type="text"
              value={this.state.updatecourse.description}
              onChange={(event) => this.onChangeDescription(event)}
              placeholder="Enter description"
            />
          </Item>
          <Item picker controlId="exampleInputSelect1">
            <Text>Course level</Text>
            <Picker
                mode="dropdown"
                selectedValue={this.state.updatecourse.level}
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
                selectedValue={this.state.updatecourse.type}
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
              value={this.state.updatecourse.duration}
              onChange={(event) => this.onChangeDuration(event)}
            />
          </Item>
          <Button onPress={ this.handleSubmit.bind(this)} title="Editar curso" />
        </Form>
        </Content>
        <Footer />
    </Container>
    );
  }
}

EditCourse.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(EditCourse);
