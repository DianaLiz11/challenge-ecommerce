import React, {useEffect, useState} from "react";
import "./styles.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../../Components/ProductCard";
import axios from "axios";

const ProductsCarousel = () => {
  const [productsList, setProductsList] = useState([]);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "oklch(92.9% 0.013 255.508)" }}
        onClick={onClick}
      />
    );
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "oklch(92.9% 0.013 255.508)" }}
        onClick={onClick}
      />
    );
  };
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  async function getProductsList() {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/DianaLiz11/challenge-ecommerce/refs/heads/master/src/utils/productsremote.json');
    console.log(response);
    setProductsList(response.data);
  } catch (error) {
    console.error(error);
  }
}

  useEffect(() => {
    getProductsList();
  }, [])

  return (
    <section className="main-cont">
      <h3>Your next fave is only at Ulta</h3>
      <p className="grey-text">{`${productsList.length} items`}</p>
      <div className="carousel-container">
        <Slider {...settings}>
          {productsList && productsList.length > 0 ? (
            productsList.map(item => {
              return (
                <ProductCard
                  imageUrl={item.imageUrl}
                  brand={item.brand}
                  name={item.name}
                  price={item.price}
                  score={item.score}
                  off={item.off}
                  isFreeGift={item.isFreeGift}
                />
              );
            })
          )
        : null}
        </Slider>
      </div>
    </section>
  );
};

export default ProductsCarousel;
