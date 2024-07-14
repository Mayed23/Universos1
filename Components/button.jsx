import { Pressable, StyleSheet, Text } from 'react-native'
import { theme } from '../Config/Theme'

export const Button = ({ children, onPress }) => (
  <Pressable onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{children}</Text>
  </Pressable>
)

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary[200],
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: theme.colors.primary[950],
    fontSize: 16,
    fontWeight: 'bold',
  },
})