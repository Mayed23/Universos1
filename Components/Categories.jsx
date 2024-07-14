import { FlatList, View, Text, StyleSheet, ActivityIndicator} from "react-native";
import data from "../Data/categories.json" 
import { CategoryItem } from "./CategoryItem";
import { theme } from "../Config/Theme";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../Navigation/Routes";



export const Categories = () => {
  const {navigate} = useNavigation()

  return(
    <View style={styles.categories}>
      <Text style={styles.text}>Moda Infantil</Text>
        <FlatList
          contentContainerStyle={styles.list}
          data={data}
          horizontal
          renderItem={({ item }) => ( 
          <CategoryItem name={item} onPress={() => navigate(ROUTE.ITEM_LIST_CATEGORIES,{seanso:item})} 
          />
          )}
        /> 
    </View>
)}


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
