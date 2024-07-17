import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ShopStack } from "./ShopStack";
import { CartStack } from "./CartStack";
import { Shop } from "../assets/Imagen/icons/Shop";
import { CartShop } from "../assets/Imagen/icons/CartShop";
import { OrdersStack } from "./OrderStack";
import { OrdersShop } from "../assets/Imagen/icons/OrdersShop";

const { Screen, Navigator} = createBottomTabNavigator()

export const TabsNavigator = () => (
      <Navigator 
        screenOptions={{headerShown: false,
        tabBarActiveTintColor:'#68396f',
        tabBarInactiveTintColor:'#c2bdc2'
      }}>
        <Screen name="ShopTab" component={ShopStack}
        options={{
          title: 'Tienda',
          tabBarIcon: ({color}) => <Shop color ={color}/>
        }}
        />
        <Screen name="CartTab" component={CartStack}
        options={{ 
          title: 'Carrrito',
          tabBarIcon: ({color}) => <CartShop color ={color}/>
        }}
        />
         <Screen name="OrdersTab" component={OrdersStack}
        options={{ 
          title: 'Ordenes',
          tabBarIcon: ({color}) => <OrdersShop color ={color}/>
        }}
        />
      </Navigator>
)