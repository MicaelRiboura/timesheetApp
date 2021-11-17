import "./styles.css";

export default function Select({ options, onChange, value }) {
  return (
    <select value={value} onChange={(e) => onChange(e)} className="select">
      {options.map((option, index) => (
        <option key={`option-${index}`} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
