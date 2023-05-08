import {Box, Center, Text, VStack} from "native-base";
import React, {useState} from "react";
import {CustomButon} from "../../../components/CustomButton";
import {CustomInput} from "../../../components/CustomInput";

export const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState([]);


  return <Box alignItems={"center"}>
      <Text color={"text.600"} fontWeight={600} fontSize={"lg"}>Login</Text>
      <VStack space={3}>
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
        <CustomButon title="Sign in" onPress={() => {}} mt={5} />
      </VStack>
    </Box>
};
