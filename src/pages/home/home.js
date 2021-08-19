import Header from "../../components/Header";
import ListaPropostas from "../../components/ListaPropostas";

import "./home.css";
const Home = () => {
	return (
		<div>
			<Header />
			<div className="body">
				<ListaPropostas />
			</div>
		</div>
	);
};
export default Home;
