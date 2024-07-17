import { FlatList, View, Text, StyleSheet, ActivityIndicator } from "react-native";
import data from "../Data/categories.json"
import { CategoryItem } from "./CategoryItem";
import { theme } from "../Config/Theme";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../Navigation/Routes";
import { useDispatch, useSelector } from "react-redux";
import { setCategorySelected } from "../Features/shop/shopSlice";
import { useGetCategoriesQuery } from "../Services/ShopServices";



export const Categories = () => {
  const { navigate } = useNavigation()
  const { data, isLoading, error } = useGetCategoriesQuery()
  const dispatch = useDispatch()

  const handlePress = seanso => {
    dispatch(setCategorySelected(seanso))
    navigate(ROUTE.ITEM_LIST_CATEGORY, { seanso })
  }

  return (
    <View style={styles.categories}>
      <Text style={styles.text}>Moda Infantil</Text>
      {isLoading ? (
        <View style={styles.categoriesLoading}>
          <ActivityIndicator size='small' color={theme.colors.primary[600]} />
          <Text>Cargando categorias...</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.list}
          data={data}
          horizontal
          renderItem={({ item }) => (
            <CategoryItem name={item} onPress={() => handlePress(item)}
            />
          )}
        /> 
      )}
    </View>
  )
}


const styles = StyleSheet.create({
  categoriesLoading: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  categories: {
    gap: 16,
  },
  list: {
    gap: 12,
  },
  text: {
    fontFamily: 'Sora-bold',
    color: theme.colors.primary[950],
    fontSize: 16,

  }
})
