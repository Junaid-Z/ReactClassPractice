import { Route, Routes } from "react-router-dom";
import Cards from "../MyProjects/Cards";
import List from "../MyProjects/List"
import { Counter } from "../MyProjects/Counter";
function myRouter() {
	return (
		<Route>
			<Routes location={"/"}>
				<Counter />
			</Routes>
			<Routes location={"list"}>
				<List />
			</Routes>
			<Routes location={"*"}>
				<Cards />
			</Routes>
		</Route>
	);
}
export default myRouter;