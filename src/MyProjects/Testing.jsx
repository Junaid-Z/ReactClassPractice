import { useState } from "react";
import Button from "./Components/Button";
import Input from "./Components/Input";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Style/testing.css"
function Testing() {
	let [count, setCount] = useState(0);
	let incrementCounter = () => {
		//When a function is passed to the setState function
		//It is provided the previous value as a parameter
		setCount((prevVal) => { return prevVal + 1 });
		setCount((prevVal) => { return prevVal + 1 });
	}
	let incrementCounter2 = () => {
		//If the same thing was done using this function
		//It would only increment once
		//Since the count variable will take time to be set
		//Due to this the same value of count will be provided to both calls
		setCount(count + 1);
		setCount(count + 1);
	}
	let [value, setValue] = useState("");
	return (
		<div className="App">
			<h1>{value}</h1>
			<h1>Hello World</h1>
			<Input value={value} setValue={setValue} />
			<h1 className="p4">
				{count}
			</h1>
			<div>
				<Button function={incrementCounter} text="Inc New" class="btn margin20 btn-outline-primary"></Button>
				<Button function={incrementCounter2} text="Inc Old" class="btn margin20 btn-outline-primary"></Button>
			</div>
		</div>
	)
}
export default Testing;