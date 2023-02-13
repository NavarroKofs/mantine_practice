import { Button } from "@mantine/core";
import React from "react";
import { IButtonTypes } from "./IButtonTypes";

const MenuOption = ({
  id,
  text = "",
  variant,
  color = "blue",
  radius,
}: IButtonTypes) => {
  return (
    <Button
      id={`${id}`}
      variant={variant}
      color={color}
      radius={radius}
      style={variant === "subtle" ? { border: "gray" } : {}}
    >
      {text}
    </Button>
  );
};

export default MenuOption;
