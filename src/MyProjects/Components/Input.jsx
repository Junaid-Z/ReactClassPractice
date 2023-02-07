function Input(props) {
	return (
		<input value={props.value} onChange={(e) => { props.setValue(e.target.value) }}></input>
	);
}
export default Input