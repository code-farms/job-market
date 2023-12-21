import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { COLORS, SIZES } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import styles from "./popularjobs.style";
import useFetch from "./../../../hooks/useFetch";

const Popularjobs = () => {
  const navigation = useNavigation();

  // const [data, setdata] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  try {
    const { data, isLoading, error } = useFetch("search", {
      query: "React developer",
      num_pages: "1",
    });
  } catch (error) {
    console.log("Data fetch error : ", error.message);
  }

  // console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator color={COLORS.primary} size="large" />
        ) : error ? (
          <Text>Something went wrong!</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={(item) => (
              <TouchableOpacity
                onPress={() => {
                  handleCardPress;
                }}
              >
                <PopularJobCard item={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
