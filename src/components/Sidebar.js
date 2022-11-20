
 import React from 'react';

 import { NavigationContainer } from '@react-navigation/native';
 import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';

 import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
 import { AboutScreen } from "../screens/AboutScreen/AboutScreen";
import { ManageCoursesScreen } from './ManageCoursesScreen'

 const Drawer = createDrawerNavigator();
 export function Sidebar () {
     return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
            <Drawer.Screen name="Show courses" component={ManageCoursesScreen} />
        </Drawer.Navigator>

        </NavigationContainer>

     )
 }