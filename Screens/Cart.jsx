import { Text, View, FlatList, StyleSheet } from "react-native";
import cartData from "../Data/cart.json"
import { CartItem } from "../Components/CartItem";
import { formatPrice } from "../Utils/Price";
import { useState } from "react";


export const Cart =() => {
    const [cart, setCart] = useState(cartData)

    const totalPrice = cart.reduce((acc, { price, quantity }) => {
        return acc + quantity * price
    }, 0)

    const handleDelete = id => {
        setCart(cart.filter(item => item.id != id))
    }


return(
    <View style={styles.cart}>
        <FlatList
            contentContainerStyle={{ gap:32 }}
            data={cart}
            renderItem={({ item }) => (<CartItem {...item} onDelete={handleDelete} />)}

            ListEmptyComponent={<Text style={styles.MensajeText} >El carrito de compras está vacío...</Text>}
        />
        <View style={styles.total}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText}>{formatPrice (totalPrice)}</Text>
        </View>
    </View>
    )
}

export const styles = StyleSheet.create({
    cart: {
        minHeight:'100%',
        height:'100%',
        backgroundColor:'white',
    },
    total:{
        flexDirection:'row',
        justifyContent: 'space-between',
        padding: 16,
    },
    totalText:{
        fontFamily:'Sora-bold.ttf',
        fontSize:18,
    },
    MensajeText:{
        fontFamily:'Sora-bold.ttf',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',


    }

})