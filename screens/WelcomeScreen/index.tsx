import { Center, Text} from "native-base";
import React, {useState} from "react";
import { Wrapper } from "../../components/Wrapper";
import { LoginView } from "./views/LoginView";

const WelcomeScreen = () => {
  const [indexView, setIndexView] = useState(0);
  return <Wrapper safeArea>
    <Center>
      {indexView === 0 && <LoginView />}
    </Center>
  </Wrapper>
};

export default WelcomeScreen;