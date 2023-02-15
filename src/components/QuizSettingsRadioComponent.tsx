import { Flex, Radio, Text } from "@mantine/core";
import React, { Fragment } from "react";
import { useIntl } from "react-intl";
import { ISettingsOption } from "./ISettingsOption";
import {
  ISettingSelected,
  useSettingStoreSelector,
} from "../store/useSettingStore";

type Props = {
  setting: ISettingsOption;
};

const getDefault = (settings: ISettingSelected[], key: string) => {
  const setting = settings.find((s) => s.selected !== "" && s.key === key);
  return setting?.selected ? setting.selected : "";
};

const QuizSettingsRadioComponent = ({ setting }: Props) => {
  const { formatMessage: t } = useIntl();
  const updateSettings = useSettingStoreSelector.use.updateSettings();

  return (
    <Radio.Group
      label={`${setting.id}. ${
        setting.title ? t({ id: setting.title }) : null
      }`}
      orientation={
        setting.orientation === "horizontal" ? "horizontal" : "vertical"
      }
      name={setting.title}
      onChange={(selected) => updateSettings({ key: setting.key, selected })}
      defaultValue={
        getDefault(
          useSettingStoreSelector.use.settings(),
          setting.key
        ) as string
      }
    >
      {setting.options.map((option) => {
        return (
          <Fragment key={`${setting.id}-${option.id}`}>
            <Radio
              value={option.id}
              label={
                <Flex align="center" gap={10}>
                  {option.value?.icon}
                  <Flex direction="column">
                    <Text fz="xs" fw={500}>
                      {option.value.title
                        ? t({ id: option.value.title })
                        : null}
                    </Text>
                    <Text fz="xs">
                      {option.value.description
                        ? t({ id: option.value.description })
                        : null}
                    </Text>
                  </Flex>
                </Flex>
              }
            ></Radio>
          </Fragment>
        );
      })}
    </Radio.Group>
  );
};

export default QuizSettingsRadioComponent;
