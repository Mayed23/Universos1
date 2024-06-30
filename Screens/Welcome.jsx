import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../Components/button.jsx';



export const Welcome = () => {
   const handlePress = () => {
    navigate ({ path: 'home'})
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <Image source={require('../assets/Imagen/img_inicio.png')}/>
        <View style={styles.texts}>
         
          <Text style={styles.title}>UNIVERSOS</Text>
        
          <Text style = {styles.texts}>Moda Infantil</Text>
      </View>
      <Button onPress={handlePress}>
        Ingresar
      </Button>
    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  safeArea: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    gap: 32,
    justifyContent: 'center',
    padding: 16,
  },
  texts: {
    alignItems: 'center',
    gap: 4,
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  title: {
    color: 'black',
    fontSize: 32,
  },
  logo: {
    flexDirection: 'row',
  },
});
