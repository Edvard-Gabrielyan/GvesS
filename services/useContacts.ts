export default function useContacts() {
  interface FormValues {
    firstName: string;
    lastName: string;
    password: string | number;
    email: string | number;
  }

  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
  };
  return {
    initialValues
  }
}