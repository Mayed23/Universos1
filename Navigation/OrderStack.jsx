import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { Cart } from '../screens/cart'
import { Orders } from '../Screens/Orders'
import { ROUTE } from './Routes'

const { Navigator: StackNavigator, Screen: StackScreen } =
  createNativeStackNavigator()

export const OrdersStack = () => {
  return (
    <StackNavigator
      screenOptions={{
        headerTitleStyle: { fontFamily: 'Sora-bold' },
        headerShadowVisible: false,
      }}
    >
      <StackScreen
        name={ROUTE.ORDERS}
        component={Orders}
        options={{
          headerTitle: 'Ordenes',
        }}
      />
    </StackNavigator>
  )
}