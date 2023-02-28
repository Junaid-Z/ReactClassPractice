import axios from "axios";
import { useEffect, useState } from "react";

export default function APIPractice() {
	let [data, setData] = useState([])
	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/photos")
			.then((response) => { setData(response.data) })
			.catch((e) => { console.log(e) })
	}
	)
	return (
		<div>
			{
				data.map((v) => {
					return (
						<div className="post" key={v.id}>
							<h1>Pic {v.id}</h1>
							<div>{v.title}</div>
							<div>
								<img src={v.url} alt="" />
							</div>
						</div>
					)
				})
			}
		</div>
	);
}