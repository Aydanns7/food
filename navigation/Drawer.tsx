import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "../src/Home"
import Details from "../src/Details"

const Drawer=createDrawerNavigator()

export const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Details" component={Details}/>
        </Drawer.Navigator>
    )
}