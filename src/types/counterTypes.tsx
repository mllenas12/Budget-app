export interface optionType {
  id: any;
  title: string;
  description: string;
  price: number;
  isAdded: boolean;
  customize?: { numOfPages: number; numOfLangs: number };
}

export interface OptionsProps {
  option: optionType;
}

export type CounterProviderProps = {
  children: React.ReactNode;
};

export type PopUpProps = {
  id: string;
};
