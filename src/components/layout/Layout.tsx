import style from "./Layout.module.css";

interface LayoutProps {
	children: React.ReactNode;
}
export default function Layout(props: LayoutProps) {
	return <div className={style.wrapper}>{props.children}</div>;
}
