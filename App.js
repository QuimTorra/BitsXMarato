import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Landingpage from "./src/Screens/landingpage.js";
import Chatbot from "./src/Screens/chatbot.js";
import Info from "./src/Screens/info.js";
import Game from "./src/Screens/game.js";
import Level from "./src/Screens/level.js";
import Noticia0 from "./src/Screens/noticia0.js";
import Noticia1 from "./src/Screens/noticia1.js";
import Noticia2 from "./src/Screens/noticia2.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landingpage"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Landingpage" component={Landingpage} />
        <Stack.Screen name="Chatbot" component={Chatbot} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Level" component={Level} />
        <Stack.Screen name="Noticia0" component={Noticia0} />
        <Stack.Screen name="Noticia1" component={Noticia1} />
        <Stack.Screen name="Noticia2" component={Noticia2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
