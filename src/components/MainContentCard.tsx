import { Box, Container, Flex, Text } from "@mantine/core";
import React from "react";
import { useIntl } from "react-intl";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  title?: string;
};

const MainContentCard = ({ children, title = "" }: Props) => {
  const { formatMessage: t } = useIntl();
  return (
    <Container>
      <Flex direction="column" gap={5} style={{ borderTop: "1px solid gray" }}>
        <Text fw={700}>{title ? t({ id: title }) : null}</Text>
        <Box
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
          })}
        >
          {children}
        </Box>
      </Flex>
    </Container>
  );
};

export default MainContentCard;
