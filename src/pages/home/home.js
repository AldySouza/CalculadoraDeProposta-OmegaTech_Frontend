import Header from "../../components/Header";
import CardProposta from "../../components/CardProposta";
import { useState } from "react";

const Home = () => {
	const [propostaItems, setPropostasItems] = useState();

	return (
		<div>
			<Header />
			<div className="cards-proposta"></div>
			<CardProposta />
		</div>
	);
};
export default Home;
