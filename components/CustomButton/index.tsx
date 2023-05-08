import {Box, Text} from "native-base";
import React from "react";
import {Pressable} from "react-native";

type TextProps = React.ComponentProps <typeof Text>;
type Props = React.ComponentProps <typeof Box> & {
  title: string;
  onPress: () => void;
  textProps?: TextProps;
};
export const CustomButon: React.FC<Props> = ({title = "Text", onPress, textProps, ...rest}) => {
  return <Pressable onPress={onPress}>
    <Box 
      backgroundColor={"brand.400"}
      height={"50px"}
      width={300}
      borderRadius={8}
      justifyContent={"center"}
      alignItems={"center"}
      {...rest}>
      <Text color={"white"} fontWeight={600} {...textProps}>{title}</Text>
    </Box>
  </Pressable>
};