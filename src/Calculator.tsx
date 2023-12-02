// import React, { useState } from "react";
// import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// const arrBut = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
// const arrOp = ['+', '-', '*', '/', '='];
// function Calculator() {
//     const [firstNumber, setFirstNumber] = useState("");
//     const [secondNumber, setSecondNumber] = useState("");
//     const [operator, setOperator] = useState("");
//     const [result, setResult] = useState(0);
//     console.log("1", firstNumber);
//     console.log("2", secondNumber);
//     console.log("3", operator);
//     const checkOperator = (a: string, b: string, opr: string) => {
//         switch (opr) {
//             case "+":
//                 return +a + +b;
//             case "-":
//                 return +a - +b;
//             case "*":
//                 return +a * +b;
//             case "/":
//                 return +a / +b;
//             default:
//                 break;
//         }
//     }
//     const numberPress = (num: string) => {
//         if (!secondNumber && !operator) {
//             setFirstNumber(firstNumber + num);
//             setResult(firstNumber + num);
//         } else if (operator) {
//             setSecondNumber(secondNumber + num);
//             setResult(secondNumber + num);
//         }
//     };
//     const operatorPress = (opr: string) => {
//         if (firstNumber && secondNumber) {
//             const oprResult = checkOperator(firstNumber, secondNumber, operator)
//             setResult(oprResult);
//             setFirstNumber(oprResult);
//             setSecondNumber("");
//             setOperator("");
//         }
//         console.log(opr);
//         setOperator(opr);
//     };
//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.result}>
//                 <Text style={styles.resultText}>{result}</Text>
//             </View>
//             <View style={styles.actionArea}>
//                 {arrBut.map((item, index) => {
//                     return (
//                         <TouchableOpacity
//                             key={index}
//                             style={styles.button}
//                             onPress={() => numberPress(item)}>
//                             <Text style={styles.buttonText}>{item}</Text>
//                         </TouchableOpacity>
//                     );
//                 })}
//             </View>
//             <View style={styles.oprArea}>
//                 {arrOp.map((item, index) => {
//                     return (
//                         <TouchableOpacity
//                             key={index}
//                             style={styles.oprButton}
//                             onPress={() => operatorPress(item)}>
//                             <Text style={styles.buttonText}>{item}</Text>
//                         </TouchableOpacity>
//                     );
//                 })}
//             </View>
//         </SafeAreaView>
//     )
// }

// export default Calculator;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     result: {
//         backgroundColor: "white",
//         flex: 0.25,
//         justifyContent: "flex-end",
//         alignItems: "flex-end"
//     },
//     resultText: {
//         fontSize: 52,
//         color: "black",
//         fontWeight: "bold"
//     },
//     actionArea: {
//         flex: 1,
//         backgroundColor: "#F7F9D1",
//         flexDirection: "column",
//     },
//     button: {
//         width: 100,
//         height: 100,
//         backgroundColor: "#E4E88C",
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 50,
//         borderWidth: 1,
//     },
//     buttonText: {
//         fontSize: 40,
//         color: "black",
//     },
//     oprArea: {
//         width: "30%",
//         alignItems: "center",
//     },
//     oprButton: {
//         marginLeft: 550,
//         width: 100,
//         height: 100,
//         backgroundColor: "#E4E88C",
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 50,
//     },
// })

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleInput = (input) => {
    if (waitingForSecondOperand) {
      setDisplayValue(String(input));
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(input) : displayValue + input);
    }
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const handleEqual = () => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand !== null && operator) {
      const result = performCalculation();
      setDisplayValue(String(result));
      setFirstOperand(result);
      setOperator(null);
      setWaitingForSecondOperand(true);
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(displayValue);
    const inputValue1 = firstOperand;

    switch (operator) {
      case '+':
        return inputValue1 + inputValue;
      case '-':
        return inputValue1 - inputValue;
      case '*':
        return inputValue1 * inputValue;
      case '/':
        return inputValue1 / inputValue;
      default:
        return inputValue;
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text>
      <View style={styles.row}>
        <Button title="1" onPress={() => handleInput(1)} />
        <Button title="2" onPress={() => handleInput(2)} />
        <Button title="3" onPress={() => handleInput(3)} />
        <Button title="/" onPress={() => handleOperator('/')} />
      </View>
      <View style={styles.row}>
        <Button title="4" onPress={() => handleInput(4)} />
        <Button title="5" onPress={() => handleInput(5)} />
        <Button title="6" onPress={() => handleInput(6)} />
        <Button title="*" onPress={() => handleOperator('*')} />
      </View>
      <View style={styles.row}>
        <Button title="7" onPress={() => handleInput(7)} />
        <Button title="8" onPress={() => handleInput(8)} />
        <Button title="9" onPress={() => handleInput(9)} />
        <Button title="-" onPress={() => handleOperator('-')} />
      </View>
      <View style={styles.row}>
        <Button title="C" onPress={handleClear} />
        <Button title="0" onPress={() => handleInput(0)} />
        <Button title="=" onPress={handleEqual} />
        <Button title="+" onPress={() => handleOperator('+')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  display: {
    fontSize: 36,
    textAlign: 'right',
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Calculator;
