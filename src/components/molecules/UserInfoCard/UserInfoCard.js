import React from "react";
import "./UserInfoCard.scss";
import { Button } from "@mui/material";

const UserInfoCard = (props) => {
  const { logOut, user = {} } = props;

  return (
    <div
      style={{ transition: "all 4s ease-in-out" }}
      className="transition duration-500 ease-in-out origin-top-right absolute transition-all transform right-0 mt-2 w-[250px] shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div
        className="text-left border-b p-8"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <h2 className="font-black text-sm text-slate-600 mb-1">
          {user.name}
        </h2>
        <p className="text-xs text-slate-600">{user.email}</p>
      </div>
      <div className="flex justify-center">
        <Button type="secondary" variant="text" onClick={logOut}>Logout</Button>
      </div>
    </div>
  );
};

export default UserInfoCard;
