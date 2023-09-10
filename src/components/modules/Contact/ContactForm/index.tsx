'use client';

import * as Yup from 'yup';
import Recaptcha from 'react-google-recaptcha';
import { Formik, Form, FastField, ErrorMessage, FormikHelpers } from 'formik';
import Button from '@/components/common/Button';
import { cn } from '@/lib/utils';

interface Values {
  fullName: string;
  email: string;
  subject: string;
  reason: string;
  message: string;
  recaptcha: string;
  sent: boolean;
}

const Schema = Yup.object().shape({
  fullName: Yup.string().required('Full name field is required!'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email field is required!'),
  subject: Yup.string().required('Subject field is required!'),
  reason: Yup.string().required('Reason field is required!'),
  message: Yup.string().required('Message field is required!'),
  recaptcha:
    process.env.NODE_ENV !== 'development'
      ? Yup.string().required('reCAPTCHA is mandatory ')
      : Yup.string(),
});

const ContactForm = () => {
  const handleSubmitForm = async (
    data: Values,
    { resetForm, setSubmitting, setFieldValue }: FormikHelpers<Values>,
  ) => {
    try {
      console.log('api call');

      await fetch(
        process.env.NODE_ENV !== 'development'
          ? `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/api/contact`
          : 'http://localhost:3000/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );

      setSubmitting(false);
      setFieldValue('sent', true);
      setTimeout(() => {
        resetForm();
      }, 5000);
    } catch (err) {
      setSubmitting(false);
      setFieldValue('sent', false);
      alert('An error occurred while sending the message. please try again.');
    }
  };

  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        subject: '',
        reason: 'Just to say Hi',
        message: '',
        recaptcha: '',
        sent: false,
      }}
      validationSchema={Schema}
      onSubmit={handleSubmitForm}
    >
      {({
        handleChange,
        values,
        errors,
        touched,
        isSubmitting,
        setFieldValue,
      }) => (
        <Form>
          <div className="mb-3">
            <FastField
              className={cn('input', {
                'input-error': errors.fullName && touched.fullName,
              })}
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Full Name*"
              component="input"
              onChange={handleChange}
              value={values.fullName}
            />
            <ErrorMessage
              className="text-errorDark dark:text-error"
              name="fullName"
              component="span"
            />
          </div>
          <div className="mb-3">
            <FastField
              className={cn('input', {
                'input-error': errors.email && touched.email,
              })}
              id="email"
              name="email"
              type="email"
              placeholder="Email*"
              onChange={handleChange}
              value={values.email}
            />
            <ErrorMessage
              className="text-errorDark dark:text-error"
              name="email"
              component="span"
            />
          </div>
          <div className="mb-3">
            <FastField
              className={cn('input', {
                'input-error': errors.subject && touched.subject,
              })}
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject*"
              onChange={handleChange}
              value={values.subject}
            />
            <ErrorMessage
              className="text-errorDark dark:text-error"
              name="subject"
              component="span"
            />
          </div>
          <div className="mb-3">
            <FastField
              className="input"
              id="reason"
              name="reason"
              as="select"
              aria-label="reason"
              value={values.reason}
              onChange={handleChange}
            >
              <option value="Hi">Just to say Hi</option>
              <option value="Hire">Hire me</option>
              <option value="Other">Other</option>
            </FastField>
            <ErrorMessage
              className="text-errorDark dark:text-error"
              name="reason"
              component="span"
            />
          </div>
          <div className="mb-3">
            <FastField
              className={cn('input resize-none', {
                'input-error': errors.message && touched.message,
              })}
              id="message"
              name="message"
              type="text"
              component="textarea"
              rows={10}
              placeholder="Message*"
              onChange={handleChange}
              value={values.message}
            />
            <ErrorMessage
              className="text-errorDark dark:text-error"
              name="message"
              component="span"
            />
          </div>
          {values.fullName &&
            values.email &&
            values.subject &&
            values.reason &&
            values.message &&
            process.env.NODE_ENV !== 'development' && (
              <div className="mb-3">
                <FastField
                  component={Recaptcha}
                  sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY}
                  name="recaptcha"
                  onChange={(value: string) =>
                    setFieldValue('recaptcha', value)
                  }
                />
                <ErrorMessage
                  className="text-errorDark dark:text-error"
                  name="recaptcha"
                  component="span"
                />
              </div>
            )}
          {values.sent && (
            <div className="mb-3">
              <h5>
                I have received your message, I will get back to you ASAP :) .
              </h5>
            </div>
          )}
          <div className="mb-3">
            <Button type="submit" disabled={isSubmitting}>
              Send
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default ContactForm;
