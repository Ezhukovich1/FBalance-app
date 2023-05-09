import {Box, Text, Input} from "native-base";
import React from "react";

type ValidationObject = {
  validation: (v: string) => boolean;
  errorText: string;
  key: string;
};

type ErrorObj = {
  errors: string[];
  setErrors: any;
};

type InputProps = React.ComponentProps <typeof Input>;

type Props = React.ComponentProps<typeof Box> & {
  onChange: (value: string) => void;
  label: string;
  labelStyles?: any;
  isDisabled?: boolean;
  value: string;
  validationObj: ValidationObject;
  errorObj: ErrorObj;
  inputProps?: InputProps;
};

export const CustomInput: React.FC<Props> = ({
  onChange,
  label,
  value,
  isDisabled = false,
  validationObj,
  errorObj,
  labelStyles,
  inputProps,
  ...rest
}) => {
  const [_value, _setValue] = React.useState("");
  const [isError, setError] = React.useState(false);
  const {errors, setErrors} = errorObj;
  const nativeOnChange = (text: string) => {
    setError(false);
    setErrors(errors.filter(i => i !== validationObj.key));
    _setValue(text);
    onChange(text);
  };

  const onBlur = () => {
    if (!validationObj.validation(_value)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  React.useEffect(() => {
    if (errors.some(i => i === validationObj.key)) {
      setError(true);
    }
  }, [errors, validationObj.key]);

  return (
    <Box position={"relative"} {...rest}>
      <Text mb={2} fontWeight={"500"} fontSize={"2xs"} color={"helper.500"} {...labelStyles}>
        {label}
      </Text>
      <Box
        backgroundColor={"white"}
        padding={1}
        borderRadius={4}
        borderWidth={2}
        height={"42px"}
        justifyContent={"center"}
        borderColor={isError ? "red" : "white"}>
        <Input
          variant={"unstyled"}
          isDisabled={isDisabled}
          fontSize={"md"}
          value={value}
          onChangeText={nativeOnChange}
          onBlur={onBlur}
          {...inputProps}
        />
      </Box>
      {isError && (
        <Box position={"absolute"} right={0}>
          <Box backgroundColor={"red"} pl={"1"} pr={"1"} borderRadius={2}>
            <Text fontSize={"2xs"} color={"white"}>
              {validationObj.errorText}
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  );
};
