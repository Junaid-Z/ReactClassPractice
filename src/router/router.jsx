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
import ECommerce from "../MyProjects/ECommerce";
import DispDataFrmAPI from "../MyProjects/DisplayingDataFromAPI";
import APIPractice from "../MyProjects/APIPractice";
import ECommerceFrmAPI from "../MyProjects/ECommerceFromAPI";
import SingleProductFrmAPI from "../MyProjects/SingleProductFrmAPI";
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
				<Route path={"ECommerce"} element={<ECommerce />} />
				<Route path={"API"} element={<DispDataFrmAPI />} />
				<Route path={"API2"} element={<APIPractice />} />
				<Route path={"ECommerceAPI"} element={<ECommerceFrmAPI />} />
				<Route path={"ECommerceAPI/:id"} element={<SingleProductFrmAPI />} />
				<Route path={"*"} element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}
export default myRouter;