import React from "react";
import { Flex, Text } from "@mantine/core";
import { ICourseCard } from "./ICourseCard";

const CourseCard = ({ title, score, type }: ICourseCard) => {
  return (
    <Flex
      style={{ height: "100%", width: "50%" }}
      align="center"
      direction="row"
    >
      <div
        style={{
          width: "10%",
          minWidth: 100,
          height: "80%",
          backgroundColor: "gray",
          margin: "10px 0",
        }}
      ></div>
      <Flex
        style={{ height: "100%", margin: "0 20px" }}
        direction="column"
        justify="center"
      >
        <Text fz="md">{title}</Text>
        <Text fz="md">
          Score: {score} Type: {type}
        </Text>
      </Flex>
    </Flex>
  );
};

export default CourseCard;
