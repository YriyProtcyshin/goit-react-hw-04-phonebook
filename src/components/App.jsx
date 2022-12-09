import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = (id, name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: id, name: name, number: number }],
    }));
  };

  render() {
    return (
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <Phonebook addContact={this.addContact} />
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}
