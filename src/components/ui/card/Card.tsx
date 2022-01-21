import style from "./Card.module.css";
interface CardProps {
	title: string;
	image: string;
	reviewCount: number;
	rating: number;
	cost: number;
	country: string;
}
export default function Card(props: CardProps) {
	const photo = props.image;
	return (
		<div className={style.card}>
			<img className={style.image} src={photo} alt='Photo' />
			<div className={style.ratingWrapper}>
				<img className={style.star} src='assets/images/star.svg' alt='Star' />
				<p className={style.rating}>
					<span>{props.rating} </span>
					<span>({props.reviewCount}) </span>
					<span> • {props.country}</span>
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
	);
}
