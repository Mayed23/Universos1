import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Button } from '../Components/button'
import { useNavigation } from '@react-navigation/native'
import { ROUTE } from '../Navigation/Routes'


export const ListAddress = () => {
  const { navigate } = useNavigation()
  const address = useSelector(state => state.auth.value.location.address)

  const goToLocationSelector = () => navigate(ROUTE.LOCATION_SELECTOR)

  return (
    <View>
      <Text>Lista de direcciones</Text>
      <Text>{address}</Text>
      <Button onPress={goToLocationSelector}>Cambiar dirección</Button>
    </View>
  )
}