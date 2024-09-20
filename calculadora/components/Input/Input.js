import { StyleSheet, Text, View } from 'react-native';

const Input = props => {
    return(
        <View
            style={styles.input}
        >
            <Text style={styles.text}></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: "98%",
        height: 50,
        borderRadius: 5,
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DEDEDE",
        paddingLeft: 10,
        marginBottom: 50
    },
    text: {
        fontSize: 20,
        fontWeight: "500",
        color: "#000000"
    }
})

export default Input;