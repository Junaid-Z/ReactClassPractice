import { useState } from "react";
import { mobiles } from "./Data/Data";
function DynamicCards() {
	let [count, setCount] = useState(0);
	function ChangeCount(v) {
		if (v === 1) {
			if (count !== 11) {
				setCount(count + 1);
			};
		}
		else if (v === -1) {
			if (count !== 0) {
				setCount(count - 1);
			}
		}
	}
	return (
		<div className="App">
			<header className="App-header">
				<div className='phoneCard'>
					<div>We are currently on index number {count}</div>
					<div>Name: {mobiles[count].name}</div>
					<div>Brand: {mobiles[count].brand}</div>
					<div>Price: {mobiles[count].price}</div>
				</div>
				<div className="myButtons">
					<button onClick={() => { ChangeCount(-1) }}>Previous Card</button>
					<button onClick={() => { ChangeCount(1) }}>Next Card</button>
				</div>
			</header>
		</div>
	);
}
export default DynamicCards;