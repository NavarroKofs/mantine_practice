import { Card, Image, Text, Group } from "@mantine/core";
import React from "react";

type Props = {
  image?: string;
  title?: string;
  description?: string;
};

const CardComponent = ({ title = "", description = "", image = "" }: Props) => {
  return (
    <Card
      shadow="sm"
      radius="md"
      withBorder
      style={{ display: "flex", gap: 10 }}
    >
      {image ? (
        <Image src={image} height={160} alt="Choose answer" fit="fill" />
      ) : null}

      <div>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{title}</Text>
        </Group>
        <Text size="sm" color="dimmed">
          {description}
        </Text>
      </div>
    </Card>
  );
};

export default CardComponent;
