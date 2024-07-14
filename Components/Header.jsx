import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../Config/Theme'


export const Header = () => (
  <View style={styles.header}>
    <Text style={styles.text}>Universos</Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    marginTop: 15,
    fontFamily: 'Sora-Bold',
    color: theme.colors.primary[950],
    fontSize: 18,
  },
})
