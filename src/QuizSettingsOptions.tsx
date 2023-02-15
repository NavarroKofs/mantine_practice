import React from "react";
import {
  IconLayoutList,
  IconListDetails,
  IconMessage,
} from "@tabler/icons-react";
import { ISettingsOption } from "./components/ISettingsOption";

export const settings: ISettingsOption[] = [
  {
    key: "QuizFormatKey",
    id: 1,
    title: "QuizFormatKey.title",
    type: "radio",
    orientation: "vertical",
    options: [
      {
        id: "QuizFormatKey.options.one",
        value: {
          icon: <IconLayoutList />,
          title: "QuizFormatKey.options.one.title",
          description: "QuizFormatKey.options.one.description",
        },
      },
      {
        id: "QuizFormatKey.options.two",
        value: {
          icon: <IconListDetails />,
          title: "QuizFormatKey.options.two.title",
          description: "QuizFormatKey.options.two.description",
        },
      },
      {
        id: "QuizFormatKey.options.three",
        value: {
          icon: <IconMessage />,
          title: "QuizFormatKey.options.three.title",
          description: "QuizFormatKey.options.three.description",
        },
      },
    ],
  },
  {
    key: "QuizShowingAnswers",
    id: 2,
    title: "QuizShowingAnswers.title",
    type: "radio",
    orientation: "horizontal",
    options: [
      {
        id: "QuizShowingAnswers.options.one",
        value: {
          icon: undefined,
          title: undefined,
          description: "QuizShowingAnswers.options.one.description",
        },
      },
      {
        id: "QuizShowingAnswers.options.two",
        value: {
          icon: undefined,
          title: undefined,
          description: "QuizShowingAnswers.options.two.description",
        },
      },
      {
        id: "QuizShowingAnswers.options.three",
        value: {
          icon: undefined,
          title: undefined,
          description: "QuizShowingAnswers.options.three.description",
        },
      },
    ],
  },
  {
    key: "QuizRandomizing",
    id: 3,
    title: "QuizRandomizing.title",
    type: "checkbox",
    orientation: "vertical",
    options: [
      {
        id: "QuizRandomizing.options.one",
        value: {
          icon: undefined,
          title: undefined,
          description: "QuizRandomizing.options.one.description",
        },
      },
      {
        id: "QuizRandomizing.options.two",
        value: {
          icon: undefined,
          title: undefined,
          description: "QuizRandomizing.options.two.description",
        },
      },
    ],
  },
];
