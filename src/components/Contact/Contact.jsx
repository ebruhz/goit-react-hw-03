import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <p className={styles.name}>👤 {contact.name}</p>
        <p className={styles.number}>📞 {contact.number}</p>
      </div>

      <button
        className={styles.button}
        type="button"
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;