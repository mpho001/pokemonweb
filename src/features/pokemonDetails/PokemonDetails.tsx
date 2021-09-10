import React from 'react';
import styles from './PokemonDetails.module.css'
import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useEffect } from 'react';
import { fetchLocations, selectLocations } from './pokemonDetailsSlice';
import { GoogleMaps } from '../googleMaps/GoogleMaps';


export const PokemonDetails = () => {
  // const locations = useAppSelector(selectLocations);
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(fetchLocations(location.state.id))
    // pass positions to google maps component
  })

  const positions = [
    {
      lat: 32.7157,
      lng: -117.1611
    },
    {
      lat: 32.639954,
      lng: -117.106705
    }
  ]

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.item}>
          <img
            className={styles.image}
            src={location.state.sprites.other["official-artwork"].front_default}
            alt=""
          />
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
              location.state.abilities.map((ability: any, i: any) => (
                <li key={i}>{ability.ability.name}</li>
              ))
            }
          </ul>
        </div>
        <div className={styles.itemRight}>
          <GoogleMaps positions={positions} />
        </div>
      </div>
    </div>
  );
}
