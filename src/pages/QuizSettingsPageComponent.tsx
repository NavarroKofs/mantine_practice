import { Group, Text } from "@mantine/core";
import React from "react";
import MainContentCard from "../components/MainContentCard";
import QuizSettingsComponent from "../components/QuizSettingsComponent";
import { settings } from "../QuizSettingsOptions";

const QuizSettingsPageComponent = () => {
  return (
    <MainContentCard>
      <Text>Settings</Text>
      <Group
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <QuizSettingsComponent settings={settings} />
      </Group>
    </MainContentCard>
  );
};

export default QuizSettingsPageComponent;
