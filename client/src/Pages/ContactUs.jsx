import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContact = async (e) => {
    e.preventDefault();
    try {
      // Send the data to the server using Axios or another method
      const response = await axios.post("http://127.0.0.1:3001/contactus", {
        name: name,
        email: email,
        message: message,
      });
      console.log(email);

      // Handle the response as per your application's needs
      // alert("successfully", response.data);
      const result = await Swal.fire({
        icon: "success",
        title: "Successfully",
        text: `Message Send Thank You`,
        showConfirmButton: true,
        // timer: 5000, // Set a timer for 5 seconds (adjust as needed)
        // confirmButtonText: 'OK',
      });
      // window.location.href = "/";

      if (result.isConfirmed) {
        // Redirect to the home page or perform any other action
        window.location.href = "/";
      }

      // You can also redirect the user to another page after registration
    } catch (error) {
      alert("An error occurred during registration:", error);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        id="contact"
        className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12"
      >
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div
            id="CCo"
            className="text-black relative px-4 bg-white	 shadow-lg sm:rounded-3xl sm:p-20"
          >
            <div className="text-center pb-6">
              <h1 className="text-3xl">
                Contact <span className="text-blue-500">Us</span>!
              </h1>
              <p className="text-black text-center">
                Fill up the form below to send us a message.
              </p>
            </div>
            <form>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                name="email"
              />
              {/* <input onChange={(e) => setSubject(e.target.value)}
                          value={subject}
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subject"
                name="_subject"
              /> */}
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Type your message here..."
                name="message"
                style={{ height: 121 }}
                defaultValue={""}
              />
              <button
                onClick={handleContact}
                class="bn632-hover bn28"
                id="button"
              >
                Submit
              </button>
              <br></br>
              <br></br>
              <br></br>
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-blue-300 p-4 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold dark:text-white">
                    Technical support
                  </p>
                  <p className="text-neutral-500 dark:text-neutral-200">
                    m.howari95@gmail.com
                  </p>
                  <p className="text-neutral-500 dark:text-neutral-200">
                    00962780023908{" "}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
