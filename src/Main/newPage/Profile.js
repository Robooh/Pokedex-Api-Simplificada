import { useLocation } from 'react-router-dom';
import React from 'react';
import { Logo } from '../../Componentes/Header/header';
import './profile.css'


export const Profile = () => {
  const location = useLocation();
  const { name, img, type } = location.state || {};

  return (
    <main>
        <Logo/>
      <div className="pokemon-card">
            <h2 className='pokemon-name'>{name}</h2>
            <img className='pokemon-image' src={img}  alt='Shinys'></img>
            <p className='pokemon-type'>{type}</p>
      </div>
    </main>
  );
};

export default Profile;
