import React, { forwardRef, useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { clearAdmin } from "../../../reducers/userSlice.reducer";
// import authService from '../../../services/auth.service'
import withClickOutside from "../../../helper/withClickOutside";
import UserInfoCard from "../UserInfoCard";
import {search} from "../../../reducers/search.reducer";

const Header = forwardRef(({ open, setOpen }, ref) => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search?.searchTerm);
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("/mock-data/user.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  const logOut = async () => {
    try {
      // const response = await authService.logout()
      // TODO: Check for success before navigate
      // API response PR needs to be merged
      // if (response) {
      localStorage.removeItem("adminToken");
      dispatch(clearAdmin());
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = (e) => {
    dispatch(search(e.target.value));
  }
  return (
    <div className="sticky top-0 z-50">
      <nav className="flex bg-white dark:bg-gray-800 shadow sticky top-0 z-50 dark:shadow-gray-600 transition-all duration-500 ease-in-out">
        <div className="w-1/5 h-16">
          <div className="flex items-center">
            <a className="flex-shrink-0 pt-2" href="/">
              <ReactSVG src="/images/logo.svg" />
            </a>
          </div>
        </div>
        <div className="w-3/5 h-16 flex items-center justify-center">
          <div className="relative w-full max-w-[75%]">
            <div className="absolute top-2 left-5">
              <i className="fa fa-search text-gray-300 z-20 hover:text-gray-500 dark:text-gray-400"></i>
            </div>
            <input
              type="text"
              onKeyUp={handleSearch}
              className="h-10 w-full pr-8 pl-12 rounded-md z-0 outline-none focus:outline-none border-0 bg-gray-100 dark:bg-gray-600 transition-all duration-500 ease-in-out"
              placeholder=""
            />
            <div className="absolute top-2 right-5">
              <i className="fa fa-arrow-right text-gray-300 z-20 hover:text-gray-500 dark:text-gray-400"></i>
            </div>
          </div>
        </div>
        <div className="w-1/5 h-16 text-right mr-4">
          <div
            className="relative inline-block text-right border-l-[1px] h-16 pt-1 dark:text-gray-100 dark:border-l-gray-600"
            ref={ref}
          >
            <div className="flex w-full items-center justify-center">
              <button
                onClick={() => setOpen(!open)}
                type="button"
                className="flex items-center justify-center px-4 py-2 pr-4 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none transition duration-500 ease-in-out"
                id="options-menu"
              >
                {/* TODO: get the name from the user data */}
                <span className="text-sm font-medium pr-4">Gareth Tucker</span>
                {/* TODO: load the SVG if there is no image for the user */}
                <ReactSVG src="/images/user.svg" />
              </button>
            </div>
            {open && user && <UserInfoCard logOut={logOut} user={user} />}
          </div>
        </div>
      </nav>
    </div>
  );
});

export default withClickOutside(Header);
