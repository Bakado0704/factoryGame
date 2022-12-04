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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import StartScreen from "./src/screens/StartScreen";
import SettingScreen from "./src/screens/SettingScreen";
import JobChangeScreen from "./src/screens/JobChangeScreen";
import GachaScreen from "./src/screens/GachaScreen";
import GameScreen from "./src/screens/GameScreen";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

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
        <ImageBackground
          source={require("./src/assets/background/bgYamagawa.png")}
          resizeMode="cover"
          style={styles.rootScreen}
        >
          <Image
            source={require("./src/assets/conveyor/cvYamagawa.png")}
            style={styles.conveyor}
          />
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                contentStyle: { backgroundColor: "transparent" },
                animation: "none",
              }}
            >
              <Stack.Screen
                name="Start"
                component={StartScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Game"
                component={GameScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Gacha"
                component={GachaScreen}
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
            </Stack.Navigator>
          </NavigationContainer>
        </ImageBackground>
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
    position: "relative",
  },
  conveyor: {
    position: "absolute",
    height: 282,
    width: "100%",
    bottom: 0,
    left: 0,
  },
});
