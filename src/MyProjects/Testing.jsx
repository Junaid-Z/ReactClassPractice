import { useState } from "react";
import Button from "./Components/Button";
import Input from "./Components/Input";
import Table from "./Components/Table";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Style/testing.css"
import "./Style/Components.css"
import SMButton from "./Components/SMButton";
import { tableData } from "./Data";
import SMInput from "./Components/SMInput";
function Testing() {
	let [selectedRow, setSelectedRow] = useState("");
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
	let [value, setValue] = useState();
	return (
		<div className="App">
			<h1>{value || "Hello World"}</h1>
			<SMInput value={value} setValue={setValue} />
			<h1 className="p4">
				{count}
			</h1>
			<div>
				<Button function={incrementCounter} text="Inc New" class="btn margin20 btn-outline-primary"></Button>
				<Button function={incrementCounter2} text="Inc Old" class="btn margin20 btn-outline-primary"></Button>
			</div>
			<Table data={tableData} style={{ width: "100%" }} setSelectedRow={setSelectedRow} />
			<div className="selectedRow">
				{selectedRow}
			</div>
			<SMButton title="Click Me" onClickFunction={() => { console.log("Hello") }} disabled={false} />
		</div>
	)
}
export default Testing;