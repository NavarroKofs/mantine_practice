import React, { useEffect, useState } from "react";
import { Button, Flex, Group, Text, Textarea } from "@mantine/core";
import CardComponent from "./CardComponent";
import { DropzoneButton } from "./DropzoneButtonComponent";
import { InputQuestionComponent } from "./InputQuestionComponent";
import { useIntl } from "react-intl";
import { useForm } from "@mantine/form";
import { FileWithPath } from "@mantine/dropzone";
import { IChoice } from "./IChoiceQuestion";
import { IconPlus } from "@tabler/icons-react";
import { IQuestionForm } from "./IQuestionForm";

type Props = {
  id: number;
  onCancelHandler: (isCreating: boolean) => void;
  onAcceptHandler: (question: IQuestionForm) => void;
};

const QuizCreateQuestions = ({
  id,
  onCancelHandler,
  onAcceptHandler,
}: Props) => {
  const { formatMessage: t } = useIntl();
  const [mediaFile, setMediaFile] = useState<FileWithPath[]>([]);
  const [choices, setChoices] = useState<IChoice[]>([]);
  const form = useForm({
    initialValues: {
      id: id,
      text: "",
      media: mediaFile,
      choices: choices,
    },
    validate: {
      text: (value) => (value.length > 0 ? null : ""),
      choices: (choices) => {
        const filteredChoices = choices.filter((choice) => choice.value !== "");
        if (choices.length < 2 || filteredChoices.length < 2) {
          alert("You need to provide at least 2 answers");
          return true;
        }
        return false;
      },
    },
  });

  const choiceHandler = (is_checked: boolean, id: string, value: string) => {
    const index = choices.findIndex((choice) => choice.id === id);
    let newsSettings = [...choices];
    if (index > -1) {
      newsSettings[index] = {
        is_checked,
        id,
        value,
      };
    } else {
      newsSettings = [
        ...choices,
        {
          is_checked,
          id,
          value,
        },
      ];
    }
    setChoices(newsSettings);
  };

  const addNewAnswer = () => {
    if (choices.length < 4) {
      const id = Date.now().toString();
      setChoices([
        ...choices,
        {
          is_checked: false,
          id,
          value: "",
        },
      ]);
    }
  };

  const deleteAnswer = (id: string) => {
    setChoices(choices.filter((choice) => choice.id !== id));
  };

  useEffect(() => {
    form.setFieldValue("media", mediaFile);
  }, [mediaFile]);

  useEffect(() => {
    form.setFieldValue("choices", choices);
  }, [choices]);

  return (
    <Flex direction="column" gap={10} mb="lg">
      <form onSubmit={form.onSubmit((values) => onAcceptHandler(values))}>
        <Text fw={500}>{t({ id: "QuizBuildPage.section.one.title" })}</Text>
        <CardComponent
          title={t({ id: "QuizBuildPage.section.one.option.title" })}
          description={t({
            id: "QuizBuildPage.section.one.option.description",
          })}
          image="https://help.blackboard.com/sites/default/files/bb_assets_embed/19000/original_multiple_answer_student_view.png"
        />
        <Text fw={500}>{t({ id: "QuizBuildPage.section.two.title" })}</Text>
        <Flex gap={10} align="center">
          <Textarea
            required
            variant="filled"
            style={{ width: "100%" }}
            minRows={4}
            maxRows={4}
            {...form.getInputProps("text")}
          />
          <DropzoneButton onDropHandler={setMediaFile} />
        </Flex>
        <Text fw={500}>{t({ id: "QuizBuildPage.section.three.title" })}</Text>

        <Group>
          <Flex direction="column" gap={10}>
            {choices.map((choice) => {
              return (
                <InputQuestionComponent
                  key={choice.id}
                  onDeleteHandler={deleteAnswer}
                  onChangeHandler={choiceHandler}
                  id={choice.id}
                />
              );
            })}
          </Flex>
        </Group>

        {choices.length < 4 && (
          <Button
            mt={10}
            leftIcon={<IconPlus size={10} />}
            onClick={() => addNewAnswer()}
          >
            {t({ id: "AddQuestion.label" })}
          </Button>
        )}
        <Flex justify="space-between">
          <Button
            onClick={() => onCancelHandler(false)}
            color="red"
            variant="subtle"
            style={{ border: "none" }}
          >
            {t({ id: "Cancel.label" })}
          </Button>
          <Button type="submit">{t({ id: "Done.label" })}</Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default QuizCreateQuestions;
