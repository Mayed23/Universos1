import { ScrollView, StyleSheet, Text, View, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import products from "../Data/products.json"
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { formatPrice } from "../Utils/Price.js";
import { theme } from "../Config/Theme.js";


export const ItemDetail = () => {
  const { params } = useRoute()
  const {navigate, setOptions} = useNavigation()
  const [selectedSize, setSelectedSize] = useState()
   const { seanso, description, image, price } = products.find(
    product => product.id == params.productId)
  const SIZES = ["0-2", "3-6", "6-12", "12-18", "24m", 2, 3, 4, 6, 8, 10, 12, 14, 16]

  const handleSize = size => {
    setSelectedSize(size)
  }

  useEffect (() =>{
    setOptions({ tilte:seanso})
  }, [params.seanso])

  return (
    <SafeAreaView style={styles.itemDetail}>
      <ScrollView>
        <View style={styles.container}>
          <Image source={{ uri: image }} style={styles.image} resizeMode='contain' />
          <Text style={styles.titleSection}>
            Detalle del Artículo
          </Text>
          <View style={styles.info}> 
            <Text style={styles.text}>{seanso}</Text>
            <Text style={styles.text}>{description}</Text>
            <Text style={styles.text}>{formatPrice(price)}</Text>
          </View>
          <Text style={styles.titleSection}>Tallas</Text>
          <View style={styles.sizes}>
            {SIZES.map(size => {
              const isSelected = selectedSize == size

              return (
                <Pressable
                  key={size}
                  style={isSelected ? styles.selectedSize : styles.size}
                  onPress={() => handleSize(size)}
                >
                  <Text
                    style={
                      isSelected ? styles.selectedSizeText : styles.sizeText
                    }
                  >
                    {size}
                  </Text>
                </Pressable>
              )
            })}
             </View>
              {/* <Button onPress={handleAddToCart}>Agregar al carrito</Button> */}
            </View> 
      </ScrollView>

  </SafeAreaView >

        
)}

        const styles = StyleSheet.create({
          itemDetail: {
            paddingTop: 0,
            paddingHorizontal: 16,
            paddingBottom: 16,
          },
          container: {
            gap: 32,
          },
          image: {
            width: '100%',
            height: 320,
          },
          info: {
            gap: 16,
          },
          titleSection: {
            fontFamily: 'Sora',
          },
          text: {
            textTransform: 'capitalize',
          },
          sizes: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 16,
          },
          size: {
            borderWidth: 2,
            borderColor: theme.colors.primary[100],
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 40,
          },
          selectedSize: {
            borderColor: theme.colors.primary[200],
            borderWidth: 2,
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 40,
          },
          sizeText: {
            color: theme.colors.primary[300],
            fontWeight: 'bold',
          },
          selectedSizeText: {
            color: theme.colors.primary[800],
            fontWeight: 'bold',
          },
        })