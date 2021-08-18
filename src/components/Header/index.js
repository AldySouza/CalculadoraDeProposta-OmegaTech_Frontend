import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";

export default () => {
	return (
		<header>
			<div className="header--logo">
				<a href="/">
					<img src={Logo} alt="Omega"></img>
				</a>
			</div>
			<div className="header--itens">
				<a href="/">Minhas Propostas</a>
				<a href="/">Crias Nova Proposta</a>
			</div>
			<div className="header--logout">
				<a href="/">Logout</a>
			</div>
		</header>
	);
};
