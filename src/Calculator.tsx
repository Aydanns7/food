import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const arrButtons = ['8', '9', '6', '7', '4', '5', '2', '3', '0', '1'];
const arrOperators = ['+', '-', '*', '/', '='];
function Calculator() {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [operator, setOperator] = useState("");
    const [result, setResult] = useState("0");
    console.log("1", firstNumber);
    console.log("2", secondNumber);
    console.log("3", operator);
    const checkOperator = (a: string, b: string, opr: string) => {
        switch (opr) {
            case "+":
                return +a + +b;
            case "-":
                return +a - +b;
            case "*":
                return +a * +b;
            case "/":
                return +a / +b;
            default:
                break;
        }
    }
    const numberPress = (num: string) => {
        if (!secondNumber && !operator) {
            setFirstNumber(firstNumber + num);
            setResult(firstNumber + num);
        } else if (operator) {
            setSecondNumber(secondNumber + num);
            setResult(secondNumber + num);
        }
    };

    const operatorPress = (opr: string) => {
        if (firstNumber && secondNumber) {
            const oprResult = checkOperator(firstNumber, secondNumber, operator)
            setResult(String(oprResult));
            setFirstNumber(String(oprResult));
            setSecondNumber("");
            setOperator("");
        }
        console.log(opr);
        setOperator(opr);
    };
    const clear = () => {
        setResult("0");
        setFirstNumber("");
        setSecondNumber("");
        setOperator("");
    }
    return (
        <SafeAreaView style={styles.area}>

            <View style={styles.result}>
                <Text style={styles.resultText}>{result}</Text>
            </View>
            <View style={styles.actionArea}>
                <View style={styles.container}>
                    <View style={styles.buttons}>
                        {arrButtons.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.button}
                                onPress={() => numberPress(item)}>
                                <Text style={styles.buttonText}> {item} </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.oprArea}>
                        <TouchableOpacity
                            style={[styles.oprButton, { backgroundColor: "#8BBD6C" }]}
                            onPress={clear}>
                            <Text style={styles.clear}> C </Text>
                            
                        </TouchableOpacity>
                        {arrOperators.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.oprButton}
                                onPress={() => operatorPress(item)} >
                                <Text style={styles.buttonText}> {item} </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Calculator;

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: "#D4EEC4",
    },
    result: {
        backgroundColor: "#D4EEC4",
        flex: 0.3,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    resultText: {
        fontSize: 60,
        color: "black",
        fontWeight: "bold",
        marginRight: 20
    },
    actionArea: {
        flex: 0.7
    },
    buttons: {
        backgroundColor: "#6BBB3A",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "65%",
        alignContent: 'space-between',
        justifyContent: "space-between",
        padding: 15,
        borderTopLeftRadius: 25,
        borderWidth: 1
    },
    button: {
        width: 100,
        height: 100,
        backgroundColor: "#B6D7A3",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 45,
        borderWidth: 1,
    },
    buttonText: {
        fontSize: 40,
        color: "black",
    },
    container: {
        flexDirection: "row",
        flex: 1
    },
    oprArea: {
        width: "35%",
        padding: 25,
        justifyContent: 'space-between',
        backgroundColor: "#87D358",
        borderTopRightRadius: 25,
        borderWidth: 1
    },
    clear: {
        color: "#0A36A4",
        fontWeight: "900",
        fontSize: 45
    },
    oprButton: {
        width: 85,
        padding: 10,
        height: 85,
        backgroundColor: "#A9E286",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 35,
        borderWidth: 1,

    },
})

// usx