import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-slate-600">
        <div className="navbar-start">
          {/* <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div> */}
          <a className="btn btn-ghost normal-case text-white text-xl">
            My Collection
          </a>
        </div>

        <div className="navbar-end">
          <Link className="btn  text-slate-600" to={"/login"} >Sign In</Link>
          <Link className="btn  text-slate-600 mx-5 " to={"/signup"} >Sign Up</Link>
        </div>
      </div>

      <div className=" py-5 grid justify-items-end bg-slate-600 ">
        <div className="mx-5 w-80 form-control mx-end relative">
          <input
            type="text"
            placeholder="Which book are you looking for"
            className="input rounded-full"
          />
          <button className=" w-90 absolute top-2 right-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className=" bg-secondary pt-2"></div>
    </div>
  );
};

export default Navbar;
