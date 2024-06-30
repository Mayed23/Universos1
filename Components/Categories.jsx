import { FlatList, View, Text, StyleSheet, ActivityIndicator} from "react-native";
import data from "../Data/categories.json" 
import { CategoryItem } from "./CategoryItem";
import { theme } from "../Config/Theme";



export const Categories = ({ navigate }) => (
    <View style={styles.categories}>
      <Text style={styles.text}>Moda Infantil</Text>
        <FlatList
          contentContainerStyle={styles.list}
          data={data}
          horizontal
          renderItem={({ item }) => ( 
          <CategoryItem name={item} onPress={() => navigate({ path: 'category'})} 
          />
          )}
        /> 
    </View>
)

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
        color: theme.colors.primary[800],
        fontSize: 16,
       
    }
})
