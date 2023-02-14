import { Navbar, Text } from "@mantine/core";
import React from "react";
import { IconFileInfo, IconPaint, IconSettings } from "@tabler/icons-react";
import NavbarButton from "./NavbarButton";

const NavbarMain = () => {
  return (
    <Navbar width={{ base: 100 }} p="xs" hiddenBreakpoint="sm">
      <NavbarButton>
        <IconFileInfo />
        <Text fz="xs" align="center">
          Build Quiz
        </Text>
      </NavbarButton>
      <NavbarButton>
        <IconPaint />
        <Text fz="xs" align="center">
          Style Quiz
        </Text>
      </NavbarButton>
      <NavbarButton>
        <IconSettings />
        <Text fz="xs" align="center">
          Settings
        </Text>
      </NavbarButton>
    </Navbar>
  );
};

export default NavbarMain;
