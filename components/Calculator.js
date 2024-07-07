import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  const handleAdd = useCallback(() => {
    setResult(parseFloat(num1) + parseFloat(num2));
  }, [num1, num2]);

  const handleSubtract = useCallback(() => {
    setResult(parseFloat(num1) - parseFloat(num2));
  }, [num1, num2]);

  const handleMultiply = useCallback(() => {
    setResult(parseFloat(num1) * parseFloat(num2));
  }, [num1, num2]);

  const handleDivide = useCallback(() => {
    setResult(parseFloat(num1) / parseFloat(num2));
  }, [num1, num2]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukan Angka 1"
        value={num1}
        onChangeText={setNum1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Masukan Angka 2"
        value={num2}
        onChangeText={setNum2}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubtract}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleMultiply}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDivide}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}>Result: {result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20232a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#61dafb',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#61dafb',
    padding: 20,
    borderRadius: 10,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#20232a',
  },
  result: {
    fontSize: 24,
    marginTop: 20,
    color: '#fff',
  },
});

export default Calculator;
