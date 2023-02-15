import React from "react";
import { Burger, createStyles, Header, MediaQuery } from "@mantine/core";
import { useState } from "react";
import { headerOptions } from "../headerOptions";
import CourseCard from "./CourseCard";
import MenuOptions from "./MenuOptions";

const useStyles = createStyles(() => ({
  inner: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px 0 10px",
  },
}));

export function HeaderMenu() {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <Header height={{ base: 56 }}>
      <div className={classes.inner}>
        <CourseCard
          title="quizCard.title"
          score="quizCard.score"
          type="quizCard.type"
        />
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <MenuOptions options={headerOptions} />
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            mr="xl"
          />
        </MediaQuery>
      </div>
    </Header>
  );
}
