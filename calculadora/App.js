import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [placeholder, setPlaceholder] = useState('')
  const [expression, setExpression] = useState('')

  const [count, setCount] = useState(0)
  let [numbers, setNumbers] = useState([])

  const handleOperations = (value) => {
    setExpression(previous => previous + value)

    switch(value) {
        case "=":
            setPlaceholder(expression + "=")
            setCount(eval(expression));
            break;
        case "+":
            console.log("+");
            setPlaceholder(expression)

            setCount(0)
            setNumbers([])
            break;
        case "-":
            console.log("-");
            setPlaceholder(expression)

            setCount(0)
            setNumbers([])
            break;
        case "*":
            console.log("*");
            setPlaceholder(expression)

            setCount(0)
            setNumbers([])
            break;
        case "/":
            console.log("/");
            setPlaceholder(expression)

            setCount(0)
            setNumbers([])
            break;
        default:
            handleNumbers(value);
            setCount([...numbers])
    }
  }

  const handleNumbers = (number) => {
    let value = parseInt(number)
    numbers.push(value);

    console.log(numbers);
  }

  const eraseLastNumber = () => {
    numbers.splice(numbers.length - 1, 1)
    console.log(numbers)
    setCount([...numbers])
  } 

  return (
    <View style={styles.container}>
      <View
          style={styles.input}
      >
          <Text style={styles.textInputUp}>{placeholder}</Text>
          <Text style={styles.textInputDown}>{count}</Text>
      </View>

      <TouchableOpacity
          onPress={
            () => {
                setCount(0)
                setExpression('')
                setPlaceholder('')
                setNumbers([])
            }
          }
          style={styles.buttonEqual}
        >
          <Text style={styles.text}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={eraseLastNumber}
          style={styles.buttonEqual}
        >
          <Text style={styles.text}>Apagar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
          onPress={() => handleOperations('7')}
          style={styles.button}
      >
          <Text style={styles.text}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={() => handleOperations('8')}
          style={styles.button}
      >
          <Text style={styles.text}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={() => handleOperations('9')}
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
          onPress={() => handleOperations('4')}
          style={styles.button}
      >
          <Text style={styles.text}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          onPress={() => handleOperations('5')}
          style={styles.button}
      >
          <Text style={styles.text}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          onPress={() => handleOperations('6')}
          style={styles.button}
      >
          <Text style={styles.text}>6</Text>
      </TouchableOpacity>

      <TouchableOpacity
            onPress={() => handleOperations('-')}
            style={styles.button}
        >
          <Text style={styles.text}>-</Text>
      </TouchableOpacity>

      <TouchableOpacity 
          onPress={() => handleOperations('1')}
          style={styles.button}
      >
          <Text style={styles.text}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity 
          onPress={() => handleOperations('2')}
          style={styles.button}
      >
          <Text style={styles.text}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={() => handleOperations('3')}
          style={styles.button}
      >
          <Text style={styles.text}>3</Text>
      </TouchableOpacity>

      <TouchableOpacity
            onPress={() => handleOperations('*')}
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
          onPress={() => handleOperations('0')}
          style={styles.button}
      >
          <Text style={styles.text}>0</Text>
      </TouchableOpacity>

      <TouchableOpacity
            onPress={() => handleOperations('/')}
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
