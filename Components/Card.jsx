
import { View, Image, StyleSheet, Text } from "react-native";
import { theme } from "../Config/Theme";


export const Card = ({seanso, description,price}) => (
    <View style={styles.Card}>
        <Image source={{ url:'../assets/imagen/jersey-basico.jpg' }}
        style={styles.Image}
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
        borderRadius: 16,
    },
    
    Image: {
        height: 160,
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
