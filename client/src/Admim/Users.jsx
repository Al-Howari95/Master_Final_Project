


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10); // Set the number of users per page

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3001/getallusers');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.put(`http://127.0.0.1:3001/delete/${userId}`);
      fetchData(); // Refresh the data after deletion
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // const handleAddUser = async () => {
  //   try {
  //     const newUser = {
  //       username: 'New User',
  //       email: 'newuser@example.com',
  //       phone: '123-456-7890',
  //     };

  //     await axios.post('http://127.0.0.1:3001/registerAdmin', newUser);
  //     fetchData(); // Refresh the data after adding a new user
  //   } catch (error) {
  //     console.error('Error adding user:', error);
  //   }
  // };

  // const handleEdit = (userId) => {
  //   console.log(`Edit user with ID ${userId}`);
  // };

  // const isEditingAllowed = () => {
  //   return false;
  // };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    
    <div className="max-w-screen-xl mx-auto mt-8">
      <>
        {/* Render the table with paginated users */}
        <table id='table' className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 border-collapse block md:table mx-auto mr-auto">
          <thead className="block md:table-header-group">
            <tr className="border border-black-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
               <th className="bg-blue-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                 ID
               </th>
               <th className="bg-blue-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
               username
               </th>
               <th className="bg-blue-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                 Email
               </th>
               <th className="bg-blue-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                 Phone
               </th>
               <th className="bg-blue-500 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                 Actions
               </th>
             </tr>
           </thead>
          <tbody className="block md:table-row-group">
            {currentUsers.map((user) => (
              <tr key={user.id} className="bg-blue-100 border border-blue-100 md:border-none block md:table-row">
                <td className="p-2 md:border md:border-blue-300 text-left block md:table-cell">
                  {user.id}
                </td>
                <td className="p-2 md:border md:border-blue-300 text-left block md:table-cell">
                  {user.username}
                </td>
                <td className="p-2 md:border md:border-blue-300 text-left block md:table-cell">
                  {user.email}
                </td>
                <td className="p-2 md:border md:border-blue-300 text-left block md:table-cell">
                  {user.phone_number}
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

        {/* Render pagination controls */}
        <div className="mt-4 flex justify-center">
          {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Add user button */}
        {/* <div className="mt-4">
          <button
            onClick={handleAddUser}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-500 rounded"
          >
            Add User
          </button>
        </div> */}
      </>
    </div>
  );
};

export default Users