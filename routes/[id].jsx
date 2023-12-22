import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useState } from "react";
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  Specifics,
} from "../components";
import { icons, SIZES, COLORS } from "../constants";
import useFetch from "../hooks/useFetch";

import { useRoute } from "@react-navigation/native";

const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = () => {
  const params = useRoute();

  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.params.job_id,
  });

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const displayTabcontent = () => {
    switch (activeTab) {
      case "Qualification":
        return (
          <Specifics
            title="Qualifications"
            points={data[0].job_highlights?.Qualifications ?? [N / A]}
          />
        );
      case "About":
        return (
          <JobAbout info={data[0].job_description ?? "No data provided."} />
        );
      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            points={data[0].job_highlights?.Responsibilities ?? [N / A]}
          />
        );
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.lightWhite }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshcontrol={<RefreshControl />}
      >
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong !</Text>
        ) : data.length === 0 ? (
          <Text>NO Data</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company
              companyLogo={data[0].employer_logo}
              jobTitle={data[0].employer_title}
              companyName={data[0].employer_name}
              location={data[0].job_country}
            />
            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </View>
        )}
      </ScrollView>

      <JobFooter
        url={
          data[0].job_google_link ?? "http://careers.google.com/jobs/results"
        }
      />
    </SafeAreaView>
  );
};

export default JobDetails;
