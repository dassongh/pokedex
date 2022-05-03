// styles
import s from './Pokecard.module.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

export default function Pokecard({ name, id, type, exp }) {
  const padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);
  const imgSrc = `${POKE_API}${padToThree(id)}.png`;

  return (
    <div className={s.Pokecard}>
      <h1 className={s.name}>{name}</h1>
      <div className={s.Pokecard_image}>
        <img src={imgSrc} alt={name} />
      </div>
      <div className={s.Pokecard_data}>Type: {type}</div>
      <div className={s.Pokecard_data}>EXP: {exp}</div>
    </div>
  );
}
