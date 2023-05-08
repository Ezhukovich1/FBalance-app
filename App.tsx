import React, {useEffect, useState} from 'react';
import {AppState} from 'react-native';
import {useAppStore} from './store/AppStore';
import {Box, Center, NativeBaseProvider} from 'native-base';
import RootNavigator from './navigations/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {theme} from './theme/theme';
import {onlineManager, QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {queries: {retry: 2}},
});

export default function App() {
  const {onAppActive, onAppBackground, onBeforeStart} = useAppStore(state => ({
    onBeforeStart: state.onBeforeStart,
    onAppActive: state.onAppActive,
    onAppBackground: state.onAppBackground,
  }));

  const [isInitialized, setInitialized] = useState(false);

  useEffect(() => {
    async function init() {
      await onBeforeStart();
      setInitialized(true);
      // RNBootSplash.hide({fade: true});
    }

    init();
  }, [onBeforeStart]);

  useEffect(() => {
    const sub = AppState.addEventListener("change", e => {
      if (e === "active") {
        onAppActive();
      } else if (e === "background") {
        onAppBackground();
      }
    });

    return () => {
      sub.remove();
    };
  }, [onAppActive, onAppBackground]);
  return (
    <NativeBaseProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
