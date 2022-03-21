import * as Yup from "yup";
import { useFormik } from "formik";
import { useMemo } from "react";

export default function useContact() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
      messages: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      phone: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      messages: Yup.string().required("Required Messages"),
    }),
  });

  const data = useMemo(
    () => [
      {
        id: 1,
        control: "input",
        head: "Full name",
        name: "fullName",
        type: "text",
        fullName: formik.values.fullName,
        handleChange: formik.handleChange,
        handleBlur: formik.handleBlur,
        error: formik.errors.fullName,
        touched: formik.touched.fullName,
      },
      {
        id: 2,
        control: "input",
        head: "Phone",
        name: "phone",
        type: "text",
        fullName: formik.values.phone,
        handleChange: formik.handleChange,
        handleBlur: formik.handleBlur,
        error: formik.errors.phone,
        touched: formik.touched.phone,
      },
      {
        id: 3,
        control: "input",
        head: "Email",
        name: "email",
        type: "text",
        fullName: formik.values.email,
        handleChange: formik.handleChange,
        handleBlur: formik.handleBlur,
        error: formik.errors.email,
        touched: formik.touched.email,
      },
      {
        id: 4,
        control: "textArea",
        head: "Message",
        name: "messages",
        type: "text",
        fullName: formik.values.messages,
        handleChange: formik.handleChange,
        handleBlur: formik.handleBlur,
        error: formik.errors.messages,
        touched: formik.touched.messages,
      },
    ],
    [formik]
  );

  return { data, onSubmit: formik.handleSubmit };
}
