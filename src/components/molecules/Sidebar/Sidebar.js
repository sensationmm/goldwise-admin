import { useReducer } from "react";
import { NavLink, useLocation } from "react-router-dom";

const menu = [
  {
    name: "Dashboard",
    to: "/dashboard",
    icon: "fa-home",
  },
  {
    name: "Customers",
    to: "/customers",
    icon: "fa-user-circle",
  },
  {
    name: "KYC",
    to: "/kyc",
    icon: "fa-id-card",
  },
  {
    name: "Users",
    collapse: "users",
    to: "/users/",
    icon: "fa-angle-right",
    children: [
      {
        name: "User Management",
        to: "/users/user-management",
      },
    ],
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [collapse, setCollapse] = useReducer(
    (preState, newState) => ({ ...preState, ...newState }), {}
  );

  return (
    <div className="relative bg-gray-100 dark:bg-gray-800 border-r-[1px] dark:border-r-gray-600 transition-all duration-500 ease-in-out">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="w-80 h-screen">
          <nav className="mt-8 px-4">
            {menu.map((element) => {
              if (element.children) {
                const isPath = location.pathname.includes(element.to);

                return (
                  <div key={element.to}>
                    <div
                      onClick={() => {
                        setCollapse({
                          [element.collapse]: !collapse[element.collapse],
                        });
                      }}
                      className={
                        collapse[element.collapse] || isPath
                          ? "hover:text-[#5db1b5] flex items-center p-2 my-6 transition-colors dark:hover:text-white duration-200 dark:text-gray-400 text-[#5db1b5] dark:hover:text-[#5db1b5] dark:text-[#5db1b5] cursor-pointer"
                          : "hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-800 duration-200 text-gray-600 dark:text-gray-400 rounded-lg cursor-pointer"
                      }
                    >
                      <i
                        className="fa fa-th-large text-2xl"
                        aria-hidden="true"
                      ></i>
                      <span className="flex-grow mx-8 text-base font-normal">
                        {element.name}
                      </span>
                      <span className="flex-grow text-right">
                        <i
                          className={`fa fa-angle-right text-2xl duration-200 ${
                            collapse[element.collapse] ? "rotate-90" : ""
                          }`}
                          aria-hidden="true"
                        ></i>
                      </span>
                    </div>
                    {collapse[element.collapse] && (
                      <nav className="mt-8 pl-4">
                        {element.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            className={({ isActive }) =>
                              isActive
                                ? "hover:text-[#5db1b5] flex items-center p-2 my-6 transition-colors dark:hover:text-white duration-200 dark:text-gray-400 text-[#5db1b5] dark:hover:text-[#5db1b5] dark:text-[#5db1b5]"
                                : "hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-800 duration-200 text-gray-600 dark:text-gray-400 rounded-lg"
                            }
                          >
                            <span className="flex-grow mx-8 text-sm font-normal">
                              {child.name}
                            </span>
                            <span className="flex-grow text-right">
                              <i
                                className="fa fa-angle-right text-2xl"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </NavLink>
                        ))}
                      </nav>
                    )}
                  </div>
                );
              } else {
                return (
                  <NavLink
                    key={element.to}
                    to={element.to}
                    className={({ isActive }) =>
                      isActive
                        ? "hover:text-[#5db1b5] flex items-center p-2 my-6 transition-colors dark:hover:text-white duration-200 dark:text-gray-400 text-[#5db1b5] dark:hover:text-[#5db1b5] dark:text-[#5db1b5]"
                        : "hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-800 duration-200 text-gray-600 dark:text-gray-400 rounded-lg"
                    }
                  >
                    <i
                      className={`fa text-2xl ${element.icon}`}
                      aria-hidden="true"
                    ></i>

                    <span className="flex-grow mx-8 text-base font-normal">
                      {element.name}
                    </span>
                    <span className="flex-grow text-right">
                      <i
                        className="fa fa-angle-right text-2xl"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </NavLink>
                );
              }
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
