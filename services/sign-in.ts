import { useFormik } from "formik";
import * as Yup from "yup";
import { useMemo } from "react";

const useSignIn = () => {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: Yup.object({
      login: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required Enter your login"),
      password: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number"
        ),
    }),
  });

  const data = useMemo(
    () => [
      {
        id: 1,
        control: "input",
        head: "Login",
        name: "login",
        type: "text",
        style: "login",
        fullName: formik.values.login,
        handleChange: formik.handleChange,
        handleBlur: formik.handleBlur,
        error: formik.errors.login,
        touched: formik.touched.login,
      },
      {
        id: 2,
        control: "input",
        head: "Password",
        name: "password",
        type: "text",
        style: "login",
        fullName: formik.values.password,
        handleChange: formik.handleChange,
        handleBlur: formik.handleBlur,
        error: formik.errors.password,
        touched: formik.touched.password,
      },
    ],
    [formik]
  );

  return { data, onSubmit: formik.handleSubmit };
};

export default useSignIn;
