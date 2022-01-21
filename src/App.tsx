import "./App.css";
import Card from "./components/ui/card/Card";
import Hero from "./components/ui/hero/Hero";
import data from "./assets/json/data";

interface ExperienceData {
	id: number;
	title: string;
	description: string;
	price: number;
	coverImg: string;
	stats: {
		rating: number;
		reviewCount: number;
	};
	location: string;
	openSpots: number;
}

function App() {
	const experiences: ExperienceData[] = data;
	return (
		<div className='container'>
			<Hero />
			<div className='cards'>
				{experiences.map((experience) => {
					return (
						<Card
							key={experience.id}
							title={experience.title}
							cost={experience.price}
							country={experience.location}
							rating={experience.stats.rating}
							reviewCount={experience.stats.reviewCount}
							image={`assets/images/${experience.coverImg}`}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
