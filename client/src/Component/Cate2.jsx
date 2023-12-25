import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";
import { Link } from "react-router-dom";

const Categories = () => {
  const [cardsData, setCardsData] = useState([]);
  const [authToken, setAuthToken] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    const Token = getCookie("accessToken");
    setAuthToken(Token);
    axios
      .get("http://127.0.0.1:3001/secondpage/category/17")
      .then((response) => {
        setCardsData(response.data.product);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const getCookie = (name) => {
    let cookieArray = document.cookie.split("; ");
    for (let cookie of cookieArray) {
      let [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };

  const Token = getCookie("accessToken");
  console.log(authToken);


  // Filter cards with IDs 4, 5, and 6
  // const filteredCards = cardsData.filter(card => [5, 6, 7].includes(card.id));
  const toggleWishlist = async (cardId) => {
    if (wishlist.includes(cardId)) {
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
      }
    } else {
      try {
        // إضافة الكارد إلى المفضلة
        //http://127.0.0.1:3001/addwishlist/:id
        await axios.post(
          `http://127.0.0.1:3001/addwishlist/${cardId}`,
          { cardId },
          {
            headers: {
              Authorization: ` ${authToken}`,
              // Add other headers if needed
            },
          }
        );
        setWishlist([...wishlist, cardId]);
        setUserFavorites([
          ...userFavorites,
          cardsData.find((card) => card.id === cardId),
        ]);
      } catch (error) {
        console.error("Error adding to favorites:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <br />
      <br />
      {Array.from({ length: 1 }).map((_, groupIndex) => (
        <div key={groupIndex}>
          <h1 className="text-3xl font-bold my-4">One <span className="text-blue-500">Visit</span> </h1>
          <h3 className="text-1xl text-center text-gray-600 my-6">
            Awesome site. On the top advertising a business online includes
            <br />
            assembling Having the most keep.
          </h3>
          <br />
          <br />
          <div id="grids" className="grid grid-cols-2 gap-20">
            {cardsData.map((card, index) => (
              <div
                key={index}
                id="lala"
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  className="rounded-t-lg"
                  src={card.image_url}
                  alt=""
                  style={{ width: "400px", height: "250px" }}
                />
                <div className="p-4 text-center">
                  <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {card.name}
                  </h5>
                  {/* <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
                    {card.description}
                  </p> */}
                  <p className="text-bold text-gray-700 dark:text-gray-400 mb-4">
                    {card.price}
                  </p>
                  {/* <button
                  onClick={() => toggleWishlist(card.id)}
                  className={`${
                    wishlist.includes(card.id) ? 'text-red-500' : 'text-blue-500'
                  } text-2xl focus:outline-none`}
                >
                  &#x2764;
                </button> */}
                  {authToken && (
                    <button
                      onClick={() => toggleWishlist(card.id)}
                      className={`${
                        wishlist.includes(card.id)
                          ? "text-red-500"
                          : "text-blue-500"
                      } text-2xl focus:outline-none`}
                    >
                      &#x2764;
                    </button>
                  )}

                  <Link
                    to={`/Detelis/${card.id}`}
                    id="Read"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover-bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
                  >
                    Datiles
                    <svg
                      className="w-3 h-3 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
};

export default Categories;
