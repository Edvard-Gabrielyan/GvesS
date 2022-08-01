import { useFormik } from "formik";
import * as Yup from "yup";
import { useMemo } from "react";

const useSignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: Yup.object({
      username: Yup.string().required("Required Enter your Username"),
      password: Yup.string().required("Please Enter your password"),
    }),
  });

  const data = useMemo(
    () => [
      {
        id: 1,
        control: "input",
        head: "Username",
        name: "username",
        type: "text",
        style: "login",
        fullName: formik.values.username,
        handleChange: formik.handleChange,
        handleBlur: formik.handleBlur,
        error: formik.errors.username,
        touched: formik.touched.username,
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
