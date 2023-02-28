import { Link } from "react-router-dom";

function PageList() {
	return (
		<div className="App">
			<header className="App-header">
				<ul>
					<li>
						<Link to={"Counter"} className="link">Counter</Link>
					</li>
					<li>
						<Link to={"cards"} className="link">Cards</Link>
					</li>
					<li>
						<Link to={"DynamicCards"} className="link">DynamicCards</Link>
					</li>
					<li>
						<Link to={"List"} className="link">List</Link>
					</li>
					<li>
						<Link to={"DynamicList"} className="link">DynamicList</Link>
					</li>
					<li>
						<Link to={"QuizApp"} className="link">Quiz App</Link>
					</li>
					<li>
						<Link to={"ECommerce"} className="link">ECommerce</Link>
					</li>
					<li>
						<Link to={"API"} className="link">Data From API</Link>
					</li>
					<li>
						<Link to={"API2"} className="link">Data From API 2</Link>
					</li>
					<li>
						<Link to={"ECommerceAPI"} className="link">ECommerceFrmAPI</Link>
					</li>

					<li>
						<Link to={"Testing"} className="link">Testing</Link>
					</li>
					<li>
						<Link to={"*"} className="link">ErrorPage</Link>
					</li>
				</ul>
			</header>
		</div>
	);
}
export default PageList;