import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RoleBadge from "../../../components/organisms/RoleBadge";
import BaseLayout from "../../BaseLayout/BaseLayout";

const SpreadManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/mock-data/list-users.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <BaseLayout title="User Management">
      <div className="text-sm font-medium bg-white text-center text-gray-500 dark:bg-gray-600 dark:text-gray-100 transition-all duration-500 ease-in-out px-8 ml-4">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <Link
              to=""
              className="inline-block text-gray-700 p-4 border-b-2 border-[#5db1b5] active"
            >
              Edit Users
            </Link>
          </li>
          <li className="mr-2">
            <Link
              to=""
              className="inline-block text-gray-700 p-4 border-transparent"
              aria-current="page"
            >
              Permissions
            </Link>
          </li>
        </ul>
      </div>
      <div className="p-5">
        <div className="float-right">
          <button
            onClick={() => {}}
            type="button"
            className="duration-500	basis-1/2 text-white bg-[#52B2B6] hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-3xl border border-gray-200 text-sm font-medium px-6 py-3 hover:text-white focus:z-10 "
          >
            <i
              className="fa fa-plus-circle text-xl mr-2"
              aria-hidden="true"
            ></i>
            <span>Add User</span>
          </button>
        </div>
      </div>
      <div className="p-3">
        <div className="overflow-x-auto w-full">
          <table className="table-auto w-full">
            <thead className="text-xs font-bold text-gray-800 dark:text-gray-100">
              <tr>
                <th className="p-3 whitespace-nowrap hidden">
                  <div className="font-semibold text-left">Photo</div>
                </th>
                <th className="p-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Level</div>
                </th>
                <th className="p-3 whitespace-nowrap">
                  <div className="font-semibold text-left"></div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-200 dark:divide-gray-600 dark:text-gray-100 transition-all duration-500 ease-in-out">
              {users.map((user, index) => (
                <tr key={index} className="border-none">
                  <td className="p-2 whitespace-nowrap pb-4 hidden">
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          className="rounded-full"
                          src={user.userPhotoUrl}
                          width="40"
                          height="40"
                          alt="Tom Leach"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap pb-4">
                    <div className="text-left text-gray-500 font-semibold">
                      {user.fullName}
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap pb-4">
                    <div className="text-left text-gray-500 font-semibold">
                      {user.emailAddress}
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap pb-4">
                    <div className="text-left text-gray-500 font-semibold">
                      <RoleBadge level={user.idLevel}/>
                    </div>
                  </td>
                  <td className="flex p-2 whitespace-nowrap pb-4 justify-end	">
                    <div className="text-center">
                      <i
                        className="fa fa-pencil cursor-pointer text-lg mr-8 text-[#BFC0C5] hover:text-gray-600 duration-500"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="text-center">
                      <i
                        className="fa fa-trash cursor-pointer text-lg text-[#BFC0C5] hover:text-gray-600 duration-500"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BaseLayout>
  );
};

export default SpreadManagement;
