import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Wishlist = () => {
  const [authToken, setAuthToken] = useState(null);
  const [userFavorites, setUserFavorites] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  console.log(userFavorites)

  useEffect(() => {
    const Token = getCookie("accessToken");
    setAuthToken(Token);
    // Define the Git repository URL or any other API endpoint
    const gitRepoUrl = 'http://127.0.0.1:3001/wishlist';

    // Fetch data using Axios
    axios.get(gitRepoUrl,{
          headers: {
            Authorization: ` ${authToken}`,
          }
          })
      .then(response => {
      
        // Assuming the response data is an array of favorites
        setUserFavorites(response.data.product);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [authToken]); // Empty dependency array ensures the effect runs only once when the component mounts

  //const formData = new FormData();
   //   formData.append('image',userFavorites.image);
//console.log("<pksgal",formData)

  const getCookie = (name) => {
    let cookieArray = document.cookie.split('; ');
    for (let cookie of cookieArray) {
      let [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };


  const Token = getCookie("accessToken");
console.log(authToken);

const toggleWishlist = async (cardId) => {
    try {
      //http://127.0.0.1:3001/editwishlist/:id
      // إلغاء إعجاب بالكارد
      await axios.delete(`http://127.0.0.1:3001/editwishlist/${cardId}`, {
        headers: {
          Authorization: ` ${authToken}`,
          // Add other headers if needed
        },
      });
      setWishlist(wishlist.filter((id) => id !== cardId));
      setUserFavorites(userFavorites.filter((card) => card.id !== cardId));
    } catch (error) {
      console.error("Error removing from favorites:", error);
    
  }}
  
  return (
    <div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4"></h2>
        <div className="flex flex-wrap justify-center gap-20">
          {userFavorites&&userFavorites.map((favorite, index) => (
            <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src={favorite.image_url} alt="" />
              <div className="p-4 text-center">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {favorite.name}
                </h5>
                {/* <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
                  {favorite.description}
                </p> */}
                <p className="text-bold text-gray-700 dark:text-gray-400 mb-4">
                  {favorite.price}
                </p>
                <button 
                    onClick={() => toggleWishlist(favorite.id)}
                    className={`${
                      wishlist.includes(favorite.id)
                        ? "text-red-500"
                        : "text-red-500"
                    } text-2xl focus:outline-none flex-start mr-80`}
                  >
                    &#x2764;
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;