import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Applant() {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={require("./assets/icons/Menu.png")} />
                </TouchableOpacity>
                <View style={styles.icons}>
                    <TouchableOpacity>
                        <Image style={{ marginRight: 46 }} source={require("./assets/icons/Basket.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require("./assets/icons/Search.png")} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.menu}>
                <Text style={styles.text}>
                    Concept
                </Text>
                <TouchableOpacity>
                    <Text style={{...styles.text,color: "#D2D2D2",marginLeft: 65}}>
                        Popular
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{...styles.text,color: "#D2D2D2",marginLeft: 65}}>
                        New
                    </Text>
                </TouchableOpacity>
            </View>
            <Image style={{marginLeft: 33}} source={require("./assets/icons/Rectgreen.png")}/>
            <TouchableOpacity>
                <Image style={styles.filter} source={require("./assets/icons/Filter.png")}/>
            </TouchableOpacity>
            <ScrollView horizontal={true}>
            {/* <TouchableOpacity style={styles.button}> */}
                <View style={styles.button}>
                <Image style={styles.image} source={require("./assets/images/Plant1.png")}/>
                <View>
                    <Text>

                    </Text>
                </View>
                <Image style={styles.image1} source={require("./assets/images/Plant2.png")}/>
                <Image style={styles.image} source={require("./assets/images/Plant1.png")}/>
          </View>
          {/* </TouchableOpacity> */}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Applant;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        marginTop: 64,
        marginHorizontal: 29,
        justifyContent: "space-between",
        alignItems: "baseline"
    },
    icons: {
        flexDirection: "row",
        alignItems: "baseline"
    },
    menu: {
        flexDirection: "row",
        marginTop: 80,
        marginLeft: 29,
    },
    text: {
        color: "black",
        fontWeight: "800",
        fontSize: 19,
    },
    filter: {
        marginLeft: 360,
        marginTop: 50,
    },
    button: {
        alignItems: "baseline",
        flexDirection: "row"
    },
    image: {
        borderRadius: 30,
        marginLeft: 40,
        marginTop: 40,
        width: 260,
        height: 406
    },
    image1: {
        marginLeft: 40,
    }
})