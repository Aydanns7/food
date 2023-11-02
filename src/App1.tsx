import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function App1() {
    return (
        <SafeAreaView style={styles.area}>
            <View style={styles.header}>
                <Image source={require("./assets/icons/Menuicon.png")} />
                <View style={styles.search}>
                    <Image style={{ marginRight: 24 }} source={require("./assets/icons/Search.png")} />
                    <Image source={require("./assets/icons/ShoppingCartIcon.png")} />
                </View>
            </View>
            <View>
                <Text style={styles.text}>
                    DELICIOUS FOOD
                </Text>
                <Text style={styles.text1}>
                    AT YOUR DOOR STEPS
                </Text>
            </View>
            <View style={styles.menu}>
                <Image source={require("./assets/icons/AllFoodItems.png")} />
                <Image source={require("./assets/icons/RiceButton.png")} />
                <View style={styles.burger}>
                    <Image source={require("./assets/icons/FastF.png")} />
                    <Image style={{ marginTop: -45 }} source={require("./assets/icons/Burger1.png")} />
                </View>
                <Image source={require("./assets/icons/Drinks.png")} />
            </View>
            <View style={{ padding: 10 }}>
                <ScrollView horizontal={true} >
                    <View style={styles.image}>
                        <Image style={{ margin: 15 }} source={require("./assets/images/RiceCard.png")} />
                        <Image style={{ margin: 15 }} source={require("./assets/images/ZingerCard.png")} />
                        <Image style={{ margin: 15 }} source={require("./assets/images/RiceCard.png")} />
                    </View>
                </ScrollView>
            </View>

            <View style={styles.generalTextContainer}>
                <Text style={styles.text2}>
                    Popular
                </Text>
                <Text style={styles.text3}>
                    Now
                </Text>
            </View>
            <View style={styles.box}>
                <TouchableOpacity activeOpacity={0.75} style={styles.button}>
                    <View>
                        <Text style={styles.text5}>
                            Chicken Manchurian
                        </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.text6}>
                            Chinese Cuisine
                        </Text>
                        <View style={{marginRight:-60, marginBottom: 12}}>
                            <Image style={styles.rect12} source={require("./assets/icons/Rectangle12.png")}/>
                            <Image style={{marginTop:-37, marginLeft:20}} source={require("./assets/icons/Vector3.png")}/>
                        </View>
                        </View>
                        <Text style={styles.text7}>
                            $110.50
                        </Text>
                    </View>
                    <Image style={{ marginLeft: -80 }} source={require("./assets/images/Rectangle11.png")} />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
export default App1;

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: "#F2F3F8",
    },
    header: {
        flexDirection: "row",
        marginTop: 39,
        marginHorizontal: 20,
    },
    search: {
        flexDirection: "row",
        marginLeft: 275,

    },
    text: {
        color: "#333333",
        marginTop: 45,
        fontSize: 32,
        fontWeight: '800',
        marginLeft: 17
    },
    text1: {
        fontSize: 20,
        fontWeight: "500",
        marginLeft: 17,
        color: "#333333",
    },
    menu: {
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    burger: {
        alignItems: "center"
    },
    image: {
        flexDirection: "row",
    },
    generalTextContainer: {
        flexDirection: "row",
        marginLeft: 35,
    },
    text2: {
        flexDirection: "row",
        fontSize: 25,
        color: "#333333",
        fontWeight: "800",
    },
    text3: {
        color: "#333333",
        fontSize: 25,
        fontWeight: "300",
        marginLeft: 10
    },
    box: {
        alignItems: "center",
        marginTop: 25,
    },
    button: {
        borderRadius: 8,
        borderWidth: 1,
        width: 350,
        height: 90,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row-reverse",
    },
    text5: {
        fontWeight: "700",
        color: "black",
        fontSize: 17,
        marginLeft: 15,
        marginTop: 40,
    },
    text6: {
        marginLeft: 15,
        fontSize: 10,
    },
    text7: {
        fontSize: 20,
        fontWeight: "600",
        color: "black",
        marginLeft: 15,
        marginTop: -15,
        marginBottom: 40,
    },
    rect12: {
        width: 50,
        height: 50,
        marginRight: -80,
    }

})

///Food App "page1"