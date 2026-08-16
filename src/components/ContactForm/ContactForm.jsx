import { useFormik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Min 3 karakter')
    .max(50, 'Max 50 karakter')
    .required('Zorunlu alan'),
  number: Yup.string()
    .min(3, 'Min 3 karakter')
    .max(50, 'Max 50 karakter')
    .required('Zorunlu alan'),
});

const ContactForm = ({ onAdd }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      onAdd({ id: nanoid(), ...values });
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label className={styles.label} htmlFor="name">
        Name
      </label>

      <input
        className={styles.input}
        id="name"
        name="name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      {formik.touched.name && formik.errors.name && (
        <span className={styles.error}>{formik.errors.name}</span>
      )}

      <label className={styles.label} htmlFor="number">
        Number
      </label>

      <input
        className={styles.input}
        id="number"
        name="number"
        type="text"
        value={formik.values.number}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      {formik.touched.number && formik.errors.number && (
        <span className={styles.error}>{formik.errors.number}</span>
      )}

      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;