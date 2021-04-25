import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Section from '../Section';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    const { name } = this.state;
    const id = uuidv4();

    event.preventDefault();

    const newContact = { name, id };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <Section title="phonebook">
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">add contact</button>
          </form>
        </Section>
        <Section title="contacts">
          <ul>
            {contacts.map(contact => (
              <li key={contact.id}>{contact.name}</li>
            ))}
          </ul>
        </Section>
      </>
    );
  }
}

export default App;
