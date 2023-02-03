import logo from '../logo.svg';
import '../App.css';
import { useEffect, useState } from 'react';
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
function updateAFS(c) {
	let body = `api_key=webklsjfoi6jge3pgwe0few03&yourText=${c}`
	fetch("https://www.airforshare.com/apiv3/save.php", {
		"headers": {
			"accept": "application/json, text/plain, */*",
			"accept-language": "en-US,en;q=0.9",
			"content-type": "application/x-www-form-urlencoded",
			"sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
			"sec-ch-ua-mobile": "?0",
			"sec-ch-ua-platform": "\"Windows\"",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "no-cors",
			"sec-fetch-site": "same-origin",
			"x-auth-token": ""
		},
		"referrer": "https://www.airforshare.com/",
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": body,
		"method": "POST",
		"mode": "no-cors",
		"credentials": "include"
	});
}
function Counter() {
	let [count, setCount] = useState(0);
	let [data, setData] = useState("");
	let myPromise = new Promise((res, rej) => {
		setTimeout(() => {
			res("Data recieved");
		}, 100)
	});
	useEffect(() => {
		myPromise.then((recievedData) => {
			console.log(recievedData);
			setData(recievedData);
		});
	}, [])
	useEffect(() => {
		updateAFS(count)
	}, [count])
	return (
		<div className="App">
			<header className="App-header">
				<h1>{data || "Getting Data"}</h1>
				<h1>{count || "Zero"}</h1>
				<div className="myButtons">
					<button onClick={() => { setCount(count - 1) }}>Decrement</button>
					<button onClick={() => { setCount(count + 1) }}>Increment</button>
				</div>
			</header>
		</div>
	)
}

export {
	App,
	Counter
}