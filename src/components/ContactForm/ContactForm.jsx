import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;

    this.props.handleAddContact(name, number, this.resetForm);
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          value={name}
          onChange={this.handleChange}
          pattern="^[A-Za-zА-Яа-яЇїІі\s]+$"
          title="You can enter only letters of the Latin and Cyrillic alphabets, as well as spaces."
        />
        <input
          type="tel"
          name="number"
          placeholder="Enter number"
          required
          value={number}
          onChange={this.handleChange}
          pattern="^(\+?\d+){5,12}$"
          title="Phone number must start with '+' (optional) and contain only digits. Length: 5-12 characters."
        />
        <button type="submit">
          Add contact
        </button>
      </form>
    );
  }
}