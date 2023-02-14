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
    title: "Quiz Format",
    type: "radio",
    orientation: "vertical",
    options: [
      {
        id: 1,
        values: [
          {
            id: 1,
            icon: <IconLayoutList />,
            title: "One question at a time",
            description: "Show one question on a page at once",
          },
        ],
      },
      {
        id: 2,
        values: [
          {
            id: 1,
            icon: <IconListDetails />,
            title: "Classic",
            description: "Show several questions on a page at once",
          },
        ],
      },
      {
        id: 3,
        values: [
          {
            id: 1,
            icon: <IconMessage />,
            title: "Conversation",
            description: "Turn your quiz into a chat conversation",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Showing answers",
    type: "radio",
    orientation: "horizontal",
    options: [
      {
        id: 1,
        values: [
          {
            id: 1,
            icon: null,
            title: null,
            description: "Show answers inmediatly",
          },
        ],
      },
      {
        id: 2,
        values: [
          {
            id: 1,
            icon: null,
            title: null,
            description: "Show answers at the end",
          },
        ],
      },
      {
        id: 3,
        values: [
          {
            id: 1,
            icon: null,
            title: null,
            description: "Don't show answers",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Randomizing",
    type: "checkbox",
    orientation: "vertical",
    options: [
      {
        id: 1,
        values: [
          {
            id: 1,
            icon: null,
            title: null,
            description: "Randomize question order",
          },
        ],
      },
      {
        id: 2,
        values: [
          {
            id: 1,
            icon: null,
            title: null,
            description: "Randomize answer choice order",
          },
        ],
      },
    ],
  },
];
