import style from "./Card.module.css";
interface CardProps {
	title: string;
	image: string;
	reviewCount: number;
	rating: number;
	cost: number;
	openSpots: number;
	location: string;
}
export default function Card(props: CardProps) {
	let badgeText;
	if (props.openSpots == 0) {
		badgeText = "Sold out";
	} else if (props.openSpots > 0 && props.openSpots <= 5) {
		badgeText = "Almost gone";
	}

	if (props.location.toLowerCase() === "online") {
		badgeText = `${badgeText ?? ""} 🟢`;
	}
	return (
		<div className={style.card}>
			{badgeText && (
				<div className={style.statusBadgeSoldOut}>
					<small>{badgeText}</small>
				</div>
			)}
			<div className={style.cardData}>
				<img className={style.image} src={props.image} alt='Photo' />
				<div className={style.ratingWrapper}>
					<img className={style.star} src='assets/images/star.svg' alt='Star' />
					<p className={style.rating}>
						<span>{props.rating} </span>
						<span>({props.reviewCount}) </span>
						<span> • {props.location}</span>
					</p>
				</div>
				<p className={style.title}>{props.title}</p>
				<div className={style.costWrapper}>
					<p>
						<span className={style.cost}>From ${props.cost}</span>
						<span className={style.costSuffix}> / person</span>
					</p>
				</div>
			</div>
		</div>
	);
}
