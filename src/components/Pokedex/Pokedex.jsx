// components
import Pokecard from '../Pokecard/Pokecard';
// styles
import s from './Pokedex.module.css';

export default function Pokedex({ pokemons, isWinner, exp }) {
  const title = isWinner ? <h1 className={s.winner}>Winner hand</h1> : <h1 className={s.looser}>Looser hand</h1>;

  return (
    <>
      {title}

      <p className={s.exp}>Total exp: {exp}</p>
      <div className={s.Pokedex}>
        {pokemons.map(({ id, name, type, base_experience }) => (
          <Pokecard id={id} name={name} type={type} exp={base_experience} key={id} />
        ))}
      </div>
    </>
  );
}
