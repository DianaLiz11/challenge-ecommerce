import HeroBanner from './Sections/HeroBanner';
import ProductsCarousel from './Sections/ProductsCarousel';
import Categories from './Sections/Categories';
import PromoBanner from './Sections/PromoBanner';

function App() {
  return (
    <div>
      <PromoBanner />
      <HeroBanner />
      <ProductsCarousel />
      <Categories />
    </div>
  );
}

export default App;
