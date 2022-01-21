import React from "react";
import logo from "../../images/airbnb.png";
import style from "./NavigationBar.module.css";

export default function NavigationBar() {
	return (
		<div>
			<nav className={style.nav}>
				<div>
					<img className={style.logo} src={logo} alt='Logo' />
				</div>
			</nav>
		</div>
	);
}
