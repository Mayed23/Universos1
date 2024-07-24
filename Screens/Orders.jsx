import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { OrderItem } from '../Components/OrdersItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { database } from '../Firebase/database'; // Asegúrate de tener la configuración de Firebase
import { setCart } from '../Features/cart/cartSlice'; // Asegúrate de tener una acción para actualizar el carrito

export const Orders = ({ navigation }) => {
  const [Orders, setOrders] = useState([]);
  const cart = useSelector(state => state.cart.value);
  const dispatch = useDispatch();

  useEffect(() => {
    // 1. HACER GET DE LA BD DE REALTIME DATABASE DE FIREBASE
    const fetchOrders = async () => {
      try {
        const snapshot = await databbase.ref('/Orders').once('value');
        const orders = snapshot.val();
        if (orders) {
          // 2. ACTUALIZAR EL ESTADO DEL CART CON LOS DATOS OBTENIDOS
          setOrders(Object.values(orders));
          dispatch(setCart(orders)); // Asegúrate de que `setCart` esté configurado en tu cartSlice
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [dispatch]);

  useEffect(() => {
    // HACER POST DE LA BD DE REALTIME DATABASE DE FIREBASE
    const saveOrders = async () => {
      try {
        await database.ref('/orders').set(cart);
      } catch (error) {
        console.error('Error saving orders:', error);
      }
    };

    if (cart.length > 0) {
      saveOrders();
    }
  }, [cart]);
  return(
    <View style={styles.orders}>
      <FlatList
        contentContainerStyle={styles.list}
        data={Orders}
        renderItem={({ item }) => <OrderItem {...item} />}
        ListEmptyComponent={<Text>No orders</Text>}
      />
    </View>
  )
}


export const styles = StyleSheet.create({
  orders: {
    backgroundColor: 'white',
    minHeight: '100%',
  },
  list: {
    gap: 32,
  },
})