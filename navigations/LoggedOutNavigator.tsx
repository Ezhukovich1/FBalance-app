import {createStackNavigator, StackNavigationProp} from "@react-navigation/stack";
import React from "react";
import WelcomeScreen from "../screens/WelcomeScreen";

type LoggedOutParamList = {
  Login: undefined;
  SignUp: undefined;
};

export type LoggedOutStackNavigationProp = StackNavigationProp<LoggedOutParamList>;

const LoggedOutNavigator: React.FC = () => {
  const Stack = createStackNavigator<LoggedOutParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={WelcomeScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default LoggedOutNavigator;
