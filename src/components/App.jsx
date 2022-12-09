import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
  };

  addContact = (id, name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: id, name: name, number: number }],
    }));
  };

  onFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const filteredContact = this.state.contacts.filter(contact =>
      contact.name.includes(this.state.filter)
    );
    return (
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <Phonebook addContact={this.addContact} />
        <Contacts contacts={filteredContact} onFilter={this.onFilter} />
      </div>
    );
  }
}
