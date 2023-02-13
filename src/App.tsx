import { AppShell, MantineProvider } from '@mantine/core';
import { HeaderMenu } from "./components/Header";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell
        padding="md"
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        header={<HeaderMenu />}
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
        {/* Your application here */}
      </AppShell>
    </MantineProvider>
  );
}

export default App;
