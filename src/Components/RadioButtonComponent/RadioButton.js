import './RadioButton.css';

function RadioButton(props) {
    return (
        <>
            <input
                type="radio"
                name={props.name}
                id={props.id}
                onChange={props.onChange}
                checked={props.checked}
            />
            <label htmlFor={props.id} className="label">
                {props.labelName}
            </label>
        </>
    );
}

export default RadioButton;
