export interface ISettingsOption {
  key: string;
  id: number;
  title: string;
  type: string;
  orientation: string;
  options: {
    id: string;
    value: {
      icon: JSX.Element | undefined;
      title: string | undefined;
      description: string;
    };
  }[];
}
