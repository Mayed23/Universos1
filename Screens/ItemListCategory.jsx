import { FlatList, Text, StyleSheet } from "react-native";
import products from "../Data/products.json";
import { Card } from "../Components/Card";
import { SafeAreaView } from "react-native-safe-area-context";

export const ItemListCategory = ({ navigate }) => (
  <SafeAreaView style={styles.itemListCategories}>
    <Text>Mayoral</Text>
    <FlatList
      contentContainerStyle={styles.list}
      data={products}
      renderItem={({ item }) => <Card {...item} />}
    />
  </SafeAreaView>
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
