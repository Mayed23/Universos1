
import { View, Image, StyleSheet, Text } from "react-native";
import { theme } from "../Config/Theme";


export const Card = ({seanso, description, image, price}) => (
    <View style={styles.Card}>
        <Image source={{ uri: image }}
        style={styles.image}
        resizeMode="cover"
        />
        <View style={styles.info}>
            <Text style={styles.title}>{seanso}</Text>
            <Text style={styles.text}>{description}</Text>
            <Text style={styles.text}>{price}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    Card: {
        alignContent: 'center',
        borderRadius: 16,
        
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
