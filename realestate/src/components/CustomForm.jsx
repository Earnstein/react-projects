import { Formik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

const CustomForm = () => {
  const handleFormSubmit = async (values, { resetForm }) => {
    console.log(values);    
    resetForm();
  };
  return (
    <div>
      <h4 className="title fw-bold mb-lg-3 mb-1" >Send a message</h4>
      <p>
        Fields marked with an <span className="text-danger">*</span> are
        required
      </p>

      <Formik
        validationSchema={schema}
        onSubmit={handleFormSubmit}
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
          <Form noValidate  onSubmit={handleSubmit}>
            <Form.Group
              className="mb-4 rounded-0"
              controlId="validationFormik01"            >
              <Form.Label as="h5" className="title fw-bold mb-3">
                Name <span className="text-danger star text-center">*</span>
              </Form.Label>
              <Form.Control 
              type="text" 
              name="name"
                placeholder="Name" 
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.name && errors.name}
               />

              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-4 rounded-0"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label as="h5" className="title fw-bold mb-3">
                Email <span className="text-danger star text-center">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.email && !errors.email}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              className="mb-4 rounded-0"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label as="h5" className="title fw-bold mb-3">
                Message <span className="text-danger star text-center">*</span>
              </Form.Label>
              <Form.Control as="textarea" rows={8}
              name="message"
              value={values.message}
              onChange={handleChange}
              isValid={touched.message && !errors.message}
              />
            </Form.Group>
            <Button
              className="rounded-0 button-submit"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CustomForm;
