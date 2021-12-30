import {Formik, ErrorMessage} from "formik";
import { Form, Input } from 'formik-antd'
import * as Yup from 'yup';
import MainLayout from "../../components/main-layout/MainLayout";
import useContacts from "../../services/useContacts";

export default function Contact() {

  const {initialValues} = useContacts()

  return (
    <MainLayout title="Contact page">
      <div className="contacts-body">
        <div className="contact-us">
          <h1>Contact Us</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
              lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
              password: Yup.string()
                .max(10, 'Invalid password address')
                .required('Required'),
              email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            })}
            onSubmit={(values: any) => {
              console.log(values)
            }}
          >
            <Form>
              <Input name="firstName" type="text" placeholder="Jane"/>
              <ErrorMessage name="firstName" />
              <Input name="lastName" type="text" placeholder="Last Name"/>
              <ErrorMessage name="lastName" />
              <Input name="password" type="password" placeholder="Password"/>
              <ErrorMessage name="password" />
              <Input name="email" type="email" placeholder="jane@formik.com"/>
              <ErrorMessage name="email" />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.9230957840264!2d44.48542030411312!3d40.219054934288465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a97fc5d7aa06b%3A0x86c25608eaf7c76e!2s7%202Tigran%20Petrosyan%20St%2C%20Yerevan%200054%2C%20Armenia!5e0!3m2!1sen!2s!4v1640862814405!5m2!1sen!2s"
            width="400" height="400" style={{border:0}} loading="lazy">
          </iframe>
        </div>
      </div>
    </MainLayout>
    )
}