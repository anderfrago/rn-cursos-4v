import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

import AddCourse from "../screens/CoursesScreen/AddCourse";
import EditCourse from "../screens/CoursesScreen/EditCourse";
 // https://stackoverflow.com/questions/45934293/connect-redux-function-is-not-working-with-react-native
 import  CoursesScreen  from "../screens/CoursesScreen/CoursesScreen";

const Stack = createStackNavigator();

export function ManageCoursesScreen() {
  return (
        <Stack.Navigator
        screenOptions={{
          headerShown: false,
       }}>
            <Stack.Screen name="Mostrar cursos" component={CoursesScreen} />
            <Stack.Screen name="Agregar curso" component={AddCourse} />
            <Stack.Screen name="Editar curso" component={EditCourse} /> 
        </Stack.Navigator>
  );
}
