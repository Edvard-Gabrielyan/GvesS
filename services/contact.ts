import * as Yup from "yup";
import { useFormik } from "formik";

export default function useContact() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    messages: Yup.string().required("Required"),
  });

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
    validationSchema,
    validateOnBlur: true,
    validateOnChange: false,
  });

  return { formik };
}
