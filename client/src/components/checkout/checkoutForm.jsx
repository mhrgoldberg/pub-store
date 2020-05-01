import React from "react";
import { Formik } from "formik";
import { Form, ProgressBar, Col, Button } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";
import * as yup from "yup";

const CheckoutForm = ({ history, cart }) => {
  const schema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    city: yup.string().required("Ciy is required"),
    state: yup.string().required("State is required"),
    address: yup.string().required("Address is required"),
    zip: yup.string().min(5).max(5).required("Zip code is required"),
    newsLetter: yup.bool(),
  });

  const createProductsArray = (products) => {
    const productsQuantity = [];
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      for (let j = 0; j < product.cartQuantity; j++) {
        productsQuantity.push(product.data.id);
      }
    }
    return productsQuantity;
  };

  const products =
    Object.values(cart).length > 0
      ? createProductsArray(Object.values(cart))
      : [];

  return (
    <div className="main-container">
      <Formik
        validationSchema={schema}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          newsLetter: false,
        }}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post("/api/orders", {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              address: values.address,
              city: values.city,
              state: values.state,
              zip: values.zip,
              newsletter: values.newsLetter,
              products,
            })
            .then(function (response) {
              history.push(`/complete/${response.data.id}`);
            })
            .catch(function (error) {
              console.log(error);
            });
          setSubmitting(false);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form className="checkout-form" noValidate onSubmit={handleSubmit}>
            <br />
            <ProgressBar animated now={66} />
            <br />
            <Form.Row>
              <Form.Group as={Col} controlId="validationFormik01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.firstName && !!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="validationFormik02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.lastName && !!errors.lastName}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="validationEmail">
                <Form.Label>Email</Form.Label>

                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.email && !!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="validationAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.address && !!errors.address}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormik03">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.city && !!errors.city}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik04">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.state && !!errors.state}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik05">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  name="zip"
                  value={values.zip}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.zip && !!errors.zip}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.zip}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Check
                name="newsLetter"
                label="Sign up for our newsletter"
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.newsletter && !!errors.newsletter}
                feedback={errors.newsLetter}
                id="validationFormik0"
              />
            </Form.Group>
            <Button type="submit" size="lg" block>
              Complete Order
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default withRouter(CheckoutForm);
