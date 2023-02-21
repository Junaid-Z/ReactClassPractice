import axios from "axios"
import { useEffect, useState } from "react"
import SMButton from "./Components/SMButton";

function DispDataFrmAPI() {
	let [data, setData] = useState("");
	let [id, setId] = useState(1);
	function postData() {
		axios.post(`https://jsonplaceholder.typicode.com/posts`, {
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify({
				id: 1,
				title: 'foo',
				body: 'bar',
				userId: 1
			}),
		}).then((response) => {
			console.log(response);
		})
	}
	function getData() {
		axios.get(`https://dummyjson.com/products/${id}`)
			.then((response) => { setData(response.data); console.log(response) })
			.catch((error) => { alert(error.message) })
	}
	useEffect(() => {
		getData()
	}, [id])
	let fields = Object.keys(data);
	return (
		<div className="App">
			<header className="Api-App-header">
				{fields.map((a, i) => {
					if (a === "images") {
						return (<div className="imgsFrmAPIHolder" key={i}>
							<h1>Images</h1>
							{data[a].map((v, picNum) => {
								console.log(v);
								return (
									<div className="imgHolder" key={picNum}>
										<img className="imgFrmAPI" src={v} alt="" />
									</div>
								)
							})}
						</div>)
					}
					else if (a === "thumbnail") {
						return (
							<div key={i} className="thumbnailFrmAPIHolder">
								<h1>Thumbnail</h1>
								<img src={data[a]} alt="" />
							</div>
						);
					}
					else {
						return (
							<div className="ApiData" key={i}>
								<span>{a}:</span>
								{data[a]}
							</div>
						)
					}
				})}
				<SMButton title="Next Item"
					onClickFunction={() => {
						setId((before) => { return before + 1 });
					}}
				/>
				<SMButton title="Upload Item"
					onClickFunction={() => {
						postData();
					}}
				/>
			</header>
		</div>
	)
}
export default DispDataFrmAPI;