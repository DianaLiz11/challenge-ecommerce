import React from 'react';
import './styles.css';
import makeup from './imgs/makeup.png';
import skincare from './imgs/skincare.png';
import haircare from './imgs/haircare.png';
import CategoryCard from '../../Components/CategoryCard';

const Categories = () => {
  return (
    <section className="container">
      <h2>Summer-ready beauty</h2>
      <div className='container-img'>
        <CategoryCard imgurl={makeup} title={"Makeup"} />
        <CategoryCard imgurl={skincare} title={"Skin care"} />
        <CategoryCard imgurl={haircare} title={"Hair care"} />
      </div>
    </section>
  );
};

export default Categories;