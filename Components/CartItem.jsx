import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { formatPrice } from '../Utils/Price.js'

export const CartItem = ({
  id,
  brand,
  image,
  description,
  size,
  quantity,
  price,
  onDelete,
  onIncrease,
  onDecrease,
}) => (
  <View style={styles.cartItem}>
    <Image style={styles.image} source={{ uri: image }} />
    <View style={styles.info}>
      <Text>{brand}</Text>
      <Text>{description  }</Text>
      <Text>Talle: {size}</Text>
      <Text>Cantidad: {quantity}</Text>
      <Text>{formatPrice(price)}</Text>
      <View style={styles.quantityContainer}>
        <Pressable style={styles.quantityButton} onPress={() => onDecrease(id)}>
          <Text style={styles.DecreaseText}>-</Text>
        </Pressable>
        <Text style={styles.quantity}>{quantity}</Text>
        <Pressable style={styles.quantityButton} onPress={() => onIncrease(id)}>
          <Text style={styles.quantityText}>+</Text>
        </Pressable>
      </View>
      <Pressable style={styles.delete} onPress={() => onDelete(id)}>
        <Text style={styles.deleteText}>Eliminar</Text>
      </Pressable>
    </View>
  </View>
)

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  image: {
    height: 100,
    width: 160,
  },
  info: {
    gap: 8,
    flex: 1,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  quantityButton: {
    backgroundColor: '#e5e7eb',
    padding: 8,
    borderRadius: 4,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  delete: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
    width: 96,
    alignItems: 'center',
  },
  deleteText: {
    color: 'red',
    fontWeight: 'bold',
  },
})