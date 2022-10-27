import React from "react";
import "./UserInfoCard.scss";
import { NavLink } from "react-router-dom";

const UserInfoCard = (props) => {
  const { logOut, user = {} } = props;
  return (
    <div
      style={{ transition: "all 4s ease-in-out" }}
      className="transition duration-500 ease-in-out origin-top-right absolute transition-all transform right-0 mt-2 w-112 shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 dark:shadow-gray-700 dark:ring-white dark:ring-opacity-5 px-8 py-8"
    >
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-2">
          <img
            className="inline-block w-32 h-32 rounded-full ring-2 ring-white"
            src={user.avatar}
            alt="avatar"
          />
        </div>
        <div className="col-span-3">
          <div
            className="py-1 text-left"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <h2 className="pb-4 text-2xl font-black  text-slate-600">
              {user.name}
            </h2>
            <p className="pb-4 text-sm text-slate-600">{user.email}</p>
            <p className="pb-4 text-sm  text-slate-600">
              User level:
              <span className="text-sm leading-6 rounded-lg	ml-2 md:order-first md:px-2 md:text-xs md:font-semibold md:leading-7 md:bg-gray-100 md:text-teal-600">
                {user.level}
              </span>
            </p>
            <NavLink to="/change-password" className="" role="menuitem">
              <p className="pb-4 text-sm underline text-slate-600">
                Change password
              </p>
            </NavLink>
          </div>
        </div>
      </div>
      <button
        onClick={() => logOut()}
        className="transition duration-500 ease-in-out block block px-4 py-2 w-full mt-8 bg-teal-600 hover:bg-teal-700 text-gray-100 font-bold py-2 px-4 rounded cursor-pointer"
      >
        <span className="text-sm">Logout</span>
      </button>
    </div>
  );
};

export default UserInfoCard;
