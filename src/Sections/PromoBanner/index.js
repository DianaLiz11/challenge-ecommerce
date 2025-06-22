import React, { useState, useEffect } from 'react';
import './styles.css';

const PromoBanner = () => {
  const [tiempoRestante, setTiempoRestante] = useState(24 * 60 * 60); // 24 hrs

  useEffect(() => {
    if (tiempoRestante <= 0) return;

    const intervalo = setInterval(() => {
      setTiempoRestante((tiempo) => tiempo - 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  const formatoTiempo = (segundos) => {
    const hr = String(Math.floor(segundos / 3600)).padStart(2, "0");
    const min = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
    const segLess = String(segundos % 60).padStart(2, "0");
   
    return (
    <div className='time-container'>
      <div className='element-cont'>
        <span className='label'>{hr}</span>
        <span className='small-text'>horas</span>
      </div>
      <div className='element-cont'>
        <span className='label'>{min}</span>
        <span className='small-text'>minutos</span>
      </div>
      <div className='element-cont'>
        <span className='label'>{segLess}</span>
        <span className='small-text'>segundos</span>
      </div>
    </div>
    );
  };


  return (
    <section className='main-container'>
      <p className='label'>
        {'TODAS LAS VELAS AL 2X1 '}
        <span className='text-1'>ÚLTIMA OPORTUNIDAD</span>
      </p>
      <div>
        {formatoTiempo(tiempoRestante)}
        {tiempoRestante === 0 && <p>¡Tiempo terminado!</p>}
      </div>
    </section>
  );
};

export default PromoBanner;