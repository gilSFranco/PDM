import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [baseMaior, setMaiorBase] = useState('')
  const [baseMenor, setMenorBase] = useState('')
  const [altura, setAltura] = useState('')
  const [area, setArea] = useState(null)

  const calcularArea = () => {
    const baseMaiorNum = parseFloat(baseMaior)
    const baseMenorNum = parseFloat(baseMenor)
    const alturaNum = parseFloat(altura)

    if(!isNaN(baseMaiorNum) && !isNaN(baseMenorNum) && !isNaN(alturaNum)) {
      const resultado = ((baseMaiorNum + baseMenorNum) * alturaNum) / 2
      setArea(resultado)
    } else {
      setArea(0)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcular a area de um trapézio!</Text>

      <TextInput 
        style={styles.input} 
        placeholder='Base Maior'
        onChangeText={setMaiorBase}
        keyboardType='numeric'
        value={baseMaior}
      />
      <TextInput 
        style={styles.input} 
        placeholder='Base Menor'
        onChangeText={setMenorBase}
        keyboardType='numeric'
        value={baseMenor}
      />
      <TextInput 
        style={styles.input}
        placeholder='Altura'
        onChangeText={setAltura}
        keyboardType='numeric'
        value={altura}
      />

      <Button 
        title='Calcular'
        onPress={calcularArea}
      />
      <Text>{area}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '80%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    width: '80%'
  },
  result: {
    fontSize: 18,
    marginTop: 20
  }
});
