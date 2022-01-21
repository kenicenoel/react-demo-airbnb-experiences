import "./App.css";
import Card from "./components/ui/card/Card";
import Hero from "./components/ui/hero/Hero";
import river from "./images/river.jpg";

function App() {
	return (
		<div className='container'>
			<Hero />
			<div className='cards'>
				<Card
					title='Dinner on the Caroni river'
					cost={40}
					country='Trinidad'
					rating={4.2}
					reviewCount={45}
					image={river}
				/>
			</div>
		</div>
	);
}

export default App;
