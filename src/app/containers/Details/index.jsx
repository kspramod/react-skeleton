import { Formik, Field, Form } from 'formik';

import './styles.scss';

const Details = () => (
  <div>
    <h3>Sign Up</h3>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validate={(values) => {
        const errors = {};

        if (!values.firstName) {
          errors.firstName = 'First Name is required.';
        }
        if (!values.lastName) {
          errors.lastName = 'Last Name is required.';
        }
        if (!values.email) {
          errors.email = 'Email is required.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }

        return errors;
      }}
    >
      {(props) => (
        <Form {...props} className="signup-form">
          <div>
            <label htmlFor="firstName">First Name</label>
            <div>
              <Field id="firstName" name="firstName" placeholder="Jane" required />
              {props.errors.firstName && <div id="feedback-firstName">{props.errors.firstName}</div>}
            </div>
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <div>
              <Field id="lastName" name="lastName" placeholder="Doe" required />
              {props.errors.lastName && <div id="feedback-lastName">{props.errors.lastName}</div>}
            </div>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <div>
              <Field id="email" name="email" placeholder="jane@acme.com" type="email" required />
              {props.errors.email && <div id="feedback-email">{props.errors.email}</div>}
            </div>
          </div>

          <button type="submit">Submit</button>
          {props.dirty && props.isValid && <div>Ready to save</div>}
        </Form>
      )}
    </Formik>
  </div>
);

export default Details;
