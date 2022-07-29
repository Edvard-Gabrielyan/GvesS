import { ChangeEvent, FC, ReactNode } from "react";

export type ComponentInfo = {
  Component: FC<any>;
  props: Record<string, any>;
};

export interface IFakeSelectData {
  id?: number;
  value: string;
}

export interface IPropsFormikController {
  control: string;
  head?: string;
  name?: string;
  type?: string;
  id?: string | undefined;
  style?: string;
  touched?: any;
  value: string | number;
  label?: string;
  checked?: boolean;
  onChange: (e: ChangeEvent) => void;
  onBlur?: (e: ChangeEvent) => void;
  error?: ReactNode;
  data?: IFakeSelectData[] | [];
  children?: ReactNode;
}
