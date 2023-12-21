import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "react-native-splash-screen";
import { loadAsync } from "react-native-fonts";

import Home from "./routes/Home";
import Profile from "./routes/Profile";
import { COLORS, icons, images } from "./constants";
import { ScreenHeaderBtn } from "./components";

const Stack = createNativeStackNavigator();

const Layout = () => {
  useEffect(() => {
    const loadFonts = async () => {
      try {
        await loadAsync({
          DMBold: require("./assets/fonts/DMSans-Bold.ttf"),
          DMMedium: require("./assets/fonts/DMSans-Medium.ttf"),
          DMRegular: require("./assets/fonts/DMSans-Regular.ttf"),
        });
        SplashScreen.hide();
      } catch (error) {
        console.log("Error: Fonts loading failed", error.message);
      }
    };
    loadFonts();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: COLORS.lightWhite,
            },
            headerTitleStyle: {
              color: COLORS.primary,
              fontWeight: "bold",
              fontSize: 25,
            },
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            ),
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
