import { Component } from 'react';
import css from './Contacts.module.css';

export class Contacts extends Component {
  render() {
    const { contacts } = this.props;   
    return (
      <div className={css.contacts}>
        <h2>Contacts</h2>      
        {this.props.children}
        <ul className={css.list}>
          {contacts.map(contact => (
            <li key={contact.id} className={css.item}>
              <span className={css.name}>{contact.name}: </span>{contact.number} <button type='button' onClick={() => this.props.handleDelete(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
