import React from 'react';
import styles from './PokemonDetails.module.css'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


export const PokemonDetails = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('location');
    console.log(location.state);
  })

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.item}>
          <img className={styles.image} src={location.state.sprites.other["official-artwork"].front_default} alt="" />
          <h3 className={styles.imageText}>{location.state.name}</h3>
          <h4>{`Height: ${location.state.height}`}</h4>
          <h4>{`Weight: ${location.state.weight}`}</h4>
          <h4>In Bag</h4>
          <p>
            Pianoforte solicitude so decisively unpleasing conviction is partiality he.
            Or particular so diminution entreaties oh do. Real he me fond show gave shot plan.
            Mirth blush linen small hoped way its along.
          </p>
          <h4>Abilities</h4>
          <ul>
            {
              location.state.abilities.map((ability: any) => (
                <li>{ability.ability.name}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
