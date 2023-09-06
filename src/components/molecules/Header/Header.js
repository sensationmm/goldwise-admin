import React, { forwardRef, useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAdmin } from "../../../reducers/userSlice.reducer";
import withClickOutside from "../../../helper/withClickOutside";
import UserInfoCard from "../UserInfoCard";

const Header = forwardRef(({ open, setOpen }, ref) => {
  const dispatch = useDispatch();
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

  return (
    <div className="fixed top-5 right-5 z-50">
      <div ref={ref}>
        <div className="flex w-full items-center justify-center">
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-slate-800 text-white font-bold"
            id="options-menu"
          >
            {(user?.name || '').split(' ').reduce((acc, curr) => `${acc}${curr.substr(0, 1)}`, '')}
          </button>
        </div>
        {open && user && <UserInfoCard logOut={logOut} user={user} />}
      </div>
    </div>
  );
});

export default withClickOutside(Header);
