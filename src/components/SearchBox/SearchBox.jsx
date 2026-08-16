import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>Find contacts by name</p>

      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;