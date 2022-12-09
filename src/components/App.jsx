import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = (id, name) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: id, name: name }],
    }));
  };

  render() {
    return (
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <Phonebook addContact={this.addContact} />
      </div>
    );
  }
}
