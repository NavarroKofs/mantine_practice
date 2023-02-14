import React from "react";
import { AppShell, MantineProvider, Text } from "@mantine/core";
import { HeaderMenu } from "./components/Header";
import NavbarMain from "./components/Navbar";
import AsideComponent from "./components/AsideComponent";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell
        padding="md"
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        header={<HeaderMenu />}
        navbar={<NavbarMain />}
        aside={
          <AsideComponent>
            <Text>ASIDE</Text>
          </AsideComponent>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {/* Your application here */}
      </AppShell>
    </MantineProvider>
  );
}

export default App;
