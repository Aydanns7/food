import { createStackNavigator } from "@react-navigation/stack"
import React from "react"

const Stack=createStackNavigator()

export const stackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
            }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
    )
}

export default stackNavigator