import React from 'react';
import { ImageBackground, View, Image, Text, StyleSheet, SafeAreaViewComponent } from 'react-native';
import { theme } from '../Config/Theme';

export const Banner = () => (
   
        <ImageBackground
            source={require('../assets/banner/Banner_background.png')}
            resizeMode='cover'
            style={styles.imageBackground}>
        
            <View style={styles.banner}>

            <Image 
                source={require('../assets/banner/image_banner.png')} 
                style={styles.image}
                resizeMode='contain'
            />
                <Text style={styles.text}>Universos,{"\n"}Moda Infantil</Text>
            </View>
        </ImageBackground>
   
)

const styles = StyleSheet.create({
    imageBackground: {
        borderRadius: 16,
        overflow: 'hidden',
        width: '100%',
        alignSelf: 'center',
    },
    banner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    image: {
        width: 80, // Adjust as needed
        height: 80, // Adjust as needed
    },
    text: {
        color: theme.colors.primary[950],
        fontFamily: 'Sora.bold',
        fontSize: 24,
        marginLeft: 16,
        textAlign: 'center',
    },
});