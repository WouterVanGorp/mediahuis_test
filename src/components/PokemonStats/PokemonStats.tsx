import style from "./PokemonStats.module.css";
import { StatsBox } from "./../../components";

interface Props {
  stats: { name: string; value: number }[];
}

export function PokemonStats({ stats }: Props) {
  return (
    <>
      <div className={style.title}>STATS</div>
      <div className={style.outer}>
        {stats.map((s) => (
          <div key={s.name} className={style.item}>
            <StatsBox stat={s} />
          </div>
        ))}
      </div>
    </>
  );
}
