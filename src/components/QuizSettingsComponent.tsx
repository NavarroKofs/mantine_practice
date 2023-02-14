import React, { Fragment } from "react";
import { ISettingsOption } from "./ISettingsOption";
import QuizSettingsRadioComponent from "./QuizSettingsRadioComponent";
import QuizSettingsCheckboxComponent from "./QuizSettingsCheckboxComponent";

type Props = {
  settings: ISettingsOption[];
};

const QuizSettingsComponent = ({ settings }: Props) => {
  return (
    <>
      {settings.map((setting) => {
        return (
          <Fragment key={`${setting.title}-${setting.id}`}>
            {setting.type === "radio" ? (
              <QuizSettingsRadioComponent setting={setting} />
            ) : null}
            {setting.type === "checkbox" ? (
              <QuizSettingsCheckboxComponent setting={setting} />
            ) : null}
          </Fragment>
        );
      })}
    </>
  );
};

export default QuizSettingsComponent;
