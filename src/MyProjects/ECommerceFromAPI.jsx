import axios from "axios";
import "bootstrap/"
import { useEffect, useState } from "react";
import SMCard from "./Components/SMCard";
import SMNavbar from "./Components/SMNavbar";
import Loading from "./Components/Loading";
import SMButton from "./Components/SMButton";
function ECommerceFrmAPI(props) {
	let [cards, setCards] = useState();
	let [limit, setLimit] = useState(20);
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
			{
				(!cards && <Loading />)
				||
				(<>
					<div className="row">
						{
							cards.map((v, i) => {
								if (i < limit) {
									return <SMCard key={i} data={{ title: v.id, info: v.title, imageLink: v.thumbnailUrl }} />;
								}
							})
						}
					</div>
					<div className="loadingCircle">
						<SMButton title="Load More" onClickFunction={() => { setLimit((prev) => { return prev + 20 }) }} />
					</div>
				</>
				)
			}
		</div>
	)
}
export default ECommerceFrmAPI;