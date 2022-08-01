import { useFormik } from "formik";
import * as Yup from "yup";
import { useMemo } from "react";

const useForgetPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      new_password: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      new_password: Yup.string()
        .required("Please Enter your new password")
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
        id: 2,
        control: "input",
        head: "New Password",
        name: "new_password",
        type: "text",
        style: "new_password",
        fullName: formik.values.new_password,
        handleChange: formik.handleChange,
        handleBlur: formik.handleBlur,
        error: formik.errors.new_password,
        touched: formik.touched.new_password,
      },
    ],
    [formik]
  );

  return { data, onSubmit: formik.handleSubmit };
};

export default useForgetPassword;
