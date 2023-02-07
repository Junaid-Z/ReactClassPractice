import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "../MyProjects/Cards";
import List from "../MyProjects/List"
import { Counter } from "../MyProjects/Counter";
function myRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path={"/"} element={<Counter />} />
				<Route path={"list"} element={<List />} />
				<Route path={"cards"} element={<Cards />} />
				<Route path={"*"} element={<h1>No Such Page</h1>} />
			</Routes>
		</BrowserRouter>
	);
}
export default myRouter;