function Button(props) {
	return (<button
		className={props.class}
		onClick={() => { props.function() }} >
		{props.text}
	</button>)
}
export default Button;