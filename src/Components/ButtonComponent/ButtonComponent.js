import './ButtonComponent.css';

function ButtonComponent(props) {
    return (
        <>
            <button id={props.id} className="primary-btn" onClick={props.onBtnClick}>
                {props.btnLabel}
            </button>
        </>
    );
}

export default ButtonComponent;
