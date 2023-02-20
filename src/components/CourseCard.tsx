import React from "react";
import { Flex, Text } from "@mantine/core";
import { ICourseCard } from "./ICourseCard";
import { useIntl } from "react-intl";

const CourseCard = ({ title, score, type }: ICourseCard) => {
  const { formatMessage: t } = useIntl();
  return (
    <Flex style={{ height: "100%" }} align="center" direction="row">
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
        <Text fz="md">{title ? t({ id: title }) : null}</Text>
        <Text fz="md">
          {t({ id: "Score.label" })}: {score ? t({ id: score }) : null}{" "}
          {t({ id: "Type.label" })}: {type ? t({ id: type }) : null}
        </Text>
      </Flex>
    </Flex>
  );
};

export default CourseCard;
