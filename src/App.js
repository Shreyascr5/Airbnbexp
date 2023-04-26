import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Katie from "./images/katie-zaferes.png"
import Star from "./images/star.png"
import wedding from "./images/wedding-photography.png"
import mountain from "./images/mountain-bike.png"


export default function App(){
   
   
    return(
        <>
        <Navbar/>
        <Hero/>
        <div className="cards-list">
           <Card
            img={Katie}
            star={Star}
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life lessons with Katie Zaferes"
            
            price={136}

           />
           <Card
            img={wedding}
            star={Star}
            rating="5.0"
            reviewCount={30}
            country="Online"
            title="Learn Wedding photography"
            price={125}

           />
           <Card
            img={mountain}
            star={Star}
            rating="4.8"
            reviewCount={2}
            country="Norway"
            title="Group Montain Biking"
            price={50}

           />
         
    </div>
    </>
    )
}