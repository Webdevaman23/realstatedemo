import React from "react";
import { Carousel } from "flowbite-react";
import photo1 from "../images/first.jpg";
import photo2 from "../images/second.jpg";
import photo3 from "../images/third.jpg";
import photo4 from "../images/C1.jpg";
import photo5 from "../images/C2.jpg";
import photo6 from "../images/C3.jpg";
import photo7 from "../images/C4.jpg";
import photo8 from "../images/C5.jpg";

const Home = () => {
  return (
    <div>
      <div className="image1">
        <div className="image"></div>
        <div className="text-center text-white flex flex-col dashboard-title mx-10">
          <h1 className="font-bold text-2xl ">I WILL WORK UNTIL YOU SMILE</h1>
          <p className="font-medium">
            Imagination Farms, Davie, Plantation Acres, Botaniko Western,
            Pembroke Pines, Silver Lakes & More
          </p>
          <div className="mt-5">
            <form className="max-w-md mx-auto">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col text-center m-5">
          <h1 className="font-semibold text-2xl font m-10 flex flex-col">
            <span>REAL STATE</span>
            <span className="mx-5 text-orange-500">DEMO</span>
          </h1>
          <h1 className="font-boldbold text-2xl font1 m-10">
            LOYALTY. PUNCTUALITY. INTEGRITY. RESPECT. LOVE. FUN. KINDNESS.
          </h1>
        </div>
        <div className="flex m-8">
          <div className="flex flex-col text-center m-5 margin-left">
            <h2 className="font-bold">1700+</h2>
            <h3 className="font-normal">Dream Homes Sold</h3>
          </div>
          <div className="vertical-line"></div>
          <div className="flex flex-col text-center m-5">
            <h2 className="font-bold">$698 MILLION</h2>
            <h3 className="font-normal">Volume</h3>
          </div>
          <div className="vertical-line"></div>
          <div className="flex flex-col text-center m-5 margin-right">
            <h2 className="font-bold">20+</h2>
            <h3 className="font-normal">Years of Experience</h3>
          </div>
        </div>

        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slide={false}>
            <img src={photo4} alt="..." />
            <img src={photo5} alt="..." />
            <img src={photo6} alt="..." />
            <img src={photo7} alt="..." />
            <img src={photo8} alt="..." />
          </Carousel>
        </div>

        <div className="flex justify-around flex-wrap">
          <div className="text-center">
            <img
              src={photo1}
              alt="Photo 1"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>
          <div className="text-center">
            <img
              src={photo2}
              alt="Photo 2"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>
          <div className="text-center">
            <img
              src={photo3}
              alt="Photo 3"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import photo1 from "../images/first.jpg";
import photo2 from "../images/second.jpg";
import photo3 from "../images/third.jpg";
import { Card } from "flowbite-react";
import {Button} from "flowbite-react";

const Home = () => {
  return (
    <div>
      <div className="image1">
        <div className="image"></div>
        <div className="text-center text-white flex flex-col dashboard-title mx-10">
          <h1 className="font-bold text-2xl ">I WILL WORK UNTIL YOU SMILE</h1>
          <p className="font-medium">
            Imagination Farms, Davie, Plantation Acres, Botaniko Western,
            Pembroke Pines, Silver Lakes & More
          </p>
          <div className="mt-5">
            <form className="max-w-md mx-auto">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="my-5">
        <div className="flex flex-col text-center m-5">
          <h1 className="font-semibold text-2xl font m-10 flex flex-col">
            <span>REAL STATE</span>
            <span className="mx-5 text-orange-500">DEMO</span>
          </h1>
          <h1 className="font-boldbold text-2xl font1 m-10">
            LOYALTY. PUNCTUALITY. INTEGRITY. RESPECT. LOVE. FUN. KINDNESS.
          </h1>
        </div>
        <div className="flex m-8">
          <div className="flex flex-col text-center m-5 margin-left">
            <h2 className="font-bold">1700+</h2>
            <h3 className="font-normal">Dream Homes Sold</h3>
          </div>
          <div className="vertical-line"></div>
          <div className="flex flex-col text-center m-5">
            <h2 className="font-bold">$698 MILLION</h2>
            <h3 className="font-normal">Volume</h3>
          </div>
          <div className="vertical-line"></div>
          <div className="flex flex-col text-center m-5 margin-right">
            <h2 className="font-bold">20+</h2>
            <h3 className="font-normal">Years of Experience</h3>
          </div>
        </div>
        <div class="flex justify-around flex-wrap ">
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={photo1}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              BUY
            </h5>
          </Card>
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={photo2}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              RENT
            </h5>
          </Card>
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={photo3}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              SELL
            </h5>
          </Card>
        </div>
      </div>
      <div className=" flex" style={{backgroundColor: "#ededed"}}>
          <div className="flex flex-col gap-10 m-10 p-10 flex-wrap flex-1">
          <h1 className="font-bold font text-2xl">MEET THE REAL STATE CO</h1>
          <hr/>
            <p className="">
              At The Nice Agent Co., we focus on people, not properties. We
              believe in punctuality, loyalty, respect, integrity, love, fun,
              and kindness, and we put these values at the forefront of every
              relationship. Our team works hard and recognizes that going the
              extra mile for our clients often makes the difference. That’s why
              every agent, staff member, and vendor we work with lives by our
              slogan: “I will work until you smile.”
            </p>
            <p>
              Founded by Carl Christian, who has been in the real estate
              business since 2004, The Nice Agent Co. has one goal — to provide
              the most reliable concierge real estate service in South Florida.
            </p>
            <p>
              We take the time to understand your needs and respond to them
              quickly, accurately, and positively. We strive to make you feel
              comfortable through each step of the buying or selling process.
              And we are committed to going above and beyond to ensure your
              goals are met — and putting a smile on your face in the meantime.
            </p>
            <Button className="w-36" color="blue">
              MEET THE TEAM
            </Button>
          </div>
        <div className="image4 flex-1"></div>
      </div>
    </div>
  );
};

export default Home;
