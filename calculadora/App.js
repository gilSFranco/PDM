import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [expression, setExpression] = useState('');
  const [count, setCount] = useState(0)
  let [numbers, setNumbers] = useState([])

  const handleOperations = (value) => {
    switch(value) {
        case "=":
            setCount(eval(expression));
        case "+":
            setCount([...numbers])
        case "-":
            setCount([...numbers])
        case "*":
            setCount([...numbers])
        case "/":
            setCount([...numbers])
    }

    setExpression(antvalue => antvalue + value);
  }

  const handleNumbers = (number) => {
    setCount(antvalue => antvalue + number);

    let value = parseInt(number)
    numbers.push(value);

    console.log(numbers);
  }

  return (
    <View style={styles.container}>
      <View
          style={styles.input}
      >
          <Text style={styles.textInputUp}>{expression}</Text>
          <Text style={styles.textInputDown}>{count}</Text>
      </View>

      <TouchableOpacity
          onPress={
            () => {
                setCount(0)
                setExpression('')
                setNumbers([])
            }
          }
          style={styles.buttonEqual}
        >
          <Text style={styles.text}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.buttonEqual}
        >
          <Text style={styles.text}>Apagar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
          onPress={() => handleNumbers('7')}
          style={styles.button}
      >
          <Text style={styles.text}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          style={styles.button}
      >
          <Text style={styles.text}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          style={styles.button}
      >
          <Text style={styles.text}>9</Text>
      </TouchableOpacity>

      <TouchableOpacity
          onPress={() => handleOperations('+')}
          style={styles.button}
        >
          <Text style={styles.text}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity 
          style={styles.button}
      >
          <Text style={styles.text}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          style={styles.button}
      >
          <Text style={styles.text}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          style={styles.button}
      >
          <Text style={styles.text}>6</Text>
      </TouchableOpacity>

      <TouchableOpacity
            style={styles.button}
        >
          <Text style={styles.text}>-</Text>
      </TouchableOpacity>

      <TouchableOpacity 
          style={styles.button}
      >
          <Text style={styles.text}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          style={styles.button}
      >
          <Text style={styles.text}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          style={styles.button}
      >
          <Text style={styles.text}>3</Text>
      </TouchableOpacity>

      <TouchableOpacity
            style={styles.button}
        >
          <Text style={styles.text}>*</Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={() => handleOperations('=')}
          style={styles.buttonEqual}
        >
          <Text style={styles.text}>=</Text>
      </TouchableOpacity>

      <TouchableOpacity 
          style={styles.button}
      >
          <Text style={styles.text}>0</Text>
      </TouchableOpacity>

      <TouchableOpacity
            style={styles.button}
        >
          <Text style={styles.text}>/</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 35,
    gap: 5,
    flexWrap: "wrap"
  },
  input: {
    width: "98%",
    height: 50,
    borderRadius: 5,
    backgroundColor: "#FFF",
    paddingLeft: 10,
    marginBottom: 100
  },
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
  },
  textInputDown: {
      fontSize: 40,
      fontWeight: "500",
      color: "#000000",
      textAlign: "right",
      marginRight: 10
  },
  textInputUp: {
    fontSize: 20,
    fontWeight: "500",
    color: "#000000",
    textAlign: "right",
    marginRight: 10
}
});
