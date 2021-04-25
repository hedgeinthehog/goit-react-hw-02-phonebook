import React from 'react';
import Section from '../Section';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

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
  };

  updateFilter = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  addNewContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  filterContacts = () => {
    const { contacts } = this.state;
    const filter = this.state.filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <>
        <Section title="phonebook">
          <ContactForm onSubmit={this.addNewContact} />
        </Section>
        <Section title="contacts">
          <Filter filter={filter} onChange={this.updateFilter} />
          <ContactList contacts={filteredContacts} />
        </Section>
      </>
    );
  }
}

export default App;
