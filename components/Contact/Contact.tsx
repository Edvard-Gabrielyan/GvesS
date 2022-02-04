import React from "react";
import Image from "next/image";
import { ErrorMessage, Formik } from "formik";
import { Form, Input } from "formik-antd";
import useContact from "../../services/contact";
import s from "./Contaxt.module.scss";

const Contact = () => {
  const { TextArea } = Input;
  const { initialValues, validationSchema } = useContact();
  return (
    <div className={s.contactContainer}>
      <div className={s.contactInfo}>
        <Image src="/team.jpg" alt="Our Team" height={320} width={375} />
      </div>
      <div className={s.contactForm}>
        <h1 className={s.header}>Contact Us</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className={s.form}>
            <Input
              name="fullName"
              type="text"
              placeholder="Full Name"
              className={s.input}
            />
            <span className={s.errorMessages}>
              <ErrorMessage name="fullName" />
            </span>
            <Input
              name="phone"
              type="text"
              placeholder="Phone"
              className={s.input}
            />
            <span className={s.errorMessages}>
              <ErrorMessage name="phone" />
            </span>
            <Input
              name="email"
              type="email"
              placeholder="yourmail@gmail.com"
              className={s.input}
            />
            <span className="error-messages">
              <ErrorMessage name="email" />
            </span>
            <TextArea
              name="messages"
              placeholder="Messages"
              className={`${s.textarea} ${s.input}`}
            />
            <span className={s.errorMessages}>
              <ErrorMessage name="messages" />
            </span>
            <button type="submit" className={s.submit}>
              Contact Us
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
