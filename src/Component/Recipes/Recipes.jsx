import React from "react";
import img1 from '../../assets/Food1.jpg'
import img2 from '../../assets/easy-shrimp-cocktail.webp'
import img3 from '../../assets/Funghi.jpg'
import img4 from '../../assets/Spicy-Vodka-Rigatoni.jpg'

import { IoBedOutline } from "react-icons/io5";
import { IoManOutline } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosCamera } from "react-icons/io";
import { IoFilm } from "react-icons/io5";
import './style.css'

const Recipes = () => {
 return(
    <div>
     <section class="property" id="property">
     <div class="container">

{/* <p class="section-subtitle">Properties</p> */}

<h2 class="h2 section-title">Recipes</h2>
    
  

   <ul class="property-list has-scrollbar">
   {data.map((d) =>(
     <li>
       <div class="property-card">

         <figure class="card-banner">

           <a href="#">
             <img src={d.img} alt="New Apartment Nice View" class="w-100"/> 
           </a>

           {/* <div class="card-badge green">For Rent</div> */}
{/* 
           <div class="banner-actions">

             <button class="banner-actions-btn">
             <IoLocationOutline />

               <address>Belmont Gardens, Chicago</address>
             </button>

             <button class="banner-actions-btn">
             <IoIosCamera />

               <span>4</span>
             </button>

             <button class="banner-actions-btn">
             <IoFilm />

               <span>2</span>
             </button>

           </div> */}

         </figure>

         <div class="card-content">

           {/* <div class="card-price">
             <strong>$34,900</strong>/Month
           </div> */}

           <h3 class="h3 card-title">
             <a href="#">{d.name}</a>
           </h3>

           <p class="card-text">
            {d.review}
           </p>

           {/* <ul class="card-list">

             <li class="card-item">
               <strong>3</strong>

              <IoBedOutline />

               <span>Bedrooms</span>
             </li>

             <li class="card-item">
               <strong>2</strong>

            <IoManOutline />

               <span>Bathrooms</span>
             </li>

             <li class="card-item">
               <strong>3450</strong>

               <FaRegSquare />

               <span>Square Ft</span>
             </li>

           </ul> */}

         </div>

         {/* <div class="card-footer">

           <div class="card-author">

             <figure class="author-avatar">
               <img src={author} alt="William Seklo" class="w-100" />
             </figure>

             <div>
               <p class="author-name">
                 <a href="#">William Seklo</a>
               </p>

               <p class="author-title">Estate Agents</p>
             </div>

           </div>

           <div class="card-footer-actions">

             <button class="card-footer-actions-btn">
               <ion-icon name="resize-outline"></ion-icon>
             </button>

             <button class="card-footer-actions-btn">
               <ion-icon name="heart-outline"></ion-icon>
             </button>

             <button class="card-footer-actions-btn">
               <ion-icon name="add-circle-outline"></ion-icon>
             </button>

           </div>

         </div> */}

       </div>
     </li>
))}

               </ul>

</div>
   
      </section>
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
