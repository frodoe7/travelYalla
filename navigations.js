import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import Movies from "./screens/Movies/Movies";
import Categories from "./screens/Categories/Categories";

const Stack = createStackNavigator();

function MainNavigator() {
  return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Movies" component={Movies} />
      </Stack.Navigator>)
}

export default MainNavigator;