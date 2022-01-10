import * as Yup from 'yup';

export default function useContacts() {
  interface FormValues {
    fullName: string;
    phone: string | number;
    email: string | number;
    messages: string | number;
  }
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const initialValues: FormValues = {
    fullName: '',
    phone: '',
    email: '',
    messages: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    messages: Yup.string()
      .required('Required'),
  })

  return {
    initialValues,
    validationSchema,
  }
}