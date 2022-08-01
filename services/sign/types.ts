import { FC } from "react";

export interface IComponentProps {
  Component: FC<any>;
  props: Record<string, any>;
}
