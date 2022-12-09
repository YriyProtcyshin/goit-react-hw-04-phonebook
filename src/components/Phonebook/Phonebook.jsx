import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import css from './Phonebook.module.css';
import { nanoid } from 'nanoid';

const initialValues = {
  name: '',
  number: '',
};

export class Phonebook extends Component {
  onAddButtonClick = (values, active) => {
    this.props.addContact(nanoid(), values.name, values.number);
    active.resetForm();
  };
  render() {
    return (
      <Formik initialValues={initialValues} onSubmit={this.onAddButtonClick}>
        <Form className={css.form}>
          <p className={css.inputLabel}>Name</p>
          <Field
            className={css.field}
            type="text"
            name="name"
            placeholder="Name"
          />
          <p className={css.inputLabel}>Number</p>
          <Field
            className={css.field}
            type="tel"
            name="number"
            placeholder="000-00-00"
          />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}
