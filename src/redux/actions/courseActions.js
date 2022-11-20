/**
 * Author: Ander Frago Landa for Instituto Cuatrovientos
 * Date: 7/2020
 * Project: React Native Redux - 4Vientos Cursos
 * 
 * Description:
 * ===========
 * The action, a basic function called from the component
 * whenever we want the whole state of the app to be changed
 * Our action creator is a simple function returning an object (the action itself)
 * with a type attribute expressing what happened with the app.
 * 
 */
import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourse(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function deleteCourseSuccess(courseId) {
  return { type: types.DELETE_COURSE_SUCCESS, courseId };
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function saveCourse(course) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourse(savedCourse));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function deleteCourse(courseId) {
  return function(dispatch) {
    return courseApi
      .deleteCourse(courseId)
      .then( () => {
        dispatch(deleteCourseSuccess(courseId));
      })
      .catch(error => {
        throw error;
      });
  };
}
