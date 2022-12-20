
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import { useEffect } from 'react';

const LS_KEY = "local_stoge_contacts"

const initialContacts =  [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]
    
export function App(){
  const [contacts, setContacts] = useState(() => {    
    if (localStorage.getItem(LS_KEY)) {
      return JSON.parse(localStorage.getItem(LS_KEY))
    } 
    return initialContacts
  })
  
  const [filter, setFilter] = useState('')

  useEffect(() => { 
    localStorage.setItem(LS_KEY, JSON.stringify(contacts))
  }, [contacts])

 

  function addContact (id, name, number) {
    if (contacts.find(contact => contact.name === name)) {
      Notify.failure(`${name} is alredy in contacts`);
      return
    }

    number = number.split('')
    number.splice(3,0,"-")
    number.splice(6,0,"-")
    number = number.join('')   


    setContacts([...contacts, {id, name, number}])
  }

  function onDelete (idContact) {
    setContacts(contacts.filter(contact => contact.id !== idContact))
  }

  function onFilter(event) {
    setFilter(event.currentTarget.value)
  }

  const filteredContacts = contacts.filter(
    contact => contact.name.toLowerCase().includes(filter.toLowerCase()))



  return (
    <div className={css.phonebook}>
      <h1>Phonebook</h1>
      <Phonebook addContact={addContact} />
      <Contacts contacts={filteredContacts} handleDelete={onDelete}>
        <Filter onFilter={onFilter} />
      </Contacts>
    </div>
  );










}






// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     name: '',
//     filter: '',
//   };
//   componentDidMount(){
//     if (localStorage.getItem(LS_KEY)){
//       this.setState({
//         contacts: JSON.parse(localStorage.getItem(LS_KEY))
//       })
//     }
//   }

//   componentDidUpdate(prevProps, prevState){
//     if (prevState.contacts !== !this.state.contacts){
      
//       localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts))
//     }
//   }
  
//   addContact = (id, name, number) => {
//     const findContact = this.state.contacts.find(
//       contact => contact.name === name
//     );   

//     if (findContact) {
//       Notify.failure(`${name} is alredy in contacts`);
//       return;
//     }
  
//     number = number.split('')
//     number.splice(3,0,"-")
//     number.splice(6,0,"-")
//     number = number.join('')    

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, { id: id, name: name, number: number }],
//     }));
//   };

//   onFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   onDelete = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   render() {
//     const filteredContacts = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
//     );
//     return (
//       <div className={css.phonebook}>
//         <h1>Phonebook</h1>
//         <Phonebook addContact={this.addContact} />
//         <Contacts contacts={filteredContacts} handleDelete={this.onDelete}>
//           <Filter onFilter={this.onFilter} />
//         </Contacts>
//       </div>
//     );
//   }
// }

