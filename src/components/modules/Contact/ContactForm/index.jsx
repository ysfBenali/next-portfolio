import Button from '@/components/common/Button';
import Input from '@/components/common/Input/Index';
import axios from 'axios';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Recaptcha from 'react-google-recaptcha';
import { Error, InputWrapper } from './styles';

const ContactForm = () => {
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

  const handleSubmitForm = async (
    data,
    { resetForm, setSubmitting, setFieldValue },
  ) => {
    try {
      console.log('api call');
      await axios({
        url:
          process.env.NODE_ENV !== 'development'
            ? `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/api/contact`
            : 'http://localhost:3000/api/contact',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data,
      });
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
          <InputWrapper>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Full Name*"
              as={FastField}
              onChange={handleChange}
              value={values.fullName}
              error={errors.fullName && touched.fullName}
            />
            <ErrorMessage name="fullName" component={Error} />
          </InputWrapper>
          <InputWrapper>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email*"
              as={FastField}
              onChange={handleChange}
              value={values.email}
              error={errors.email && touched.email}
            />
            <ErrorMessage name="email" component={Error} />
          </InputWrapper>
          <InputWrapper>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject*"
              as={FastField}
              onChange={handleChange}
              value={values.subject}
              error={errors.subject && touched.subject}
            />
            <ErrorMessage name="subject" component={Error} />
          </InputWrapper>
          <InputWrapper>
            <Input
              id="reason"
              // as={FastField}
              name="reason"
              as="select"
              value={values.reason}
              onChange={handleChange}
              error={errors.reason && touched.reason}
            >
              <option value="Hi">Just to say Hi</option>
              <option value="Hire">Hire me</option>
              <option value="Other">Other</option>
            </Input>
            <ErrorMessage name="reason" component={Error} />
          </InputWrapper>
          <InputWrapper>
            <Input
              id="message"
              name="message"
              type="text"
              component="textarea"
              rows={6}
              textarea="textarea"
              as={FastField}
              placeholder="Message*"
              onChange={handleChange}
              value={values.message}
              error={errors.message && touched.message}
            />
            <ErrorMessage name="message" component={Error} />
          </InputWrapper>
          {values.fullName &&
            values.email &&
            values.subject &&
            values.reason &&
            values.message &&
            process.env.NODE_ENV !== 'development' && (
              <InputWrapper>
                <FastField
                  component={Recaptcha}
                  sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY}
                  name="recaptcha"
                  onChange={(value) => setFieldValue('recaptcha', value)}
                />
                <ErrorMessage name="recaptcha" component={Error} />
              </InputWrapper>
            )}
          {values.sent && (
            <InputWrapper>
              <h5>
                I have received your message, I will get back to you ASAP :) .
              </h5>
            </InputWrapper>
          )}
          <InputWrapper>
            <Button type="submit" disabled={isSubmitting}>
              Send
            </Button>
          </InputWrapper>
        </Form>
      )}
    </Formik>
  );
};
export default ContactForm;
