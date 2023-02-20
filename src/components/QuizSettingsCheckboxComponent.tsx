import { Checkbox, Flex, Text } from "@mantine/core";
import React, { Fragment } from "react";
import { useIntl } from "react-intl";
import { ISettingsOption } from "./ISettingsOption";

type Props = {
  setting: ISettingsOption;
};

const QuizSettingsCheckboxComponent = ({ setting }: Props) => {
  const { formatMessage: t } = useIntl();
  return (
    <Checkbox.Group
      label={`${setting.id}. ${
        setting.title ? t({ id: setting.title }) : null
      }`}
      orientation={
        setting.orientation === "horizontal" ? "horizontal" : "vertical"
      }
    >
      {setting.options.map((option) => {
        return (
          <Fragment key={`${setting.id}-${option.id}`}>
            <Checkbox
              value={`${setting.id}-${option.id}`}
              label={
                <Flex align="center" gap={10}>
                  {option.value?.icon}
                  <Flex direction="column">
                    <Text fz="xs" fw={500}>
                      {option.value.title}
                    </Text>
                    <Text fz="xs">
                      {option.value.description
                        ? t({ id: option.value.description })
                        : null}
                    </Text>
                  </Flex>
                </Flex>
              }
            ></Checkbox>
          </Fragment>
        );
      })}
    </Checkbox.Group>
  );
};

export default QuizSettingsCheckboxComponent;
