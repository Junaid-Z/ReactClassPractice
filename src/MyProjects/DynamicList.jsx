import { useState } from "react";
function DynamicList() {
	let [arr, setArr] = useState([]);
	let [text, setText] = useState("");
	function incrementList() {
		arr.push(text);
		console.log(arr);
		setArr([...arr]);
		setText("");
	}
	return (
		<div className="App">
			<header className="App-header">
				<div className="list">
					{arr.map((m, i) => {
						return (<div key={i}>{m}</div>);
					})}
				</div>
				<form onSubmit={(e) => { incrementList(); e.preventDefault() }}>
					<input value={text} onChange={(e) => { setText(e.target.value) }} placeholder={"Value to be added"}></input>
					<br />
					<button>Add</button>
				</form>
			</header>
		</div >
	);
}
export default DynamicList;