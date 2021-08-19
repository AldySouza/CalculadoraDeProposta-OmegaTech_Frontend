import "./ListaPropostas.css";
import CardProposta from "../CardProposta";
import propostas from "../../service/propostas.json";

const ListaPropostas = () => {
	return (
		<div className="propostas">
			{propostas.map((p) => (
				<CardProposta props={p} />
			))}
		</div>
	);
};

export default ListaPropostas;
