import { Formik, ErrorMessage } from "formik";
import { Form, Input } from "formik-antd";
import Image from "next/image";
import MainLayout from "../../components/main-layout/MainLayout";
import useContacts from "../../services/useContacts";

export default function Contact() {
  const { TextArea } = Input;
  const { initialValues, validationSchema } = useContacts();

  return (
    <MainLayout title="Contact page">
      <div className="contacts-page">
        <div className="contact-info">
          <Image src="/team.jpg" alt="Our Team" height={320} width={375} />
        </div>
        <div className="contact-form">
          <h1 className="header">Contact Us</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <Input name="fullName" type="text" placeholder="Full Name" />
              <span className="error-messages">
                <ErrorMessage name="fullName" />
              </span>
              <Input name="phone" type="text" placeholder="Phone" />
              <span className="error-messages">
                <ErrorMessage name="phone" />
              </span>
              <Input
                name="email"
                type="email"
                placeholder="yourmail@gmail.com"
              />
              <span className="error-messages">
                <ErrorMessage name="email" />
              </span>
              <TextArea
                name="messages"
                placeholder="Messages"
                className="textarea"
              />
              <span className="error-messages">
                <ErrorMessage name="messages" />
              </span>
              <button type="submit" className="btn-submit">
                Contact Us
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </MainLayout>
  );
}
