import { StyleSheet, Text, View } from 'react-native';

const Operations = props => {
    return(
        <View 
            style={styles.button}
        >
            <Text style={styles.text}>{props.operacao}</Text>
        </View>
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
    text: {
        fontSize: 24,
        fontWeight: "500",
        color: "#000000"
    }
})

export default Operations;