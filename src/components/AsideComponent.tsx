import { Aside, MediaQuery } from "@mantine/core";
import React from "react";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const AsideComponent = ({ children }: Props) => {
  return (
    <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
      <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        {children}
      </Aside>
    </MediaQuery>
  );
};

export default AsideComponent;
