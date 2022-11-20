/**
 * Author: Ander Frago Landa for Instituto Cuatrovientos
 * Date: 7/2020
 * Project: React Native Redux - 4Vientos Cursos
 * 
 * Description:
 * ===========
 * 
 * Reducers are the ones in charge of updating the state of the app.
 * Redux will automatically pass the current state of the app and the action occurred.
 * It’s up to the reducer to realize if it needs to modify the state or not based on the action.type.
 * That’s why almost every time our reducer will be a function containing a switch statement,
 *  which modifies and returns the state based on what action occurred.
 *  Its important that reducers never mutate the state in place,
 * instead it should replace the keys that it needs to be changed.
 * So if you look at all the cases, we never mutate state directly
 *  but instead use Object.assign which creates new object having the target fields replaced with the updated one. 
 * 
 */
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case types.UPDATE_COURSE_SUCCESS:
      return state.map(course =>
        course.id === action.course.id ? action.course : course
      );
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.DELETE_COURSE_SUCCESS:
      return state.filter(c=> c.id !== action.courseId);
    default:
      return state;
  }
}