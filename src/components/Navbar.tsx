import React from "react";
import { Flex, Navbar, Text } from "@mantine/core";
import { IconFileInfo, IconPaint, IconSettings } from "@tabler/icons-react";
import NavbarButton from "./NavbarButton";
import { FormattedMessage } from "react-intl";
import { languageIcons } from "../iconLanguageOptions";

type Props = {
  onClickLanguageHandler: (data: string) => void;
};

const NavbarMain = ({ onClickLanguageHandler }: Props) => {
  return (
    <Navbar
      width={{
        sm: 80,
        lg: 100,
        base: 60,
      }}
      p="xs"
      hiddenBreakpoint="sm"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="navbarButtons">
        <NavbarButton url="quiz/build">
          <IconFileInfo />
          <Text fz="xs" align="center">
            <FormattedMessage id="NavbarBuildQuiz.label" />
          </Text>
        </NavbarButton>
        <NavbarButton url="quiz/style">
          <IconPaint />
          <Text fz="xs" align="center">
            <FormattedMessage id="NavbarStyleQuiz.label" />
          </Text>
        </NavbarButton>
        <NavbarButton url="quiz/settings">
          <IconSettings />
          <Text fz="xs" align="center">
            <FormattedMessage id="NavbarSettingsQuiz.label" />
          </Text>
        </NavbarButton>
      </div>
      <Flex direction="column" gap={5} align="center">
        <img
          src={languageIcons.english}
          style={{ width: "50%" }}
          onClick={() => onClickLanguageHandler("eng")}
        />
        <img
          src={languageIcons.spanish}
          style={{ width: "50%" }}
          onClick={() => onClickLanguageHandler("spa")}
        />
      </Flex>
    </Navbar>
  );
};

export default NavbarMain;
