import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Contact Form */}
        <form className="w-full lg:w-1/2 bg-blue-100 p-6 rounded-md shadow-md mb-8 lg:mb-0 lg:mr-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            GET IN TOUCH
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full rounded-md border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 p-2 w-full rounded-md border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full rounded-md border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea className="mt-1 p-2 w-full rounded-md border-gray-300"></textarea>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Submit
          </button>
        </form>

        {/* Contact Details */}
        <div className="w-full lg:w-1/2 bg-white p-12 rounded-md shadow-md gap-1">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            CONTACT DETAILS
          </h2>
          <hr className="p-5" />
          <div className="mb-4 flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <svg
                className="h-8 w-8 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 10V3c0-1.1-.9-2-2-2H6a2 2 0 00-2 2v7l4 2 4-2v5l-4 2v2h7a2 2 0 002-2v-8l-4-2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-800 font-semibold">(786) 752-NICE</p>
              <p className="text-gray-600">info@theniceagent.com</p>
            </div>
          </div>
          <p className="text-gray-600">
            8569 Pines Blvd., #214, Pembroke Pines, FL 33024
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
