import React, { FC, memo } from "react";
import Layout from "../../components/Layout/Layout";
import FormikController from "../../components/common/FormikController/FormikController";
import useContact from "../../services/contact";

const Contact: FC = () => {
  const { formik } = useContact();
  const fakeSelectData = [
    { id: 1, value: "Poxos" },
    { id: 2, value: "Petros" },
  ];
  return (
    <Layout title="Contact page">
      <section className="global-section">
        <div className="container">
          <FormikController
            control="input"
            head="Input"
            name="input"
            placeholder="Input"
            type="text"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.fullName}
          />
        </div>
      </section>
      <section className="global-section">
        <div className="container">
          <FormikController
            control="select"
            head="Select"
            name="phone"
            data={fakeSelectData}
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </section>
    </Layout>
  );
};

export default memo(Contact);
