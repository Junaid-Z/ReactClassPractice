import { TextField } from "@mui/material";
function SMInput(props) {
	let { value, setValue } = props;
	return (
		<TextField id="standard-basic" label="Standard" variant="standard" value={value} onChange={(e) => { props.setValue(e.target.value) }} />
	)
}
export default SMInput;