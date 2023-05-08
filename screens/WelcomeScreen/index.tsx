import {Box, Center, Text, VStack} from "native-base";
import React, {useState} from "react";
import {CustomButon} from "../../components/CustomButton";
import {CustomInput} from "../../components/CustomInput";
import {Wrapper} from "../../components/Wrapper";
import { useRegistration } from "../../networking/auth.hooks";
import { LoginForm } from "./views/LoginForm";
import { RegistrationForm } from "./views/RegistrationForm";

const WelcomeScreen = () => {
  const [indexView, setIndexView] = React.useState(1);
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState([]);

  const {mutate: register} = useRegistration({});

  return <Wrapper safeArea justifyContent={"center"} alignItems={"center"}>
    {indexView === 0 ? <LoginForm /> : <RegistrationForm onPress={register} />}
  </Wrapper>
};

export default WelcomeScreen;