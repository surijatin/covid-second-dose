
function MessageDisplay(props) {
    const formatDate = `${new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(props.date)}, ${props.date.toString().slice(4, 15)}`;
    return (
        <>
            <p>
                Your next jab is due on "{formatDate}"
            </p>
        </>
    );
}

export default MessageDisplay;
