import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IQuestionForm } from "../components/IQuestionForm";
import { createSelectors } from "./createSelectors";

const initialState = (): IQuestionForm[] => [];

const useBuildQuizStore = create(
  persist(
    (
      set,
      get: () => {
        questions: IQuestionForm[];
        updateQuestions: (questions: IQuestionForm[]) => void;
      }
    ) => ({
      questions: initialState(),
      updateQuestions: (questions: IQuestionForm[]) => {
        set({ questions: questions });
      },
    }),
    {
      name: "buildQuiz", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export const useBuildQuizStoreSelector = createSelectors(useBuildQuizStore);
