import { useFormik } from "formik";
import * as Yup from "yup";
import { useMemo } from "react";

const useSignUp = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
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
        head: "Username",
        name: "username",
        type: "text",
        style: "username",
        fullName: formik.values.username,
        handleChange: formik.handleChange,
        handleBlur: formik.handleBlur,
        error: formik.errors.username,
        touched: formik.touched.username,
      },
      {
        id: 2,
        control: "input",
        head: "Email",
        name: "email",
        type: "text",
        style: "email",
        fullName: formik.values.email,
        handleChange: formik.handleChange,
        handleBlur: formik.handleBlur,
        error: formik.errors.email,
        touched: formik.touched.email,
      },
      {
        id: 3,
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

export default useSignUp;
