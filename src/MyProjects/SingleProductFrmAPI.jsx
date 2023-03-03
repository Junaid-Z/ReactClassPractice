import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleProductFrmAPI() {
	let { id } = useParams();
	let [card, setCard] = useState({});
	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
			.then((response) => {
				setCard(response.data);
				console.log(response);
			})
			.catch((err) => { console.log(err) })
	}, [])
	return (
		<div className="singleProduct">
			<img src={card.url} alt="" />
			<h1>{card.id}</h1>
			<p>{card.title}</p>
		</div>
	);
}