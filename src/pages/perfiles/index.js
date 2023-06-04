//box de inicio y menu funcionando a su totalidad, caja con color para modificar donde iria  foto, nombre, correo, varias cajas

import React, { useState } from 'react';
import Layout from "../layout/layout";
import './perfiles.css';


const Star = ({ filled, onClick }) => {
  const starStyle = {
    cursor: 'pointer',
    color: filled ? 'gold' : 'white',
    fontSize: '24px',
    
  };

  return <span onClick={onClick} style={starStyle}>★</span>;
};

const Rating = ({ rating, onStarClick }) => {
  return (
    <div className="rating">
      {rating.map((filled, index) => (
        <Star
          key={index}
          filled={filled}
          onClick={() => onStarClick(index)}
        />
      ))}
    </div>
  );
};

export default function Perfiles() {
  const perfiles = [
    { nombre: 'Perfiles destacados', ruta: '/perfiles' },
    { nombre: 'Agenda cultural', ruta: '/agenda' },
    { nombre: 'Foro', ruta: '/foro' },
    { nombre: 'Usuario', ruta: '/usuario' },
  ];

  function Tarjeta({ nombre, identificacion, correo, avatar, conoce, reseña }) {
    const [rating, setRating] = useState([false, false, false, false, false]);

    const handleStarClick = (index) => {
      const updatedRating = rating.map((filled, i) => (i <= index ? true : false));
      setRating(updatedRating);
    };

    return (
      <div className="tarjeta">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <div className="flex items-center space-x-4 mb-4">
          <img
            className="w-12 h-12 rounded-full shadow-lg"
            src={avatar}
            alt="Imagen de perfil"
          />
         
          </div>
          <h5 className="mb-1 text-xl font-medium text-white-900">
            {nombre}
          </h5>
          <div className="text-sm text-white-500">
            <span>{correo}</span>
          </div>
          <div className="text-sm text-white-500">
            <span>{identificacion}</span>
          </div>
          <p></p>
          <div className="text-sm text-white-500">
            <span>{conoce}</span>
          </div>
          <p></p>
          <div className="text-sm text-white-500">
            <span>{reseña}</span>
          </div>
          
          <Rating rating={rating} onStarClick={handleStarClick} />
          
        </div>
      </div>
    );
  }

  return (
    <Layout>

      <div className="tarjetas-container">
        <Tarjeta
          nombre="Michael Lawson"
          identificacion="Nómada digital"
          correo="michael.lawson@reqres.in"
          conoce="Trabajo y viajo alrededor del mundo, recomiendo los mejores sitios para nómadas digitales como yo."
          reseña="¿Qué te parece este perfil? ¡Califícalo!"
          avatar="https://reqres.in/img/faces/7-image.jpg"
        />

        <Tarjeta
          nombre="Rachel Howell"
          identificacion="Foodie"
          correo="rachel.howell@reqres.in"
          conoce="Todo sobre comidas tipicas a un buen precio."
          reseña="¿Qué te parece este perfil? ¡Califícalo!"
          avatar="https://reqres.in/img/faces/12-image.jpg"
        />

        <Tarjeta
          nombre="Lindsay Ferguson"
          identificacion="Viajera"
          correo="lindsay.ferguson@reqres.in"
          conoce="Te recomiendo los mejores y más económicos lugares culturales."
          reseña="¿Qué te parece este perfil? ¡Califícalo!"
          avatar="https://reqres.in/img/faces/8-image.jpg"
        />

        <Tarjeta
          nombre="Tobias Funke"
          identificacion="Gestor cultural"
          correo="tobias.funke@reqres.in"
          conoce="Desde mi experiencia te comparto las mejores experiencias culturales."
          reseña="¿Qué te parece este perfil? ¡Califícalo!"
          avatar="https://reqres.in/img/faces/9-image.jpg"
        />


        <Tarjeta
          nombre="Byron Fields"
          identificacion="Influencer"
          correo="byron.fields@reqres.in"
          conoce="Todo tipo de experiencia cultural recomendado por mis seguidores."
          reseña="¿Qué te parece este perfil? ¡Califícalo!"
          avatar="https://reqres.in/img/faces/10-image.jpg"
        />



        <Tarjeta
          nombre="George Edwards"
          identificacion="Cinéfilo"
          correo="george.edwards@reqres.in"
          conoce="Te recomiendo todo sobre el cine y la cultura."
          reseña="¿Qué te parece este perfil? ¡Califícalo!"
          avatar="https://reqres.in/img/faces/11-image.jpg"
        />



        <Tarjeta
          nombre="Tobias Funke"
          identificacion="Gestor cultural"
          correo="tobias.funke@reqres.in"
          conoce="Desde mi experiencia te comparto las mejores experiencias culturales."
          reseña="¿Qué te parece este perfil? ¡Califícalo!"
          avatar="https://reqres.in/img/faces/9-image.jpg"
        />

        <Tarjeta
          nombre="George Edwards"
          identificacion="Cinéfilo"
          correo="george.edwards@reqres.in"
          conoce="Te recomiendo todo sobre el cine y la cultura."
          reseña="¿Qué te parece este perfil? ¡Califícalo!"
          avatar="https://reqres.in/img/faces/11-image.jpg"
        />

        <Tarjeta
          nombre="Michael Lawson"
          identificacion="Nómada digital"
          correo="michael.lawson@reqres.in"
          conoce="Trabajo y viajo alrededor del mundo, recomiendo los mejores sitios para nómadas digitales como yo."
          reseña="¿Qué te parece este perfil? ¡Califícalo!"
          avatar="https://reqres.in/img/faces/7-image.jpg"
        />

        <Tarjeta
          nombre="Rachel Howell"
          identificacion="Foodie"
          correo="rachel.howell@reqres.in"
          conoce="Todo sobre comidas tipicas a un buen precio."
          reseña="¿Qué te parece este perfil? ¡Califícalo!"
          avatar="https://reqres.in/img/faces/12-image.jpg"
        />

        <Tarjeta
          nombre="Byron Fields"
          identificacion="Influencer"
          correo="byron.fields@reqres.in"
          conoce="Todo tipo de experiencia cultural recomendado por mis seguidores."
          reseña="¿Qué te parece este perfil? ¡Califícalo!"
          avatar="https://reqres.in/img/faces/10-image.jpg"
        />

        <Tarjeta
          nombre="Tobias Funke"
          identificacion="Gestor cultural"
          correo="tobias.funke@reqres.in"
          conoce="Desde mi experiencia te comparto las mejores experiencias culturales."
          reseña="¿Qué te parece este perfil? ¡Califícalo!"
          avatar="https://reqres.in/img/faces/9-image.jpg"
        />

        <Tarjeta
          nombre="Rachel Howell"
          identificacion="Foodie"
          correo="rachel.howell@reqres.in"
          conoce="Todo sobre comidas tipicas a un buen precio."
          reseña="¿Qué te parece este perfil? ¡Califícalo!"
          avatar="https://reqres.in/img/faces/12-image.jpg"
        />

        <Tarjeta
          nombre="George Edwards"
          identificacion="Cinéfilo"
          correo="george.edwards@reqres.in"
          conoce="Te recomiendo todo sobre el cine y la cultura."
          reseña="¿Qué te parece este perfil? ¡Califícalo!"
          avatar="https://reqres.in/img/faces/11-image.jpg"
        />

        <Tarjeta
          nombre="Michael Lawson"
          identificacion="Nómada digital"
          correo="michael.lawson@reqres.in"
          conoce="Trabajo y viajo alrededor del mundo, recomiendo los mejores sitios para nómadas digitales como yo."
          reseña="¿Qué te parece este perfil? ¡Califícalo!"
          avatar="https://reqres.in/img/faces/7-image.jpg"
        />

        <Tarjeta
          nombre="Lindsay Ferguson"
          identificacion="Viajera"
          correo="lindsay.ferguson@reqres.in"
          conoce="Te recomiendo los mejores y más económicos lugares culturales."
          reseña="¿Qué te parece este perfil? ¡Califícalo!"
          avatar="https://reqres.in/img/faces/8-image.jpg"

        />


      </div>
    </Layout>
  );
}
