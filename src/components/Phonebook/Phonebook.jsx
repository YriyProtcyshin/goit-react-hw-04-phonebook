import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './Phonebook.module.css';
import { nanoid } from 'nanoid';
import * as yup from "yup"


const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().integer().positive().required()
})

export class Phonebook extends Component {
  onAddButtonClick = (values, active) => {
    this.props.addContact(nanoid(), values.name, values.number);
    active.resetForm();
  };
  render() {
    return (
      <Formik initialValues={initialValues} onSubmit={this.onAddButtonClick} validationSchema={schema}>
        <Form className={css.form}>
          <p className={css.inputLabel}>Name</p>
          <Field
            className={css.field}
            type="text"
            name="name"
            placeholder="Rosie Simpson"
          />
          <ErrorMessage name="name" component= "div" className= {css.errorMessage}/>
          <p className={css.inputLabel}>Number</p>
          <Field
            className={css.field}
            type="tel"
            name="number"
            placeholder="2343635"
          />
          <ErrorMessage name="number" component= "div" className= {css.errorMessage}/>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}
