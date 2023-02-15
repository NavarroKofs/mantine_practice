import React from "react";
import {
  IconLayoutList,
  IconListDetails,
  IconMessage,
} from "@tabler/icons-react";
import { ISettingsOption } from "./components/ISettingsOption";

export const settings: ISettingsOption[] = [
  {
    id: 1,
    title: "QuizFormatKey.title",
    type: "radio",
    orientation: "vertical",
    options: [
      {
        id: 1,
        values: [
          {
            id: 1,
            icon: <IconLayoutList />,
            title: "QuizFormatKey.options.one.title",
            description: "QuizFormatKey.options.one.description",
          },
        ],
      },
      {
        id: 2,
        values: [
          {
            id: 1,
            icon: <IconListDetails />,
            title: "QuizFormatKey.options.two.title",
            description: "QuizFormatKey.options.two.description",
          },
        ],
      },
      {
        id: 3,
        values: [
          {
            id: 1,
            icon: <IconMessage />,
            title: "QuizFormatKey.options.three.title",
            description: "QuizFormatKey.options.three.description",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "QuizShowingAnswers.title",
    type: "radio",
    orientation: "horizontal",
    options: [
      {
        id: 1,
        values: [
          {
            id: 1,
            icon: undefined,
            title: undefined,
            description: "QuizShowingAnswers.options.one.description",
          },
        ],
      },
      {
        id: 2,
        values: [
          {
            id: 1,
            icon: undefined,
            title: undefined,
            description: "QuizShowingAnswers.options.two.description",
          },
        ],
      },
      {
        id: 3,
        values: [
          {
            id: 1,
            icon: undefined,
            title: undefined,
            description: "QuizShowingAnswers.options.three.description",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "QuizRandomizing.title",
    type: "checkbox",
    orientation: "vertical",
    options: [
      {
        id: 1,
        values: [
          {
            id: 1,
            icon: undefined,
            title: undefined,
            description: "QuizRandomizing.options.one.description",
          },
        ],
      },
      {
        id: 2,
        values: [
          {
            id: 1,
            icon: undefined,
            title: undefined,
            description: "QuizRandomizing.options.two.description",
          },
        ],
      },
    ],
  },
];
