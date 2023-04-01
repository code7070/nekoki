import IconClock from "@components/icons/assets/clock";
import { IconPeople } from "../icons/assets";
import IconTextList from "../icons/assets/text-list";
import style from "./recipe.module.scss";

interface Recipe {
  title?: string;
  portion?: number;
  price?: { idr: any } | number;
  time?: number | object;
}

interface Row {
  icon: JSX.Element | string;
  text: string;
}

const Row = ({ icon, text }: Row) => (
  <div className="flex items-center gap-1 text-slate-500">
    <div>{icon}</div>
    <div className="text-sm ">{text}</div>
  </div>
);

export default function Recipe(props: Recipe) {
  return (
    <div className={style.recipe}>
      <div className={style.image}></div>
      <div className={style.title}>{props.title}</div>
      <Row icon={<IconClock />} text={`${props.portion} porsi`} />
      <Row icon={<IconTextList />} text={`Rp. ${props.price} (est)`} />
      <Row icon={<IconPeople />} text={`${props.portion} porsi`} />
    </div>
  );
}
