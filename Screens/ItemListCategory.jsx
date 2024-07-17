import { FlatList, Text, StyleSheet, ActivityIndicator, View } from "react-native";
import { SearchInput } from "../Components/Search";
import { useEffect, useState } from "react";
import { ProductItem } from "../Components/ProductItem";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { ROUTE } from "../Navigation/Routes";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../Services/ShopServices.js";
import { theme } from "../Config/Theme.js";


export const ItemListCategory = () => {
  const { navigate, setOptions } = useNavigation()
  const [textToSearch, setTextToSearch] = useState('')
  const category = useSelector(state => state.shop.categorySeleted)
  const { data: products, isloading } = useGetProductsByCategoryQuery(category)
  const [productsFiltered, setProductsFiltered] = useState(products)

  const navigateToItemDetails = productId =>
    navigate(ROUTE.ITEM_DETAIL, { productId })

  const capitalizeSeanso = seansoToCapitalize => {
    const [firstLetter, ...restLetters] = seansoToCapitalize
    const seanso = firstLetter.toUpperCase() + restLetters.join('')
    return seanso
  }


  const handleSearch = textToSearch => {
    setTextToSearch(textToSearch)
    const productsFiltered = products.filter(product =>
      product.description.toLowerCase().includes(textToSearch.toLowerCase().trim())
    )
    setProductsFiltered(productsFiltered)
  }

  useEffect(() => setProductsFiltered(products), [products])

  useFocusEffect(() => {
    setOptions({ title: capitalizeSeanso(category) })
  })

  if (isloading) {
    return (
      <View style={styles.ItemListCategory}>
        <ActivityIndicator size='large' color={theme.colors.primary[700]} />
        <Text>Cargando.....</Text>
      </View>
    )
  }

  return (
    <View style={styles.ItemListCategory}>
      <Text>Mayoral</Text>
      <SearchInput onChangeText={handleSearch} paceholder="Buscar....." value={textToSearch} />

      <FlatList
        contentContainerStyle={styles.list}
        data={productsFiltered}
        key={item => item.id}
        renderItem={({ item }) => (
          <ProductItem {...item}
            onPress={() => navigateToItemDetails(item.id)} />
        )}
      />
      {productsFiltered && productsFiltered.length == 0 ? (
        <Text>
          No se encuentra lo que busca....."{textToSearch}"
        </Text>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({

  ItemListCategory: {
    gap: 32,
    padding: 16,
    backgroundColor: 'white',
  },
  list: {
    marginStart: 15,
    alignContent: 'space-between',
    gap: 15
  },
  seanso: {
    fontFamily: 'Sore',
    fontSize: 18,
    textTransform: 'capitalize',
    textAlign: 'center',
  },

})
