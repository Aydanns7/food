import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

function App() {
  return(
    <SafeAreaView style={styles.area}>
      <View style={styles.header}>
      <Image source={require("./assets/icons/Menu.png")}/>
      <View style={{flexDirection:"row",alignItems:"center"}}>
      <Image style={{marginRight: 46}} source={require("./assets/icons/Basket.png")}/>
      <Image source={require("./assets/icons/Search.png")}/>
      </View>
    </View>
      <View style={styles.menu}>
        <Text style={styles.menuText}>Concept</Text>
        <Text style={{...styles.menuText,color:"#D2D2D2"}}>
          Popular
          </Text>
        <Text style={{...styles.menuText,color:"#D2D2D2"}}>
          New
          </Text>
      </View>
      <View style={styles.filter}>
        <Image source={require("./assets/icons/Filter.png")}/>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.plant}>
          <Text>
          Gasteria Kyoryu
          </Text>
          <Image source={require("./assets/images/Plant1.png")}/>
          <View style={styles.footer}>
            <Text>
              200$
            </Text>
            <View style={styles.button}>
            <Text>
              +
            </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
  )
}
export default App

const styles = StyleSheet.create({
  area:{
    flex:1
  },
  header:{
    flexDirection: "row",
    marginHorizontal: 29,
    marginTop: 29,
    alignItems: "center",
    justifyContent: "space-between",
  },
  menu: {
    marginTop: 83,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 26,
    marginRight: 65,
  },
  menuText: {
    fontSize: 17,
    color: "black",
    fontWeight: "800",
  },
  filter: {
    alignItems: "flex-end",
    marginHorizontal: 27,
    marginTop: 47,
  },
  plant: {
    backgroundColor: "#F1F4FB",
    borderRadius: 24,
    paddingTop: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#1DA154",
    width: 82,
    height: 87,
    justifyContent: "center",
    alignItems: "center",
    borderBottomEndRadius: 24,
    borderTopLeftRadius: 24
  }
})