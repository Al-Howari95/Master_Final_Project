
import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    AOS.init();

    axios.get('http://127.0.0.1:3001/dashboard/allcategories')
      .then(response => {
        setData(response.data.categories);
        console.log("issa",response.data.categories)
      })
      .catch(error => console.error('حدث خطأ أثناء جلب البيانات: ', error));
  }, []);

  return (
    <div>
   <div><h1 className='keep'>
    Keep Your <span className="text-blue-500">Home Clean Now..</span>
   </h1></div><br></br>wonderful site. At the top is an advertisement for your online cleaning business..
    
      <div id='card' className='flex flex-wrap'>
        { data.map(keys => (
          <div key={keys.id} data-aos="fade-up" className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
            
            <div id='l' className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img id='image' className="rounded-t-lg" src={keys.images} alt="" 
            />
            <h5 id='text' className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{keys.name}</h5>
                
              <div className="p-5">
                  
           
                {/* <p id='text' className="mb-3 font-normal text-gray-700 dark:text-gray-400">{key.description}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <br></br><br></br>
      <Link to ="/Categores">
       <button class="bn632-hover bn28" id="button">VIEW MORE</button>
       </Link> 
    </div>
  );
};

export default Card;

