export type BudgetProviderProps = {
  children: React.ReactNode;
};

export interface budgetType {
  name: string;
  phone: string;
  email: string;
  total: number;
  services: servicesType;
  createdAt: number;
}

export type servicesType = string[];

export type BudgetCompletedProps = {
  currentBudget: budgetType;
};

export type ServiceProps = {
  servicesProp: string[];
};

export type ArrowProps = {
  isOrdered: boolean;
};

export type SearchBarProps = {
  setQuery: (event: string) => void;
};
