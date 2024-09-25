import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Operations = props => {
    return(
        <TouchableOpacity
            style={
                props.isEqual ? styles.buttonEqual : styles.button
            }
        >
            <Text style={styles.text}>{props.operacao}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        borderRadius: 5,
        backgroundColor: "#DEDEDE",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonEqual: {
        width: 165,
        height: 80,
        borderRadius: 5,
        backgroundColor: "#DEDEDE",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 24,
        fontWeight: "500",
        color: "#000000"
    }
})

export default Operations;