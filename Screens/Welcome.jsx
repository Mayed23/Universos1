import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../Components/button.jsx';
import { useNavigation } from '@react-navigation/native';
import { ROUTE } from '../Navigation/Routes.js';
import { theme } from '../Config/Theme.js';




export const Welcome = () => {
   const {navigate} = useNavigation()
  
   const handlePress = () =>{
    navigate(ROUTE.HOME)
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
    color: theme.colors.primary[950],
    gap: 4,
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  title: {
    color: theme.colors.primary[950],
    fontSize: 32,
  },
  logo: {
    flexDirection: 'row',
  },
});
