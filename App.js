import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Home } from "./Screens/Home";
import { Welcome } from "./Screens/Welcome";
import { useFonts } from "expo-font";
import * as SplashScreen  from "expo-splash-screen"
import { useCallback, useEffect, useState } from "react";
import { ItemListCategory } from "./Screens/ItemListCategory";


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ screen, setScreen] = useState({path: 'Welcome', params: null })
  const [fontsLoaded, fontError] = useFonts({
    SoraMedium: require('./assets/Fonts/Sora-Medium.ttf'),
  })

  const navigate = screen => setScreen(screen)

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="white" style="dark"/>
       {/* <Home/>  */}
      {/* {screen.path = 'Welcome' ? <Welcome navigate = {navigate} /> : null}  */}
      {/* {screen.path = 'Home' ? <Home navigate = {navigate} /> : null}  */}
       {/* <Welcome/>  */}
       <ItemListCategory/>
    </SafeAreaProvider>
  )

}