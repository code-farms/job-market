import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "react-native-splash-screen";
import { loadAsync } from "react-native-fonts";

import Home from "./routes/Home";
import { COLORS, icons, images } from "./constants";
import { ScreenHeaderBtn } from "./components";
import JobDetails from "./routes/[id]";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Layout = () => {
  const navigation = useNavigation();
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
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
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
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="JobDetails"
        component={JobDetails}
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerTitleStyle: {
            color: COLORS.primary,
            fontWeight: "bold",
            fontSize: 25,
          },
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => navigation.goBack()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default Layout;
