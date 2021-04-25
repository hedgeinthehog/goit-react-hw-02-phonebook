import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Section from '../Section';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Minion da Bob', number: '459-12-56' },
      { id: 'id-6', name: 'Bobo', number: '443-89-12' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { name, number } = this.state;
    const id = uuidv4();

    event.preventDefault();

    const newContact = { name, number, id };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  filterContacts = () => {
    const { contacts } = this.state;
    const filter = this.state.filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter),
    );
  };

  render() {
    const { name, number, filter } = this.state;

    const filteredContacts = this.filterContacts();

    return (
      <>
        <Section title="phonebook">
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={this.handleChange}
              />
            </label>
            <input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.handleChange}
            />
            <button type="submit">add contact</button>
          </form>
        </Section>
        <Section title="contacts">
          <label>
            Find contacts by name
            <input
              type="text"
              name="filter"
              value={filter}
              onChange={this.handleChange}
            />
          </label>
          <ul>
            {filteredContacts.map(contact => (
              <li key={contact.id}>
                {contact.name} {contact.number}
              </li>
            ))}
          </ul>
        </Section>
      </>
    );
  }
}

export default App;
