import React from "react";
import style from "./NavigationBar.module.css";

export default function NavigationBar() {
	return (
		<div>
			<nav className={style.nav}>
				<div>
					<img
						className={style.logo}
						src='assets/images/airbnb.png'
						alt='Logo'
					/>
				</div>
			</nav>
		</div>
	);
}
