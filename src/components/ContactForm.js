import React, { useState } from "react"
import layoutStyles from "../styles/components/layout.module.scss"
import contactStyles from "../styles/components/contact.module.scss"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import qs from "query-string"
import axios from "axios"

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
})

const ContactForm = () => {
  const [is_success, setSuccess] = useState(false)
  return (
    <div className={`${layoutStyles.container__gray}`} id="contact">
      <div className={`${layoutStyles.container}`}>
        <div className={`${layoutStyles.header}`}>
          <h2>Contact</h2>
        </div>
        <div className={`${contactStyles.form__container}`}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
              "form-name": "contact",
              is_bot: false,
            }}
            validationSchema={SignupSchema}
            onSubmit={async values => {
              if (values.is_bot) return false
              const options = {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                data: qs.stringify(values),
                url: "/",
              }
              try {
                await axios(options)
                setSuccess(true)
              } catch (e) {
                console.log(e)
              }
            }}
          >
            {({ errors, touched }) => (
              <form name="contact" method="post" data-netlify="true">
                <Field
                  name="is_bot"
                  type="checkbox"
                  style={{ display: "none" }}
                />
                <Field type="hidden" name="form-name" />
                <div className={`${contactStyles.form__row}`}>
                  <div className={`${contactStyles.form__group}`}>
                    <label htmlFor="name">Name</label>
                    <Field name="name" id="name" />
                    <span className={`${contactStyles.form__group__error}`}>
                      <ErrorMessage name="name" />
                    </span>
                  </div>
                  <div className={`${contactStyles.form__group}`}>
                    <label htmlFor="email">E-mail</label>
                    <Field name="email" type="email" id="email" />
                    <span className={`${contactStyles.form__group__error}`}>
                      <ErrorMessage name="email" />
                    </span>
                  </div>
                </div>
                <div className={`${contactStyles.form__group}`}>
                  <label htmlFor="message">Message</label>
                  <Field name="message" as="textarea" id="message" />
                  <span className={`${contactStyles.form__group__error}`}>
                    <ErrorMessage name="message" />
                  </span>
                </div>
                <button
                  className={`${contactStyles.form__button}`}
                  type="submit"
                >
                  Submit
                </button>
                {is_success && (
                  <p className={`${contactStyles.success_message}`}>
                    Success! Message sent!
                  </p>
                )}
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
