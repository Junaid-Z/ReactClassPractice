import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { mobiles } from './var'
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}
function Counter() {
	let [count, setCount] = useState(0);
	let [data, setData] = useState("");
	let myPromise = new Promise((res, rej) => {
		setTimeout(() => {
			res(20);
		}, 2000)
	});
	useEffect(() => {
		myPromise.then((recievedData) => {
			console.log(recievedData)
			setData(recievedData);
		})
	}, [])
	return (
		<div className="App">
			<header className="App-header">
				{/* <h1>{data || "Getting Data"}</h1>
				<h1>{count || "Zero"}</h1>
				<div className="myButtons">
					<button onClick={() => { setCount(count + 1) }}>Increment</button>
					<button onClick={() => { setCount(count - 1) }}>Decrement</button>
				</div>
				<ul>
					<li><div className='column heading'>Name</div>:<div className='column heading'>Brand</div>:<div className='column heading'>Price</div></li>
					{mobiles.map((a, i) => {
						return (
							<li key={i}><div className='column'>{a.name}</div>:<div className='column'>{a.brand}</div>: <div className="column">{a.price}</div></li>
						);
					})}
				</ul> */}
				{mobiles.map((a, i) => {
					return (
						<div className='card' key={i}><div>{a.name}</div><div>{a.brand}</div><div>{a.price}</div></div>
					);
				})}
			</header>
		</div>
	)
}

export {
	App,
	Counter
}
