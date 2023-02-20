import { Button, createStyles, Flex, TextInput } from "@mantine/core";
import { IconCheck, IconTrash } from "@tabler/icons-react";
import React, { useState } from "react";
import { useIntl } from "react-intl";

type Props = {
  id: string;
  onChangeHandler: (is_checked: boolean, id: string, value: string) => void;
  onDeleteHandler: (id: string) => void;
};

const useStyles = createStyles((theme) => ({
  button: {
    border: "1px gray solid",
    borderColor: theme.colors.gray[4],
  },
}));

export const InputQuestionComponent = ({
  id,
  onChangeHandler,
  onDeleteHandler,
}: Props) => {
  const { formatMessage: t } = useIntl();
  const { classes } = useStyles();
  const [isSelected, setIsSelected] = useState(false);
  const [text, setText] = useState("");

  return (
    <Flex direction="row" gap="md">
      <Button
        radius="xl"
        variant={isSelected ? "filled" : "subtle"}
        className={classes.button}
        onClick={() => {
          setIsSelected((value) => {
            onChangeHandler(!value, id, text);
            return !value;
          });
        }}
      >
        <IconCheck style={{ position: "absolute", left: 6 }} />
      </Button>
      <Flex align="center" gap={10}>
        <TextInput
          autoComplete="nope"
          onChange={(e) => {
            setText(e.target.value);
            onChangeHandler(isSelected, id, e.target.value);
          }}
        />
        <Button
          color="red"
          variant="outline"
          style={{ borderColor: "red" }}
          leftIcon={<IconTrash size={14} />}
          onClick={() => onDeleteHandler(id)}
        >
          {t({ id: "Delete.label" })}
        </Button>
      </Flex>
    </Flex>
  );
};
