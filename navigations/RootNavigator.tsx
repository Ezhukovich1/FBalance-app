
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
// import {useDiscoverModeStore} from "../stores/DiscoverModeStore";
// import {useAppStore} from "../stores/AppStore";
import LoggedOutNavigator from "./LoggedOutNavigator";



type AuthNavParamList =
 {
  LoggedIn: undefined;
  LoggedOut: undefined;
};

const RootNavigator: React.FC = () => {
//   const isLoggedIn = useAppStore(state => state.isLoggedIn());
//   const isFakeLogin = useDiscoverModeStore(state => state.discoverMode);

  const Stack = createStackNavigator<AuthNavParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoggedOut"
        component={LoggedOutNavigator}
        options={{animationEnabled: false, headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
