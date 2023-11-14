export const ContactList = ({ contacts, handleDeleteContact }) => (
  <ul>
    {contacts.length > 0 ? (
      contacts.map(contact => (
        <li key={contact.id}>
          <a href={`tel:${contact.number}`}>
            {contact.name}: {contact.number}
          </a>
          <button
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))
    ) : (
      <h3>No contacts found.</h3>
    )}
  </ul>
);