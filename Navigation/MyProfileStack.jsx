import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyProfile } from "../Screens/MyProfile";
import { ImageSelector } from "../Screens/ImagenSelector";
import { ListAddress } from "../Screens/ListAddress";
import { LocationSelector } from "../Screens/LocationSelector";
import { ROUTE } from "./Routes";


const { Navigator, Screen } = createNativeStackNavigator()

export const MyProfileStack = () => {
    return(
        <Navigator
      screenOptions={{
        headerTitleStyle: { fontFamily: 'Sora-bold' },
        headerShadowVisible: false,
      }}
    >
      <Screen
        name={ROUTE.MY_PROFILE}
        component={MyProfile}
        options={{ headerTitle: 'Mi Perfil' }}
      />
      <Screen
        name={ROUTE.IMAGE_SELECTOR}
        component={ImageSelector}
        options={{ headerTitle: 'Seleccionar imagen' }}
      />
      <Screen
        name={ROUTE.MY_LOCATION}
        component={ListAddress}
        options={{ headerTitle: 'Mi ubicación' }}
      />
      <Screen
        name={ROUTE.LOCATION_SELECTOR}
        component={LocationSelector}
        options={{ headerTitle: 'Seleccionar ubicación' }}
      />
    </Navigator>
    )
}
