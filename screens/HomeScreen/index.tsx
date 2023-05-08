import {Box, Center, Text, VStack} from "native-base";
import React, {useState} from "react";
import {CustomButon} from "../../components/CustomButton";
import {CustomInput} from "../../components/CustomInput";
import {Wrapper} from "../../components/Wrapper";
import {useAppStore} from "../../store/AppStore";

const HomeScreen = () => {
  const logout = useAppStore(state => state.logout);
  return <Wrapper safeArea justifyContent={"center"} alignItems={"center"}>
    <Text>Home Screen</Text>
    <CustomButon onPress={logout} title={"Logout"} />
  </Wrapper>
};

export default HomeScreen;