import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { DrawerNavigator } from "../navigation/Drawer"
const Stack=createStackNavigator()
const App=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Drawer" component={DrawerNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App


