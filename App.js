import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Navigator} from "./Navigation/Navigator.js";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Sorabold: require("./assets/Fonts/Sora-bold.ttf"),
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
    <SafeAreaProvider>
      
        <StatusBar backgroundColor="white" style="dark" />
        <Navigator/>
    </SafeAreaProvider>
  );
}
