import { useMemo, useState } from "react";
import SignIn from "../../view/sign/sign-in/SignIn";
import SignUp from "../../view/sign/sign-up/SignUp";
import ForgetPassword from "../../view/sign/forget-password/FoegetPassword";
import { IComponentProps } from "./types";

const useSign = () => {
  const [type, setType] = useState<string>("sign_in");

  const pages: Record<string, IComponentProps> = useMemo(
    () => ({
      sign_in: {
        Component: SignIn,
        props: {},
      },
      sign_up: {
        Component: SignUp,
        props: {},
      },
      forget: {
        Component: ForgetPassword,
        props: {},
      },
    }),
    [type]
  );
  return {
    componentInfo: pages[type],
    setType,
    type,
  };
};

export default useSign;
