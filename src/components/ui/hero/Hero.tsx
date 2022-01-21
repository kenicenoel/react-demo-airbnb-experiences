import style from "./Hero.module.css";
import collage from "../../../images/collage.png";
export default function Hero() {
	return (
		<div className={style.heroContainer}>
			<img className={style.collage} src={collage} alt='Collage' />
			<h1 className={style.heading}>Online Experiences</h1>
			<p className={style.description}>
				Join unique interactive activities led by one-of-a-kind hosts—all
				without leaving home.
			</p>
		</div>
	);
}
