import { createStyles, Navbar, UnstyledButton } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router";

const useStyles = createStyles((theme) => ({
  link: {
    width: "90%",
    height: "100%",
    padding: 2,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },
  section: {
    display: "flex",
    justifyContent: "center",
    padding: 5,

    "&:not(:last-of-type)": {
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
    },
  },
}));

type Props = {
  children: string | JSX.Element | JSX.Element[];
  url?: string;
};

const NavbarButton = ({ children, url = "" }: Props) => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  return (
    <Navbar.Section className={classes.section}>
      <UnstyledButton
        onClick={(e) => {
          e.preventDefault();
          navigate(url);
        }}
        className={classes.link}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </UnstyledButton>
    </Navbar.Section>
  );
};

export default NavbarButton;
