import React from "react";
import "../styles/Header.css";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";
import Logo from "../assets/TL.png";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
	return (
		<div className="header">
			<IconButton>
				<PersonIcon fontSize="large" className="header__icon" />
			</IconButton>

			<img className="header__logo" src={Logo} alt="" />
			<IconButton>
				<ForumIcon fontSize="large" className="header__icon" />
			</IconButton>
		</div>
	);
}

export default Header;
