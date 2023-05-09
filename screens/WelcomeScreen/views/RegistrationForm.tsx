import {Box, Center, Text, VStack} from "native-base";
import React, {useState} from "react";
import {CustomButon} from "../../../components/CustomButton";
import {CustomInput} from "../../../components/CustomInput";

type Props = React.ComponentProps <typeof Box> & {
  onPress: ({username, password, phone}: {username: string; password: string; phone: string}) => void;
};

export const RegistrationForm: React.FC<Props> = ({onPress, ...rest}) => {
  const [phone, setPhone] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState([]);

  const onRegister = () => {
    onPress({phone,username, password})
  };

  return <Box {...rest}>
      <VStack space={3}>
        <CustomInput
          width={"100%"}
          value={phone || ""}
          label={"Phone"}
          onChange={text => setPhone(text)}
          validationObj={{
            validation: () => true,
            errorText: "error",
            key: "phone",
          }}
          errorObj={{errors, setErrors}}
          inputProps={{keyboardType: "phone-pad"}}
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
          inputProps={{type: "password", autoCapitalize: "none"}}
        />
        <CustomButon title="Sign in" onPress={onRegister} mt={5} />
      </VStack>
    </Box>
};
