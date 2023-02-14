import { Checkbox, Flex, Text } from "@mantine/core";
import React, { Fragment } from "react";
import { ISettingsOption } from "./ISettingsOption";

type Props = {
  setting: ISettingsOption;
};

const QuizSettingsCheckboxComponent = ({ setting }: Props) => {
  return (
    <Checkbox.Group
      label={`${setting.id}. ${setting.title}`}
      orientation={
        setting.orientation === "horizontal" ? "horizontal" : "vertical"
      }
    >
      {setting.options.map((option) => {
        return (
          <Fragment key={`${setting.id}-${option.id}`}>
            {option.values.map((v) => {
              return (
                <Checkbox
                  key={`${setting.id}-${option.id}-${v.id}`}
                  value={setting.id}
                  label={
                    <Flex align="center" gap={10}>
                      {v?.icon}
                      <Flex direction="column">
                        <Text fz="xs" fw={500}>
                          {v.title}
                        </Text>
                        <Text fz="xs">{v.description}</Text>
                      </Flex>
                    </Flex>
                  }
                ></Checkbox>
              );
            })}
          </Fragment>
        );
      })}
    </Checkbox.Group>
  );
};

export default QuizSettingsCheckboxComponent;
