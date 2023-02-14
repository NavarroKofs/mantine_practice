import React from "react";
import { AppShell, MantineProvider, Text } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderMenu } from "./components/Header";
import NavbarMain from "./components/Navbar";
import AsideComponent from "./components/AsideComponent";
import QuizStylePageComponent from "./pages/QuizStylePageComponent";
import QuizSettingsPageComponent from "./pages/QuizSettingsPageComponent";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
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
                  : theme.colors.gray[2],
            },
          })}
        >
          <Routes>
            <Route path="quiz/build" element={<div>buildQuiz</div>}></Route>
            <Route
              path="quiz/style"
              element={<QuizStylePageComponent />}
            ></Route>
            <Route
              path="quiz/settings"
              element={<QuizSettingsPageComponent />}
            ></Route>
            <Route path="/" element={<div>Hi :)</div>}></Route>
          </Routes>
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
