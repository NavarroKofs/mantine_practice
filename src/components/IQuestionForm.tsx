import { FileWithPath } from "@mantine/dropzone";
import { IChoice } from "./IChoiceQuestion";

export interface IQuestionForm {
  id: number;
  text: string;
  media: string | FileWithPath[];
  choices: IChoice[];
}
