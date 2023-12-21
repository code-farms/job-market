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

  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    navigation.navigate(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
    console.log(selectedJob);
  };

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
          <Text>Hello</Text>

          // <FlatList
          //   data={data}
          //   renderItem={({ item }) => (
          //     <PopularJobCard
          //       item={item}
          //       selectedJob={selectedJob}
          //       handleCardPress={handleCardPress}
          //     />
          //   )}
          //   keyExtractor={(item) => item?.job_id}
          //   contentContainerStyle={{ columnGap: SIZES.medium }}
          //   horizontal
          // />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
