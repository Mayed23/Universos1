import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Welcome } from "../Screens/Welcome"
import { Home } from "../Screens/Home"
import { ItemDetail } from "../Screens/ItemDetail"
import { ItemListCategories } from "../Screens/ItemListCategories"
import { ROUTE } from "./Routes"


const { Navigator: StacKNavigator, Screen: StackScreen } = createNativeStackNavigator()

export const ShopStack = () => (
    <StacKNavigator screenOptions={{
        headerTitleStyle: { fontFamily: "Sora.bold" },
        headerShadowVisible: false,
    }}>
        <StackScreen name={ROUTE.WELCOME} component={Welcome}
            options={{ HeadersShown: false }} />
        <StackScreen name={ROUTE.HOME} component={Home} 
        options={{ headerTitle: 'Universos Tienda', 
            headerBackVisible:'false'
        }}/>
        <StackScreen name={ROUTE.ITEM_LIST_CATEGORIES} component={ItemListCategories}
            options={{ headerTitle: 'Lista Mayoral', 
            headerBackVisible:'false'
            }} />
        <StackScreen name={ROUTE.ITEM_DETAIL} component={ItemDetail} />

    </StacKNavigator>
)
