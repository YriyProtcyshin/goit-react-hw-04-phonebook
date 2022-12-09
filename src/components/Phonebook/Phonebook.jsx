import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import css from './Phonebook.module.css';
import { nanoid } from 'nanoid';

const initialValues = {
  name: '',
};

export class Phonebook extends Component {
  onAddButtonClick = (values, active) => {
    this.props.addContact(nanoid(), values.name);
    active.resetForm();
  };
  render() {
    return (
      <Formik initialValues={initialValues} onSubmit={this.onAddButtonClick}>
        <Form className={css.form}>
          <Field
            className={css.field}
            type="text"
            name="name"
            placeholder="Name"
          />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}
