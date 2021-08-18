import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsLightningFill, BsCalendar } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";

const CardProposta = ({ props }) => {
	return (
		<div className="card--proposta">
			<h2>Contratado</h2>
			<div className="info">
				<label>
					<AiOutlineDollarCircle />
					<p>50000,00</p>
				</label>
				<label>
					<BsLightningFill />
					<p>Convencional</p>
				</label>
				<label>
					<SiGooglemaps />
					<p>Nordeste</p>
				</label>
				<label>
					<BsCalendar />
					<p>08/2021 - 08/2025 </p>
				</label>
				<label>
					<BsLightningFill />
					<p>Convencional</p>
				</label>
			</div>
		</div>
	);
};
export default CardProposta;
