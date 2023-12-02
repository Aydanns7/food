import React from "react";
import { Button, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

function App3(){
    let count=0;
    const foo=()=>{
        console.log("Hello")
    }
    return(
        <SafeAreaView style={styles.area}>
            <Text style={styles.text2}>
                {count}
            </Text>
            <TouchableOpacity activeOpacity={0.75} style={styles.button}>
                <Text style={styles.text}>
                    Click me
                </Text>
            </TouchableOpacity>
            <Button title="Increment"/>
            <Button title="Decrement"/>
            <Pressable style={({pressed})=>({...styles.button,opacity:pressed?0.5:1, backgroundColor: pressed ? "yellow" : "green"})}>
            {/* <Pressable style={styles.button} onPress={foo}> */}
            <Text style={styles.text1}>
                    Click me
                </Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default App3;

const styles=StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: "White",
        justifyContent: "center",
        alignItems: "center",
    },
    text2: {
        fontSize: 40,
        fontWeight: "900",
        color: "blue"
    },
    button: {
        borderRadius: 15,
        width: 250,
        backgroundColor: "tomato",
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        textTransform: "uppercase",
        fontWeight: "900"
    },
    text1: {
        color: "black",
        textTransform: "uppercase",
        fontWeight: "900"
    }
})


////TouchableOpacity