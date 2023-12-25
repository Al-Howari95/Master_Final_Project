import React, { useState, useEffect } from "react";
import axios from "axios";

const FAQItem = ({ question, answer, id, expanded, onToggle, onDelete }) => {
  return (
    <div
    
      className={`rounded-none border border-t-0 border-l-0 border-r-0 border-b-0 border-neutral-200 mt-4 ${
        expanded ? "!visible" : ""
      } border shadow-lg bg-blue-50`}
    >
      
      <h2 className="mb-0" id={`flush-heading${id}`}>
      <button
  className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
  type="button"
  onClick={() => onToggle(id)}
>
  {question}
  <span
    className={`ml-auto h-5 w-5 shrink-0 rotate-${
      expanded ? "180" : "0"
    } fill-[#336dec] transition-transform duration-200 ease-in-out ${
      expanded ? "rotate-180" : "" // تغيير هنا
    } ${
      expanded ? "fill-[#212529]" : ""
    } motion-reduce:transition-none dark:${
      expanded ? "fill-[#8FAEE0]" : ""
    } dark:${expanded ? "rotate-180" : ""} dark:${
      expanded ? "fill-[#eee]" : ""
    }`}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  </span>
  <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded ml-80 mb-10"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
</button>


      </h2>
      <div
        id={`flush-collapse${id}`}
        className={`${expanded ? "!visible" : "hidden"} border-0`}
        data-te-collapse-item=""
        aria-labelledby={`flush-heading${id}`}
      >
        <div className="py-4 px-5 text-neutral-500 dark:text-neutral-300 text-left">
          {answer}
        </div>
      </div>
    </div>
  );
};


const FAQ = () => {
  const [faqData, setFaqData] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const toggleItem = (id) => {
    setFaqData((prevData) =>
      prevData.map((item) => ({
        ...item,
        expanded: item.id === id ? !item.expanded : item.expanded,
      }))
    );
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:3001/FAQs/${id}`);
      setFaqData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting FAQ item:", error);
    }
  };

  const addQuestion = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:3001/FAQs", {
        question: newQuestion,
        answer: newAnswer,
        expanded: false,
      });

      const newFAQ = response.data;

      setFaqData((prevData) => [...prevData, newFAQ]);
      setNewQuestion("");
      setNewAnswer("");
    } catch (error) {
      console.error("Error adding FAQ item:", error);
    }
  };

  useEffect(() => {
    const fetchFAQData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3001/FAQs");
        setFaqData(response.data);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };

    fetchFAQData();
  }, []);

  return (
    <div>
      <div className="container my-24 mx-auto md:px-6 xl:px-24">
        <section className="mb-32">
          <h2 className="mb-6 pl-6 text-3xl font-bold">FAQS  <span className="text-blue-500">Questions</span> </h2>
          <div className="flex items-center space-x-4">
            <div className="flex flex-col flex-grow">
              <label
                htmlFor="newQuestion"
                className="text-lg font-semibold mb-2"
              >
                New Question
              </label>
              <input
                type="text"
                id="newQuestion"
                className="w-full border p-2 rounded"
                placeholder="Enter your new question"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
              />
            </div>

            <div className="flex flex-col flex-grow">
              <label htmlFor="newAnswer" className="text-lg font-semibold mb-2">
                New Answer
              </label>
              <input
                type="text"
                id="newAnswer"
                className="w-full border p-2 rounded"
                placeholder="Enter your new answer"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
              />
            </div>

            <button
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300 mt-9"
              onClick={addQuestion}
            >
              Add
            </button>
          </div>

          <div id="accordionFlushExample">
            {faqData.map((item) => (
              <FAQItem
                key={item.id}
                {...item}
                onToggle={toggleItem}
                onDelete={deleteItem}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;