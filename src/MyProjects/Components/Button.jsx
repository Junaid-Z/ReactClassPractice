function Button(props) {
	return (<button onClick={() => { props.function() }} >Click Me</button>)
}
export default Button;