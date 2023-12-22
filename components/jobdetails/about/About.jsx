import React from "react";
import { View, Text } from "react-native";

import styles from "../../../constants";

const About = () => {
  return (
    <View>
      <Text style={styles.headText}>About the job : </Text>
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  );
};

export default About;
