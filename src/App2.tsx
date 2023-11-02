import React from "react";
import { Image, StyleSheet, SafeAreaView, Text, View } from "react-native"

function App2(){
    return(
        <SafeAreaView style={styles.area}>
            <View>
                <Text  style={styles.text}>
                    ENJOY FRIED RICE-                 THE BEST       MEAL
                </Text>
            </View>
            <View style={styles.rectangle}>
                <Image source={require("./assets/icons/Rectangle12.png")}/>
                <Image style={{marginTop: -63}} source={require("./assets/icons/Group2.png")}/>
            </View>
            <View style={styles.image}>
                <Image source={require("./assets/images/FriedRice.png")}/>
            </View>
        </SafeAreaView>
    )
}

export default App2

const styles= StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: "#F2F3F8"
    },
    text: {
        color: "#333333",
        fontSize: 47,
        fontWeight: "800",
        marginTop: 110,
        marginLeft: 18
    },
    image: {
        marginTop: -65
    },
    rectangle: {
        marginTop: 10,
        marginLeft: 285,
        alignItems: "center"
    }
})

///Food App "page2"