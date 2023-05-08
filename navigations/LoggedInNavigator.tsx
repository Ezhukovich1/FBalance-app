import {createStackNavigator, StackNavigationProp} from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";

type LoggedOutParamList = {
  Home: undefined;
};

export type LoggedOutStackNavigationProp = StackNavigationProp<LoggedOutParamList>;

const LoggedInNavigator: React.FC = () => {
  const Stack = createStackNavigator<LoggedOutParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default LoggedInNavigator;
