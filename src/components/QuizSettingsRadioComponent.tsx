import { Flex, Radio, Text } from "@mantine/core";
import React, { Fragment } from "react";
import { ISettingsOption } from "./ISettingsOption";

type Props = {
  setting: ISettingsOption;
};

const QuizSettingsRadioComponent = ({ setting }: Props) => {
  return (
    <Radio.Group
      label={`${setting.id}. ${setting.title}`}
      orientation={
        setting.orientation === "horizontal" ? "horizontal" : "vertical"
      }
      name={setting.title}
    >
      {setting.options.map((option) => {
        return (
          <Fragment key={`${setting.id}-${option.id}`}>
            {option.values.map((v) => {
              return (
                <Radio
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
                ></Radio>
              );
            })}
          </Fragment>
        );
      })}
    </Radio.Group>
  );
};

export default QuizSettingsRadioComponent;
