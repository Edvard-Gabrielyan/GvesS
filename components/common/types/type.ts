import React, { ChangeEvent, FC, ReactNode } from "react";

export interface IContainerProps {
  children: string | React.ReactNode;
}

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

export interface IGlobalDropdownProps {
  children: ReactNode;
  setOpenedTab: (bool: string) => void;
}

export interface IPropsIcon {
  height: string;
  width: string;
  fill: string;
  onClick?: () => void;
}
