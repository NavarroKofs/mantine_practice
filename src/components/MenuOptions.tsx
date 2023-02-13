import React from 'react'
import { Flex } from "@mantine/core";
import { IButtonTypes } from "./IButtonTypes";
import MenuOption from "./MenuOption";

const MenuOptions = (props: { options: IButtonTypes[] }) => {
  return (
    <Flex
      style={{ height: "100%", width: "50%" }}
      align="center"
      direction="row"
      gap="md"
      justify="flex-end"
    >
      {props.options.map((option) => {
        return (
          <MenuOption
            key={`${option.id}-${option.variant}-${option.text}`}
            id={option.id}
            text={option.text}
            variant={option.variant}
            color={option.color}
            radius={option.radius}
          />
        );
      })}
    </Flex>
  );
};

export default MenuOptions;
