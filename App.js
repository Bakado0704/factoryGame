import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import StartScreen from "./src/screens/StartScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import startScreen from "./src/screens/StartScreen";
import JobChangeScreen from "./src/screens/JobChangeScreen";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

let screen = <StartScreen />;

export default function App() {
  const [fontsLoaded] = useFonts({
    MochiyPop: require("./src/assets/fonts/MochiyPopPOne-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar hidden />
      <View style={styles.rootScreen}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Start"
              component={startScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="JobChange"
              component={JobChangeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Gacha"
              component={startScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

{
  /* <View style={styles.rootScreen}>
<ImageBackground
  source={require("./src/assets/background/bgYamagawa.png")}
  resizeMode="cover"
  style={styles.rootScreen}
>
  <Image
    source={require("./src/assets/conveyor/cvYamagawa.png")}
    style={styles.conveyor}
  />
  <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
</ImageBackground>
</View> */
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
