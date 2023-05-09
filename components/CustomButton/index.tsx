import {Box, Text, Pressable} from "native-base";
import React from "react";
import { WINDOW_WIDTH } from "../../utils/styles";

type TextProps = React.ComponentProps <typeof Text>;
type Props = React.ComponentProps <typeof Pressable> & {
  title: string;
  onPress: () => void;
  textProps?: TextProps;
};
export const CustomButon: React.FC<Props> = ({title = "Text", onPress, textProps, ...rest}) => {
  return <Pressable 
    onPress={onPress}
    width={303}
    backgroundColor={"brand.400"}
    height={"50px"}
    borderRadius={8}
    justifyContent={"center"}
    alignItems={"center"}
    {...rest}>
      <Text color={"white"} fontWeight={600} {...textProps}>{title}</Text>
  </Pressable>
};