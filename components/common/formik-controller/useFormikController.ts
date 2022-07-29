import { useEffect, useMemo, useState } from "react";
import Select from "./components/Select";
import Radio from "./components/radio/Radio";
import Input from "./components/Input";
import TextArea from "./components/TextArea";
import { ComponentInfo, IPropsFormikController } from "./types";

const useFormikController = (props: IPropsFormikController) => {
  const {
    control,
    head,
    data,
    children,
    error,
    id,
    label,
    touched,
    style,
    ...rest
  } = props;
  const [type, setType] = useState<string>("");
  useEffect(() => {
    setType(control);
  }, [props]);

  const controllerInfo: Record<string, ComponentInfo> = useMemo(
    () => ({
      input: {
        Component: Input,
        props: { head, children, error, touched, style, ...rest },
      },
      select: {
        Component: Select,
        props: { head, data, error, style, ...rest },
      },
      textArea: {
        Component: TextArea,
        props: { head, control, error, touched, style, ...rest },
      },
      radio: {
        Component: Radio,
        props: { id, control, label, style, ...rest },
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
