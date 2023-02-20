import { useSortable } from "@dnd-kit/sortable";
import { Button, createStyles, Flex, TextInput } from "@mantine/core";
import { IconCheck, IconTrash, IconDragDrop } from "@tabler/icons-react";
import React, { useState } from "react";
import { useIntl } from "react-intl";
import { CSS } from "@dnd-kit/utilities";

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
  const { classes, theme } = useStyles();
  const [isSelected, setIsSelected] = useState(false);
  const [text, setText] = useState("");

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const onClickBtnSelectHandler = () => {
    setIsSelected((value) => {
      onChangeHandler(!value, id, text);
      return !value;
    });
  };

  return (
    <Flex direction="row" gap="md" style={style} align="center" wrap="wrap">
      <Button
        radius="xl"
        variant={isSelected ? "filled" : "subtle"}
        className={classes.button}
        onClick={() => onClickBtnSelectHandler()}
      >
        <IconCheck style={{ position: "absolute", left: 6 }} />
      </Button>
      <div ref={setNodeRef} {...attributes} {...listeners}>
        <IconDragDrop color={theme.colors.gray[5]} />
      </div>
      <Flex align="center" gap={10} wrap="wrap">
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
