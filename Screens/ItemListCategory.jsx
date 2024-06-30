import { FlatList, View, Text, StyleSheet } from "react-native";
import products from "../Data/products.json";
import { Card } from "../Components/Card";

export const ItemListCategory = ({ navigate }) => (
  <View style={styles.itemListCategories}>
    <Text>Mayoral</Text>
    <FlatList
      contentContainerStyle={styles.list}
      data={products}
      renderItem={({ item }) => <Card {...item} />}
    />
  </View>
)

const styles = StyleSheet.create({
  brand: {
    fontFamily: 'Sora-Medium-Bold',
    fontSize: 18,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  itemListCategories: {
    gap: 32,
    padding: 16,
    backgroundColor: 'white',
  },
  list: {
    marginStart: 15,
    gap: 15
  },
})
