// In App.js in a new project
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import a1 from "./source/screens/a1";
import a2 from "./source/screens/a2";
import a3 from "./source/screens/a3";
import b1 from "./source/screens/b1";
import b2 from "./source/screens/b2";
import c1 from "./source/screens/c1";
import HomeScreen from "./source/screens/Home";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="a1" component={a1} />
        <Stack.Screen name="a2" component={a2} />
        <Stack.Screen name="a3" component={a3} />
        <Stack.Screen name="b1" component={b1} />
        <Stack.Screen name="b2" component={b2} />
        <Stack.Screen name="c1" component={c1} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
