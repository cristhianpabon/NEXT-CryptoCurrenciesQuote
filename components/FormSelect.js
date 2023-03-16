import styles from "@/styles/FormSelect.module.css";

const FormSelect = ({ label, options, value, setValue }) => {
  return (
    <div className={styles.formSelect}>
      <div className={styles.label}>
        <label>{label}</label>
      </div>
      <select
        className={styles.select}
        value={value && value}
        onChange={(e) => setValue && setValue(e.target.value)}
      >
        <option value="">Select an option</option>
        {options && options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
