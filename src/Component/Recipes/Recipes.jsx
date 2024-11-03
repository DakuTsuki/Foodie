import React from "react";
import img1 from '../../assets/Food1.jpg'
import img2 from '../../assets/easy-shrimp-cocktail.webp'
import img3 from '../../assets/Funghi.jpg'
import img4 from '../../assets/Spicy-Vodka-Rigatoni.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';

const Recipes = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
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
  return (
    <div>
      <div className="w-3/4 m-auto">
      <div className="my-20">
      <Slider {...settings}>
        {data.map((d) =>(
          <div className="bg-orange sm:h-[23rem] text-black rounded-xl h-[320px]">
            <div className="rounded-t-xl bg-orange flex justify-center items-center">
              <img src={d.img} alt="" className="lg:h-[12rem] lg:w-[26rem] h-[10rem]"/>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className="text-xl font-semibold">{d.name}</p>
              <p>{d.review}</p>
              <button className="bg-orange-500 text-white text-lg px-6 py-1 rounded-xl">Read More</button>
            </div>
          </div>
        ))}

        </Slider>
        </div>
        
        </div>
    </div>
  );
};

const data = [
  {
    name: "Mozzarella Carrozza",
    img: `${img1}`,
    review:
      "A Osteria Barocca, have creamy scrumptious starters to kick off your evening for a memorable Italian dining experience.",
  },
  {
    name: "Shrimp Cocktail",    
    img: `${img2}`,
    review:
      "Exotic seafood starters like Shrimp Cocktail dipped in special cocktail sauce, the Italian Way to get dinner started.",
  },
  {
    name: "Funghi Pizza",
    img: `${img3}`,
    review:
      "At Osteria Barocca, we offer a variety of pizzas and multiple selections including vegan, vegetarian, and meat options.",
  },
  {
    name: "Spicy Vodka Rigatoni Pasta",
    img: `${img4}`,
    review:
      "No Italian dinner is complete if it doesn’t have pasta in it. So dive in and enjoy a variety of pasta that’ll leave you craving for more.",
  },
];
export default Recipes;
