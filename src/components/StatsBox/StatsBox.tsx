import style from "./StatsBox.module.css";

interface Props {
  stat: { name: string; value: number };
}

export function StatsBox({ stat }: Props) {
  return (
    <div className={style.flex}>
      <div className={style.name}>{stat.name.toUpperCase()}</div>
      <div className={style.value}>{stat.value}</div>
    </div>
  );
}
