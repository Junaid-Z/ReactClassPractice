import axios from "axios";
import "bootstrap/"
import { useEffect, useState } from "react";
import SMCard from "./Components/SMCard";
import SMNavbar from "./Components/SMNavbar";
function ECommerceFrmAPI(props) {
	let [cards, setCards] = useState([]);
	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/photos")
			.then((response) => {
				setCards(response.data);
			})
			.catch((err) => { console.log(err) })
	}, [])
	return (
		<div className="container">
			<SMNavbar />
			<div className="row">
				{
					cards.map((v, i) => {
						if (i < 200) {
							return <SMCard key={i} data={{ title: v.id, info: v.title, imageLink: v.thumbnailUrl }} />;
						}
					})
				}
			</div>
		</div>
	)
}
export default ECommerceFrmAPI;