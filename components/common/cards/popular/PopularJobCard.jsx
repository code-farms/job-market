import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <View
        style={{
          flexDirection: "row",
          columnGap: 16,
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
          <Image
            source={{ uri: item.employer_logo }}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </TouchableOpacity>

        <Text style={styles.companyName} numberOfLines={1}>
          Employer name
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          React js Developer
        </Text>
        <Text style={styles.location} numberOfLines={1}>
          India
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
