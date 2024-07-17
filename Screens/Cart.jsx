import { Text, View, FlatList, StyleSheet } from "react-native";
import cartData from "../Data/cartData.json"
import { CartItem } from "../Components/CartItem";
import { formatPrice } from "../Utils/Price";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, increaseQuantity, decreaseQuantity } from "../Features/cart/cartSlice";
import { usePostOrderMutation } from "../Services/ShopServices";
import { Button } from "../Components/button"


export const Cart =() => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.cart.value.user)
    const items = useSelector(state => state.cart.value.items)
    const total = useSelector(state => state.cart.value.total)
    const [triggerPost, result] = usePostOrderMutation()

    const cartIsEmpaty = items.length === 0

    const handleDelete = item => {
        dispatch(removeItem(item))
      }
    const handleIncreaseQuantity = (id, size) => {
    dispatch(increaseQuantity({ id, size }));
    };

    const handleDecreaseQuantity = (id, size) => {
    dispatch(decreaseQuantity({ id, size }));
    };  
    
    const confirmOrder = () => {
    triggerPost({ items, total, user })
    }
    

return(
    <View style={styles.cart}>
        <FlatList
            contentContainerStyle={{ gap:32 }}
            data={items}
            renderItem={({ item }) => (<CartItem {...item} 
                onDelete={() => handleDelete(item)}
                onIncrease={() => handleIncreaseQuantity(item.id, item.size)}
                onDecrease={() => handleDecreaseQuantity(item.id, item.size)}
                />)}

            ListEmptyComponent={<Text style={styles.MensajeText} >El carrito de compras está vacío...</Text>}
        />
        <View style={styles.total}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText}>{formatPrice (total)}</Text>
        </View>
        {cartIsEmpaty ? null : (
            <Button disabled={cartIsEmpaty} onPress={confirmOrder}>Confirmar Compra</Button>
        )}
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