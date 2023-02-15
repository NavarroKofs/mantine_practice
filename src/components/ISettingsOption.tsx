export interface ISettingsOption {
  id: number;
  title: string;
  type: string;
  orientation: string;
  options: {
    id: number;
    values: {
      id: number;
      icon: JSX.Element | undefined;
      title: string | undefined;
      description: string;
    }[];
  }[];
}
