import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useCallback, useState } from "react";
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../components";
import { icons, SIZES, COLORS } from "../constants";
import useFetch from "../hooks/useFetch";

import { useRoute } from "@react-navigation/native";

const JobDetails = () => {
  const params = useRoute();

  console.log(params);
  // const { data, isLoding, error, refetch } = useFetch("job-details", {
  //   job_id: params.params.job_id,
  // });

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);
  console.log(params);
  return (
    <SafeAreaView style={{ flex: "1", backgroundColor: COLORS.lightWhite }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshcontrol={<RefreshControl />}
      ></ScrollView>
    </SafeAreaView>
  );
};

export default JobDetails;
