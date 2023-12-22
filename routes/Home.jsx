import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Nearbyjobs, Popularjobs, Welcome } from "../components";
import { COLORS, SIZES } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                navigation.push("JobSearch", { searchTerm: searchTerm });
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
