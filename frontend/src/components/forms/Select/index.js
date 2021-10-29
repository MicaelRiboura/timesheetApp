import './styles.css';

export default function Select({ options }) {
    return (
        <select className="select">
            {options.map(option => (
                <option value={option.value}>{option.label}</option>
            ))}
        </select>
    );
}