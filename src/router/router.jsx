import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "../MyProjects/Cards";
import List from "../MyProjects/List"
import Counter from "../MyProjects/Counter";
import Testing from "../MyProjects/Testing";
import ErrorPage from "../MyProjects/ErrorPage";
import DynamicList from "../MyProjects/DynamicList";
import DynamicCards from "../MyProjects/DynamicCards";
import PageList from "../MyProjects/PageList";
import QuizApp from "../MyProjects/QuizApp";
function myRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path={"/"} element={<PageList />} />
				<Route exact path={"Counter"} element={<Counter />} />
				<Route path={"List"} element={<List />} />
				<Route path={"DynamicList"} element={<DynamicList />} />
				<Route path={"DynamicCards"} element={<DynamicCards />} />
				<Route path={"Cards"} element={<Cards />} />
				<Route path={"Testing"} element={<Testing />} />
				<Route path={"QuizApp"} element={<QuizApp />} />
				<Route path={"*"} element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}
export default myRouter;