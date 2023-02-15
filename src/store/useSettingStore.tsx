import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { settings } from "../QuizSettingsOptions";
import { createSelectors } from "./createSelectors";

export interface ISettingSelected {
  key: string;
  selected: string | string[];
}

const initialState = (): ISettingSelected[] => {
  const objectKeys = settings.map((setting) => {
    return {
      key: setting.key,
      selected: "",
    };
  });
  return objectKeys;
};

const useSettingStore = create(
  persist(
    (
      set,
      get: () => {
        settings: ISettingSelected[];
        updateSettings: (setting: ISettingSelected) => void;
      }
    ) => ({
      settings: initialState(),
      updateSettings: (setting: ISettingSelected) => {
        const settingIndex = get().settings.findIndex(
          (s) => s.key === setting.key
        );
        const newsSettings = [...get().settings];
        newsSettings[settingIndex] = setting;
        set({ settings: newsSettings });
      },
    }),
    {
      name: "settings", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export const useSettingStoreSelector = createSelectors(useSettingStore);
