import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Button from "../Component/Button";

const Why = () => {



    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


  return (
    <div>
      <>
        {/* component */}
        <section className=" bg-blue-500ray-50">
          <div className="py-10  sm:py-16 block lg:py-24 relative bg-opacity-50  z-40  ">
            <div className="relative mx-auto h-full px-4 pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
              <div className=" absolute  top-0 -right-1/4 z-0  opacity-10 ">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  className="w-96 z-0  h-full    object-fill fill-g text-g"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16V6ZM9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V9ZM15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V9ZM18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V13ZM6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V15ZM21 15C21 14.4477 20.5523 14 20 14C19.4477 14 19 14.4477 19 15V16C19 16.5523 19.4477 17 20 17C20.5523 17 21 16.5523 21 16V15ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H4Z"
                  />
                </svg>
              </div>
              <div className=" absolute -bottom-0 -left-1/4 z-0  opacity-10 ">
                {/* <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-48 z-0  h-full -rotate-90   object-fill fill-r text-r"
                >
                  <path
                    d="M32 225h12.993A4.004 4.004 0 0 0 49 220.997V138.01c0-4.976.724-5.04 1.614-.16l12.167 66.708c.397 2.177 2.516 3.942 4.713 3.942h8.512a3.937 3.937 0 0 0 3.947-4S79 127.5 80 129s14.488 52.67 14.488 52.67c.559 2.115 2.8 3.83 5.008 3.83h8.008a3.993 3.993 0 0 0 3.996-3.995v-43.506c0-4.97 1.82-5.412 4.079-.965l10.608 20.895c1.001 1.972 3.604 3.571 5.806 3.571h9.514a3.999 3.999 0 0 0 3.993-4.001v-19.49c0-4.975 2.751-6.074 6.155-2.443l6.111 6.518c1.51 1.61 4.528 2.916 6.734 2.916h7c2.21 0 5.567-.855 7.52-1.92l9.46-5.16c1.944-1.06 5.309-1.92 7.524-1.92h23.992a4.002 4.002 0 0 0 4.004-3.992v-7.516a3.996 3.996 0 0 0-4.004-3.992h-23.992c-2.211 0-5.601.823-7.564 1.834l-4.932 2.54c-4.423 2.279-12.028 3.858-16.993 3.527l2.97.198c-4.962-.33-10.942-4.12-13.356-8.467l-11.19-20.14c-1.07-1.929-3.733-3.492-5.939-3.492h-7c-2.21 0-4 1.794-4 4.001v19.49c0 4.975-1.14 5.138-2.542.382l-12.827-43.535c-.625-2.12-2.92-3.838-5.127-3.838h-8.008c-2.207 0-3.916 1.784-3.817 4.005l1.92 42.998c.221 4.969-.489 5.068-1.585.224l-15.13-66.825c-.488-2.155-2.681-3.902-4.878-3.902h-8.512a3.937 3.937 0 0 0-3.947 4s.953 77-.047 75.5-13.937-92.072-13.937-92.072C49.252 34.758 47.21 33 45 33H31.999"
                    fillRule="evenodd"
                  />
                </svg> */}
              </div>
              <div  className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                <div className="max-w-xl mx-auto text-center">
                  <div className="inline-flex px-4 py-1.5 mx-auto rounded-full  ">
                    <p class="text-4xl font-semibold tracking-widest text-g uppercase text-center">
                      Why You Should Choose <span className="text-blue-500">CleanWave</span>®
                    </p>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-white"></p>
                </div>
                <div id="why_us" className="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20   ">
                  <Link 
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF]"
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2   "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Professional and Trained Cleaners
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white  ">
                        Our staff is highly trained, professional and
                        experienced in providing first class cleaning services.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF] "
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Reliable Scheduling
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        Our booking system is easy to use and provides reliable
                        scheduling options for customers, allowing them to
                        choose convenient cleaning times.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF] "
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Blue Cleaning Products
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        We use environmentally friendly, non-toxic cleaning
                        products.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF]  "
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Quality Assurance Guarantee{" "}
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        we are unwavering in our commitment to delivering
                        exceptional cleaning services, and we stand behind the
                        quality of our work with a satisfaction guarantee.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF]  "
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Transparent Pricing
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        we prioritize transparency and honesty in all our. Our
                        commitment to transparency means there are no hidden
                        fees or surprise charges – what you see is what you get.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF]  "
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Advanced Cleaning Equipment
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        We use the latest cleaning equipment and techniques to
                        ensure comprehensive and effective cleaning results.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF]"
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Customer Reviews
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        Provide positive feedback on existing services from
                        satisfied customers to build credibility and trust in
                        your cleaning services.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000 hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF] "
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Secure Online Payments
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        Our online payment system is secure and convenient for
                        you, making the entire booking and payment process
                        hassle-free.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF]  "
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Pet-Friendly Cleaning
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        We emphasize our commitment to pet-friendly cleaning
                        practices, ensuring the safety and well-being of our
                        customers' furry friends.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF]  "
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Timely Arrival and Completion{" "}
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        Assure customers that your cleaning professionals are
                        punctual and adhere to scheduled appointment times,
                        respecting their time and commitments.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF]  "
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Quality Control Inspections
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        We carry out regular quality control inspections to
                        ensure we deliver consistently high quality cleaning
                        services and address any potential issues promptly.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF]  "
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Post-Service Follow-Up
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        We are committed to customer satisfaction by conducting
                        post-service follow-ups to collect feedback and address
                        any concerns or areas for improvement.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <Button/>

    </div>
  );
};

export default Why;