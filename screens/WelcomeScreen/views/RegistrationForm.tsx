import {Box, Center, Text, VStack} from "native-base";
import React, {useState} from "react";
import {CustomButon} from "../../../components/CustomButton";
import {CustomInput} from "../../../components/CustomInput";

export const RegistrationForm = ({onPress}) => {
  const [phone, setPhone] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState([]);

  const onRegister = async () => {
    await onPress({phone,username, password})
  };

  return <Box alignItems={"center"}>
      <Text color={"text.600"} fontWeight={600} fontSize={"lg"}>Registration</Text>
      <VStack space={3}>
        <CustomInput
          value={phone || ""}
          label={"Phone"}
          onChange={text => setPhone(text)}
          validationObj={{
            validation: () => true,
            errorText: "error",
            key: "phone",
          }}
          errorObj={{errors, setErrors}}
        />
        <CustomInput
          value={username || ""}
          label={"Username"}
          onChange={text => setUsername(text)}
          validationObj={{
            validation: () => true,
            errorText: "error",
            key: "phone",
          }}
          errorObj={{errors, setErrors}}
        />
        <CustomInput
          value={password || ""}
          label={"Password"}
          onChange={text => setPassword(text)}
          validationObj={{
            validation: () => true,
            errorText: "error",
            key: "password",
          }}
          errorObj={{errors, setErrors}}
        />
        <CustomButon title="Sign in" onPress={onRegister} mt={5} />
      </VStack>
    </Box>
};
