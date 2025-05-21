import React from 'react'
import list from "../../src/list.json"
import Cards from './Cards'
import axios from "axios";
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react'
function Course() {
    const [book,setbook]=useState([]);
    
    useEffect(() => {
      const getBook = async () => {
        try {
          const res = await axios.get("https://bookstore-7jom.onrender.com/books");
          console.log(res.data.books); 
          setbook(res.data.books)
        } catch (error) {
          console.error("Error fetching books:", error);
        }
      };
    
      getBook();
    }, []);
    return (
        <div className="max-w-screen-2xl container mx-auto px-19">
            <div className="pt-28 text-center">
                <h1 className="text-3xl">
                    We're delighted to have <span className="text-pink-500">you Here!</span>
                </h1>
                <p className="mt-12 text-gray-700 dark:text-gray-300" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non et aliquid enim deserunt ea sint amet est nihil labore, quo magni alias velit deleniti cumque similique, sequi architecto eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa cumque, cum assumenda facilis animi soluta consequatur quibusdam aliquam a quidem ratione pariatur! Aperiam, culpa! Delectus perspiciatis aliquid harum aut.
                </p>
                <Link to="/">
                <button  className="mt-8 px-6 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition-all duration-300">
                    Back
                </button>
                </Link> 
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 ">
                {book.map((data)=>{
                    return <Cards data={data} key={data.id }></Cards>
                })}
            </div>
        </div>
    )
}

export default Course
