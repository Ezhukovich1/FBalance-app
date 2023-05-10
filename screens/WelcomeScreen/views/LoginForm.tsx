import {Box, Center, Text, VStack} from "native-base";
import React, {useState} from "react";
import {CustomButon} from "../../../components/CustomButton";
import {CustomInput} from "../../../components/CustomInput";
import i18n from "../../../i18n/i18n";

type Props = React.ComponentProps <typeof Box> & {
  onPress: ({username, password}: {username: string; password: string}) => void;
};

export const LoginForm: React.FC<Props> = ({onPress, ...rest}) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState([]);

  const onLogin = () => {
    onPress({username, password});
  };

  return <Box {...rest}>
      <VStack space={3}>
        <CustomInput
          value={username || ""}
          label={"Username"}
          onChange={text => setUsername(text)}
          validationObj={{
            validation: () => true,
            errorText: "error",
            key: "username",
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
          inputProps={{type: "password", autoCapitalize: "none"}}
          errorObj={{errors, setErrors}}
        />
        <CustomButon title={i18n.t("login")} onPress={onLogin} mt={5} />
      </VStack>
    </Box>
};
