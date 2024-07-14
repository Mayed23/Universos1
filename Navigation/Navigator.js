import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ShopStack } from "./ShopStack";
import { CartStack } from "./CartStack";
import { Shop } from "../assets/Imagen/icons/Shop";
import { CartShop } from "../assets/Imagen/icons/CartShop";
import { OrdersStack } from "./OrderStack";
import { OrdersShop } from "../assets/Imagen/icons/OrdersShop";

const { Navigator: StacKNavigator,  Screen: StackScreen}= createNativeStackNavigator()
const { Screen: TabsScreen, Navigator: TabsNavigator} = createBottomTabNavigator()

export const Navigator = () => (
    <NavigationContainer>
      <TabsNavigator screenOptions={{headerShown: false,
        tabBarActiveTintColor:'#68396f',
        tabBarInactiveTintColor:'#c2bdc2'
      }}>
        <TabsScreen name="ShopTab" component={ShopStack}
        options={{
          title: 'Tienda',
          tabBarIcon: ({color}) => <Shop color ={color}/>
        }}
        />
        <TabsScreen name="CartTab" component={CartStack}
        options={{ 
          title: 'Carrrito',
          tabBarIcon: ({color}) => <CartShop color ={color}/>
        }}
        />
         <TabsScreen name="OrdersTab" component={OrdersStack}
        options={{ 
          title: 'Ordenes',
          tabBarIcon: ({color}) => <OrdersShop color ={color}/>
        }}
        />
      </TabsNavigator>
       
    </NavigationContainer>
)