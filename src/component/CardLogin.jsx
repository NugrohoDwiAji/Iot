import React from "react";
import { Link } from "react-router-dom";

// icon
import { GoPersonFill } from "react-icons/go";
import { PiLockKeyFill } from "react-icons/pi";

const CardLogin = () => {
  return (
    <div className="bg-white md:h-[500px]  md:w-[390px] w-72 text-[#09006E] lg:px-16 lg:py-10 md:p-5 py-5 px-4 flex flex-col gap-7 items-center justify-center">
      <h1 className="text-center font-semibold text-lg">
        JEMURA OTOMATIS BERBASIS INTERNET OF THINGS
      </h1>
      <img src="./logo.png" alt="eror" className="md:h-36 h-20" />
      <form action="">
        <div className="flex rounded-lg bg-primary-0 items-center h-10 mb-3 px-3">
          <label htmlFor="username">
            <GoPersonFill size={24} />
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="outline-none bg-primary-0 h-10 w-full rounded-lg px-3  "
            placeholder="Username"
          />
        </div>
        <div className="flex rounded-lg bg-primary-0 items-center h-10 mb-3 px-3">
          <label htmlFor="password"><PiLockKeyFill size={24} /></label>
          <input
            type="password"
            id="password"
            name="password"
            className="outline-none bg-primary-0 h-10 w-full rounded-lg p-3 "
            placeholder="Password"
          />
        </div>
        <Link to={"/home"} className="bg-secondary-0 w-full rounded-lg hover:scale-105 py-2 font-semibold flex justify-center items-center">Login</Link>
      </form>
    </div>
  );
};

export default CardLogin;
