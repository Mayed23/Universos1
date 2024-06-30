import { SafeAreaView } from "react-native-safe-area-context"
import { Header } from "../Components/Header"
import { Categories } from "../Components/Categories"
import { StyleSheet } from "react-native-web"



export const Home = () => (

  <SafeAreaView style={styles.home}>
    <Header />
    <Categories />
   
  </SafeAreaView>

)

const styles = StyleSheet.create({
  home: {
    flex: 1,
    padding: 16,
    gap: 32,
  },
})

