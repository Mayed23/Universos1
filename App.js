import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./Store/Index.js";
import { MainNavigator } from "./Navigation/MainNavigator.jsx";
import { init } from "./db/index.js";



SplashScreen.preventAutoHideAsync();

init()
  .then(() => console.log('Database initialized'))
  .catch(err => console.error('Database initialization failed', err))


export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Sora-bold': require("./assets/Fonts/Sora-bold.ttf"),
  });

  useEffect(() => {
    const onLayoutRootView = async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    };
    onLayoutRootView();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar backgroundColor='white' style='dark' />
        <MainNavigator/>
      </SafeAreaProvider>
    </Provider>
  );
}
