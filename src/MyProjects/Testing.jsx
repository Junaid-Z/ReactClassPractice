import { useState } from "react";
import Button from "./Components/Button";
import Input from "./Components/Input";
function Testing() {
	let sayHello = () => {
		console.log("Hello")
	}
	let [value, setValue] = useState("");
	return (
		<div>
			<h1>{value}</h1>
			<h1>Hello World</h1>
			<Button function={sayHello}></Button>
			<Input value={value} setValue={setValue} />
		</div>
	)
}
export default Testing;