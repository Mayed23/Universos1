import { Pressable, StyleSheet, Text } from 'react-native'
import { theme } from '../Config/Theme'

export const CategoryItem = ({ name, onPress }) => (
  <Pressable style={styles.category} onPress={onPress}>
    <Text style={styles.name}>{name}</Text>
  </Pressable>
)

const styles = StyleSheet.create({
  category: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary[200],
    borderRadius: 32,
    height: 64,
    justifyContent: 'center',
    width: 64,
  },
  name: {
    color: theme.colors.primary[800],
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
})