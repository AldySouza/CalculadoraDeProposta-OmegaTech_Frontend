import React, { useState } from "react";
import { AiOutlineDollarCircle, AiOutlineCalculator } from "react-icons/ai";
import { BsLightningFill, BsCalendar } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import Modal from "../Modal/Modal";

import "./CardProposta.css";

const CardProposta = ({ props }) => {
	function consumoTotal() {
		const consumoTotal = props.cargas
			.map((c) => c.consumo_kwh)
			.reduce((p, c) => {
				return +p + +c;
			});
		return consumoTotal;
	}
	function handleClick() {
		setOpen(true);
	}
	const [open, setOpen] = useState(false);

	return (
		<>
			<div className="card--proposta">
				<h2>{props.contratado ? "Contratado" : "Contrate Agora"}</h2>
				<div className="info">
					<label>
						<div className="item">
							<AiOutlineDollarCircle />
							<p>{props.valor_proposta}</p>
						</div>
					</label>
					<label>
						<div className="item">
							<BsLightningFill />
							<p>{props.fonte_energia}</p>
						</div>
					</label>
					<label>
						<div className="item">
							<SiGooglemaps />
							<p>{props.sub_mercado}</p>
						</div>
					</label>
					<label>
						<div className="item">
							<BsCalendar />
							<p>
								{" "}
								{props.data_inicio} - {props.data_fim}{" "}
							</p>
						</div>
					</label>
					<label>
						<div className="item">
							<AiOutlineCalculator />
							<p>Total {consumoTotal(props.cargas)}KWH</p>
						</div>
					</label>
				</div>
				{props.contratado && (
					<button className="btn detalhes" onClick={handleClick}>
						Detalhes
					</button>
				)}
				{!props.contratado && (
					<div className="buttons">
						<button className="btn exluir">Excluir</button>
						<button className="btn contratar">Contratar</button>
					</div>
				)}
			</div>
			<Modal open={open} data={props.cargas} setOpen={setOpen}></Modal>
		</>
	);
};
export default CardProposta;
