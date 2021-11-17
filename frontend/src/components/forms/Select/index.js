import "./styles.css";

export default function Select({ options, onChange }) {
  return (
    <select onChange={(e) => onChange(e)} className="select">
      {options.map((option, index) => (
        <option key={`option-${index}`} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
