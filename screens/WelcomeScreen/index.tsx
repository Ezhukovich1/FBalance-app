import {Box, Center, HStack, Input, Text, useToast, VStack} from "native-base";
import React, {useState} from "react";
import {CustomButon} from "../../components/CustomButton";
import {CustomInput} from "../../components/CustomInput";
import {Wrapper} from "../../components/Wrapper";
import {useLogin, useRegistration} from "../../networking/auth.hooks";
import {LoginForm} from "./views/LoginForm";
import {RegistrationForm} from "./views/RegistrationForm";

const WelcomeScreen = () => {
  const [indexView, setIndexView] = React.useState(0);
  const toast = useToast();

  const {mutate: register} = useRegistration({
    onError: (error) => {
      toast.show({placement: "top", backgroundColor: "error.600", title: error.message});
    }
  });
  const {mutate: login} = useLogin({
    onError: (error) => {
      toast.show({placement: "top", backgroundColor: "error.600", title: error.message});
    }
  });

  return <Wrapper safeArea alignItems={"center"} justifyContent={"center"}>
    <HStack width={"100%"}justifyContent={"center"}>
      <CustomButon
        width={140}
        backgroundColor={"transparent"} 
        title="Login"
        textProps={{color: indexView === 0 ? "white": "text.600"}}
        onPress={() => setIndexView(0)} 
      />
      <CustomButon
        width={140}
        backgroundColor={"transparent"}
        title="Registration"
        textProps={{color: indexView === 1 ? "white": "text.600"}}
        onPress={() => setIndexView(1)} 
      />
    </HStack>
    {indexView === 0 ? <LoginForm onPress={login} /> : <RegistrationForm onPress={register} />}
  </Wrapper>
};

export default WelcomeScreen;