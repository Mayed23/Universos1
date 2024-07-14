import { StyleSheet, Text, View } from 'react-native'
import { formatDate } from '../Utils/Data.js'
import { formatPrice } from '../Utils/Price'


export const OrderItem = ({ createdAt, totalPrice }) => (
  <View style={styles.orderItem}>
    <Text>{formatDate(createdAt)}</Text>
    <Text>{formatPrice(totalPrice)}</Text>
  </View>
)

export const styles = StyleSheet.create({
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  orderText: {
    fontFamily: 'Sora',
  },
})