import { Component } from 'react';
import css from './Contacts.module.css';

export class Contacts extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <div className={css.contacts}>
        <h2>Contacts</h2>

        <input type="text" onChange={this.props.onFilter} />

        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
