import { FlatList, Text, StyleSheet } from "react-native";
import products from "../Data/products.json";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchInput} from "../Components/Search";
import { useEffect, useState } from "react";
import { ProductItem } from "../Components/ProductItem";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { ROUTE } from "../Navigation/Routes";
import { Categories } from "../Components/Categories";

export const ItemListCategories = () => {
  const {params} = useRoute()
 
  const {navigate, setOptions} = useNavigation()
  
  const [textToSearch, setTextToSearch]= useState('')
  const [productsFiltered, setProductsFiltered] = useState (products)
  
  const navigateToItemDetails = productId => navigate (ROUTE.ITEM_DETAIL, { productId } )
 
  // const capitalizeSeanso = seansoToCapitalize => {
  //   const [firstLetter, ...restLetters] = seansoToCapitalize
  //   const seanso = firstLetter.toUpperCase() + restLetters.join('')
  //   return seanso
  // }

  const handleSearch = textToSearch => {
    setTextToSearch(textToSearch)
    const productsFiltered = products.filter(product => 
      product.seanso.toLowerCase().includes(textToSearch.toLowerCase().trim())
    )
    setProductsFiltered(productsFiltered)
  }

  useEffect (() =>{
    setOptions({ tilte:params.seanso})
  }, [params.seanso])
  // // useEffect(() => setProductsFiltered(products), [products])

  // // useFocusEffect(() => {
  // //   setOptions({ title: capitalizeSeanso()})
  // // })
     
  return (
  <SafeAreaView style={styles.ItemListCategories}>
    <Text>Mayoral</Text>
    <Text style={ styles.seanso}>{params.seanso}</Text>
    <SearchInput onChangeText={setTextToSearch} paceholder="buscar....." value={textToSearch}/>
    <FlatList
      contentContainerStyle={styles.list}
      data={productsFiltered}
      key={item => item.id}
      renderItem={({ item }) => <ProductItem {...item} onPress={() => navigateToItemDetails(item.id)}/>}
    />
    {productsFiltered.length == 0 ? (
      <Text>Artículo no encontrado "{textToSearch}"</Text>
    ): null}
  </SafeAreaView>
)}

const styles = StyleSheet.create({
 
  ItemListCategories: {
    gap: 32,
    padding: 16,
    backgroundColor: 'white',
  },
  list: {
    marginStart: 15,
    alignContent: 'space-between',
    gap: 15
  },
})
