import { View } from "react-native";
import { SearchIcon } from "../assets/Imagen/icons/Icon-Search";
import { StyleSheet, TextInput } from "react-native";
import { theme } from "../Config/Theme";

export const SearchInput = props => (
    <View style={styles.SearchInput}>
        <SearchIcon />
        <TextInput {...props} />
    </View>
)

const styles = StyleSheet.create(
    {
        SearchInput: {
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 8,
            borderColor: theme.colors.primary[800],
            paddingHorizontal: 16,
            paddingVertical: 8,
            gap: 8,
        },
    }
)