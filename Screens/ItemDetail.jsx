import { ScrollView, StyleSheet, Text, View, Pressable, Image, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import products from "../Data/products.json"
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { formatPrice } from "../Utils/Price.js";
import { theme } from "../Config/Theme.js";
import { Button } from "../Components/button.jsx";
import { useDispatch } from "react-redux";
import { addItem } from "../Features/cart/cartSlice.js";
import { ROUTE } from "../Navigation/Routes.js";




export const ItemDetail = () => {
  const { params } = useRoute()
  const { goBack, setOptions, navigate } = useNavigation()
  const dispatch = useDispatch()
  const [selectedSize, setSelectedSize] = useState()
  const [modalVisible, setModalVisible] = useState(false);
  const item = products.find(product => product.id == params.productId)
  const { seanso, description, image, price } = item
  const SIZES = ["0-2", "3-6", "6-12", "12-18", "24m", 2, 3, 4, 6, 8, 10, 12, 14, 16]



  const handleSize = size => {
    setSelectedSize(size)
  }

  const handleAddToCart = () => {
    if (selectedSize) {
    dispatch(addItem({ ...item, size: selectedSize }))
    setModalVisible(true); // Mostrar el modal después de agregar Producto al carrito
  }else {
    alert("Por favor selecciona una talla");
   }
  }

  useEffect(() => {
    setOptions({ tilte: seanso })
  }, [params.description])

  return (
    <SafeAreaView style={styles.itemDetail}>
      <ScrollView>
        <View style={styles.container}>
          <Image source={{ uri: image }} style={styles.image} resizeMode='contain' />
          <Text style={styles.titleSection}>
            Detalle del Producto
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
          <Button onPress={handleAddToCart}>Agregar al carrito</Button>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Producto agregado al carrito</Text>
            <View style={styles.modalButtons}>
              <Button onPress={() => { setModalVisible(false); goBack(); }}>Volver a la tienda</Button>
              <Button onPress={() => { setModalVisible(false); {ROUTE.CART}; }}>Ir al carrito</Button>
            </View>
          </View>
        </View>
      </Modal>

    </SafeAreaView >


  )
}

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
    fontFamily: 'Sora-bold',
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
})