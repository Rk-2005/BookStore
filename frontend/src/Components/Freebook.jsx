import React from 'react'
import {useState,useEffect} from 'react'
import list from "../../src/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import axios from "axios";
import Slider from "react-slick";
import Cards from './Cards';
function Freebook() {
    const [book,setbook]=useState([]);
    
useEffect(() => {
  const getBook = async () => {
    try {
      const res = await axios.get("http://localhost:3000/books");
      console.log(res.data.books); 
      setbook(res.data.books)
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  getBook();
}, []);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
     
      
    const books=book.filter((data)=>{
        return data.category=="free";
    })
    
  return (
    <>
    <div className="max-screen-2xl container md:px-20 px-4 ">
        <div>
        <h1 className="text-2xl font-semibold pb-2">Free Course Offered</h1>
        <p className="text-gray-700 mt-2  dark:text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, error placeat? Fuga provident velit architecto sit odio alias doloremque itaque tenetur pariatur aliquam! Est reprehenderit ratione ad dignissimos, laborum sit!</p>
        </div>
    
    <div className="mt-8">
    <Slider {...settings}>
        {books.map((data)=>{
           
           return <Cards data={data} key={data.id} ></Cards>
        })}
      </Slider>
    </div>
    </div>
    </>   
  )
}

export default Freebook