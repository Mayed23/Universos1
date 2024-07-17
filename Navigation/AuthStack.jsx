import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ROUTE }  from './Routes.js'
import { Login } from '../Screens/Login'
import { SignUp } from '../Screens/SignUp'

const { Navigator, Screen } = createNativeStackNavigator()

export const AuthStack = () => (
  <Navigator
    initialRouteName={ROUTE.LOGIN}
    screenOptions={{
      headerBackVisible: false,
      headerShadowVisible: false,
      headerTitleStyle: { fontFamily: 'Sora-bold' },
    }}
  >
    <Screen
      name={ROUTE.LOGIN}
      component={Login}
      options={{
        title: 'Universos',
      }}
    />
    <Screen
      name={ROUTE.SIGN_UP}
      component={SignUp}
      options={{
        title: 'Crear cuenta',
      }}
    />
  </Navigator>
)