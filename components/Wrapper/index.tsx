import React from 'react';
import {Box} from "native-base";
import {LinearGradient} from 'expo-linear-gradient';

type Props  = React.ComponentProps <typeof Box>;
export const Wrapper: React.FC<Props> = ({children, ...rest}) => {
  return <LinearGradient 
    colors={['#192f6a', '#7293A0', '#192f6a']} 
    style={{flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
    }}>
    <Box flex={1} {...rest}>
        {children}
    </Box>
  </LinearGradient>
};