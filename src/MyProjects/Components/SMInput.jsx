import { TextField } from "@mui/material";
function SMInput(props) {
	let { value, setValue, placeholder, type, label } = props;
	return (
		<TextField type={type} placeholder={placeholder} id="standard-basic" label={label ? label : 'Standard'} variant="standard" value={value} onChange={(e) => { setValue(e.target.value) }} />
	)
}
export default SMInput;