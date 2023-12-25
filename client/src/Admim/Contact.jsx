import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [authToken, setAuthToken] = useState(null);


  useEffect(() => {
    const Token = getCookie("accessToken");
    setAuthToken(Token);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3001/getcontactus');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.put(`http://127.0.0.1:3001/softDeleteContact/${userId}`,{
        headers: {
          Authorization: ` ${authToken}`,
          // Add other headers if needed
        }});
      fetchData(); // Refresh the data after deletion
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

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

  return (
    <div className="max-w-screen-xl mx-auto mt-8">
      <>
        <table id='table' className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 border-collapse block md:table mx-auto mr-auto">
          <thead className="block md:table-header-group">
            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
              <th className="bg-blue-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                ID
              </th>
              <th className="bg-blue-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              name
              </th>
              <th className="bg-blue-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Email
              </th>
              
              <th className="bg-blue-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              subject
              </th>
              <th className="bg-blue-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {users.map((user) => (
              <tr key={user.id} className="bg-blue-100 border border-blue-100 md:border-none block md:table-row">
                <td className="p-2 md:border md:border-blue-300 text-left block md:table-cell">
                  {user.id}
                </td>
                <td className="p-2 md:border md:border-blue-300 text-left block md:table-cell">
                  {user.user_name}
                </td>
                <td className="p-2 md:border md:border-blue-300 text-left block md:table-cell">
                  {user.user_email}
                </td>
                
                <td className="p-2 md:border md:border-blue-300 text-left block md:table-cell">
                  {user.user_message}
                </td>
                <td className="p-2 md:border md:border-blue-300 text-left block md:table-cell">
                  {/* <button
                    onClick={() => handleEdit(user.id)}
                    disabled={!isEditingAllowed()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
                  >
                    Edit
                  </button> */}
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          {/* <button
            onClick={handleAddUser}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-500 rounded"
          >
            Add User
          </button> */}
        </div>
      </>
    </div>
  );
};

export default Users;
