
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { theme } from "../Config/Theme";


export const ProductItem = ({seanso, description, image, price, onPress}) => (
    <Pressable style={styles.ProductItem} onPress={onPress}>
        <Image source={{ uri: image }}
        style={styles.image}
        resizeMode="contain"
        />
        <View style={styles.info}>
            <Text style={styles.title}>{seanso}</Text>
            <Text style={styles.text}>{description}</Text>
            <Text style={styles.text}>{price}</Text>
        </View>
    </Pressable>
)


const styles = StyleSheet.create({
    ProductItem: {
      
        borderRadius: 16,
        maxWidth: 480,
        
    },
    
    image: {
        height: 200,
        width: 120,
        alignItems: 'center',
        backgroundColor: theme.colors.primary[50],
    },
    info: {
        gap: 4,
        paddingHorizontal: 16,
        paddingvertical: 8,
    },
    title: {

        fontWeight: 'bold',
    },
    text: {
        fontSize: 14,
    }
})
