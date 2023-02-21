import { Button } from "@mui/material";
function SMButton(props) {
	let { title, onClickFunction, disabled } = props
	return <Button variant="contained" disabled={disabled} onClick={onClickFunction}>{title}</Button>
}
export default SMButton