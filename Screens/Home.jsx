import { SafeAreaView } from "react-native-safe-area-context"
import { Header } from "../Components/Header"
import { Categories } from "../Components/Categories"
import { StyleSheet } from "react-native-web"
import { Banner } from "../Components/banner"
import { Cart } from "./Cart"



export const Home = ({navigate}) => (

  <SafeAreaView style={styles.home}>
    <Banner/>
    <Categories />
  </SafeAreaView>

)

const styles = StyleSheet.create({
  home: {
    flex: 1,
    padding: 16,
    paddingTop: 0,
    gap: 32,
    backgroundColor:'white',
  },
})

