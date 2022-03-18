import {
  ChangeEvent,
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import Input from "../../components/common/FormikController/components/Input";
import Select from "../../components/common/FormikController/components/Select";
import Radio from "../../components/common/FormikController/components/Radio/Radio";

type ComponentInfo = {
  Component: FC<any>;
  props: Record<string, any>;
};

interface IFakeSelectData {
  id?: number;
  value: string;
}

export interface IPropsFormikController {
  control: string;
  head?: string;
  hint?: string;
  name?: string;
  type?: string;
  id?: string | undefined;
  touched?: any;
  placeholder?: string;
  value: string | number;
  label?: string;
  checked?: boolean;
  onChange: (e: ChangeEvent) => void;
  onBlur?: (e: ChangeEvent) => void;
  error?: ReactNode;
  data?: IFakeSelectData[] | [];
  children?: ReactNode;
}

const useFormikController = (props: IPropsFormikController) => {
  const { control, head, data, children, error, id, label, touched, ...rest } =
    props;
  const [type, setType] = useState<string>("");
  useEffect(() => {
    setType(control);
  }, [props]);

  const controllerInfo: Record<string, ComponentInfo> = useMemo(
    () => ({
      input: {
        Component: Input,
        props: { head, children, error, touched, ...rest },
      },
      select: {
        Component: Select,
        props: { data, error, ...rest },
      },
      radio: {
        Component: Radio,
        props: { id, control, label, ...rest },
      },
    }),
    [type, props]
  );
  return {
    type,
    setType,
    componentInfo: controllerInfo[type] || { Component: null, props: {} },
  };
};

export default useFormikController;
