import { Button } from "@mantine/core";
import React from "react";
import { useIntl } from "react-intl";
import { IButtonTypes } from "./IButtonTypes";

const MenuOption = ({
  id,
  text = "",
  variant,
  color = "blue",
  radius,
}: IButtonTypes) => {
  const { formatMessage: t } = useIntl();
  return (
    <Button
      id={`${id}`}
      variant={variant}
      color={color}
      radius={radius}
      style={variant === "subtle" ? { border: "gray" } : {}}
    >
      {text !== "" ? t({ id: text }) : null}
    </Button>
  );
};

export default MenuOption;
