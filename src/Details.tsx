import React from "react";
import {useNavigation} from "@react-navigation/native"
import { Image, StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from "react-native"

function Details() {
  const navigation=useNavigation();
  const handleNavigate=()=>{
    navigation.navigate("Home")
  }
  return (
    <SafeAreaView style={styles.area}>
      <View>
        <Text style={styles.text}>
          {"ENJOY FRIED RICE-\nTHE BEST\nMEAL"}
        </Text>
      </View>
      <View style={styles.rectangle}>
        <TouchableOpacity onPress={handleNavigate}>
        <Image source={require("./assets/images/Group.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.image}>
        <Image source={require("./assets/images/FriedRice.png")} />
      </View>
    </SafeAreaView>
  )
}

export default Details

const styles = StyleSheet.create({
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
  },
  box: {
    marginTop: -63
  }
})

///Food App "page2"
