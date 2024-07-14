import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ROUTE } from "./Routes"
import { Cart } from "../Screens/Cart"

export const CartStack = () => {
    const {
        Navigator: StacKNavigator, Screen: StackScreen } =
        createNativeStackNavigator()

        return(
            <StacKNavigator screenOptions={{
                headerTitleStyle: { fontFamily: "Sora.bold" },
                headerShadowVisible: false,
                }}
            >
                <StackScreen name = { ROUTE.CART} component={Cart} options={{
                    headerTitle: 'Cart',
                }}/>
            </StacKNavigator>
        )
}