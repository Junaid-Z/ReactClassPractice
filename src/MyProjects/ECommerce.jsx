import "bootstrap/"
import SMCard from "./Components/SMCard";
import SMNavbar from "./Components/SMNavbar";
import { cards } from "./Data/Data";
function ECommerce(props) {
	return (
		<div className="container">
			<SMNavbar />
			<div className="row">
				{
					cards.map((v, i) => {
						return <SMCard data={v} />;
					})
				}
			</div>
		</div>
	)
}
export default ECommerce;