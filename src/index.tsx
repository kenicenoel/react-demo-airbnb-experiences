import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import Layout from "./components/layout/Layout";

ReactDOM.render(
	<React.StrictMode>
		<NavigationBar />,
		<Layout>
			<App />
		</Layout>
	</React.StrictMode>,
	document.getElementById("root")
);
