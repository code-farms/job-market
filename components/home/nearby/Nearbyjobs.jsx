import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import NearByJobCard from "../../common/cards/nearby/NearbyJobCard";
import { COLORS, SIZES } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import styles from "./nearbyjobs.style";
import useFetch from "./../../../hooks/useFetch";

const Nearbyjobs = () => {
  const navigation = useNavigation();

  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
          data?.map((job) => {
            return (
              <NearByJobCard
                job={job}
                key={`nearby-job-${job?.job_id}` ?? "unknown_id"}
                handleNavigate={() => {
                  navigation.push("JobDetails", { job_id: job.job_id });
                }}
              />
            );
          })
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
