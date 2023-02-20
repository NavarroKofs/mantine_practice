import { Button, Flex, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { IQuestionForm } from "../components/IQuestionForm";
import MainContentCard from "../components/MainContentCard";
import QuizCreateQuestions from "../components/QuizCreateQuestions";
import { useBuildQuizStoreSelector } from "../store/useBuildQuestionsStore";

const QuizBuildPageComponent = () => {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const { formatMessage: t } = useIntl();
  const [questions, setQuestions] = useState<IQuestionForm[]>([]);
  const [id, setId] = useState(0);
  const updateQuestions = useBuildQuizStoreSelector.use.updateQuestions();
  const sessionQuestions = useBuildQuizStoreSelector.use.questions();

  useEffect(() => {
    if (sessionQuestions.length !== 0) {
      setQuestions(sessionQuestions);
      setId(sessionQuestions[sessionQuestions.length - 1].id);
    }
  }, []);

  const createQuestion = (question: IQuestionForm) => {
    const filteredChoices = question.choices.filter(
      (choice) => choice.value !== ""
    );
    question.choices = filteredChoices;
    setQuestions([...questions, question]);
    setIsCreating(false);
    setId((id) => id + 1);
    updateQuestions([...questions, question]);
  };

  return (
    <MainContentCard title={isCreating ? `question ${id + 1}` : ""}>
      <Flex
        align="center"
        direction="column"
        gap={10}
        style={isCreating ? { display: "none" } : {}}
      >
        <Flex gap={10} align="center">
          {questions.map((question) => {
            return (
              <React.Fragment key={question.id}>
                <Text size="lg">Id: {question.id}</Text>
                <Button>Edit</Button>
              </React.Fragment>
            );
          })}
        </Flex>
        <Button style={{ width: "80%" }} onClick={() => setIsCreating(true)}>
          {t({ id: "AddQuestion.label" })}
        </Button>
      </Flex>
      {isCreating ? (
        <QuizCreateQuestions
          id={id + 1}
          onCancelHandler={setIsCreating}
          onAcceptHandler={createQuestion}
        />
      ) : (
        <></>
      )}
    </MainContentCard>
  );
};

export default QuizBuildPageComponent;
