import { useReducer, useState } from "react";
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
    icon: "fa-id-card",
  },
  {
    name: "Products",
    collapse: "products",
    to: "/products/",
    icon: "fa-list",
    children: [
      {
        name: "Spread Management",
        to: "/products/spread-management",
      },
      {
        name: "Product Management",
        to: "/products/product-management",
      },
    ],
  },
  {
    name: "Users",
    collapse: "users",
    to: "/users/",
    icon: "fa-user",
    children: [
      {
        name: "User Management",
        to: "/users/user-management",
      },
    ],
  },
  {
    name: "Reports",
    collapse: "reports",
    icon: "fa-bar-chart",
    children: [
      {
        name: "Reconciliation",
        to: "/reports/reconciliation",
      },
    ],
  },
  {
    name: "Vault Settings",
    to: "/vault-settings",
    icon: "fa-cog",
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [collapse, setCollapse] = useReducer(
    (preState, newState) => ({ ...preState, ...newState }), {}
  );

  const [sidebarCollapse, setSidebarCollapse] = useState(false)
  const toggleSidebar = () => {
    setSidebarCollapse(!sidebarCollapse);
  }

  return (
  <>
    <div className={`relative bg-gray-100 dark:bg-gray-800 border-r-[1px] dark:border-r-gray-600 ${ sidebarCollapse ? "sidebar-collapse" : ""}`}>
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="w-30 lg:w-80 h-screen">
          <nav className="px-4">
            <div className="fixed side z-10 bg-current dark:bg-white lg:hidden">
              <button className="bg-gray-800 dark:bg-white w-8 rounded" onClick={toggleSidebar}>
                <i className="fa fa-bars text-lg text-secondary bold text-white dark:text-gray-800"/>
              </button>
            </div>
            {menu.map((element, index) => {
              if (element.children) {
                const isPath = location.pathname.includes(element.to);
                return (
                  <>
                    <div
                      onClick={() => {
                        setCollapse({
                          [element.collapse]: !collapse[element.collapse],
                        });
                      }}
                      className={
                        isPath
                          ? "hover:text-[#5db1b5] flex items-center p-2 my-6 transition-colors dark:hover:text-white duration-200 dark:text-gray-400 text-[#5db1b5] dark:hover:text-[#5db1b5] dark:text-[#5db1b5] cursor-pointer"
                          : "hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 mt-6 transition-colors dark:hover:text-white dark:hover:bg-gray-800 duration-200 text-gray-600 dark:text-gray-400 rounded-lg cursor-pointer"
                      }
                      key={index}
                    >
                      <i
                      className={`fa text-2xl ${element.icon}`}
                        aria-hidden="true"
                      />
                      <span className={`flex-grow mx-8 text-base font-normal lg:block ${
                            collapse[element.collapse] ? "block" : "hidden"
                          }`}>
                        {element.name}
                      </span>
                      <span className="flex-grow text-right ml-1 lg:ml-0">
                        <i
                          className={`fa fa-angle-right text-2xl duration-200 ${
                            collapse[element.collapse] ? "rotate-90" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    {collapse[element.collapse] && (
                      <nav className="mt-4 pl-4">
                        {element.children.map((child, index) => (
                          <NavLink
                            key={index}
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
                          </NavLink>
                        ))}
                      </nav>
                    )}
                  </>
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
                    />

                    <span className="flex-grow mx-8 text-base font-normal hidden lg:block">
                      {element.name}
                    </span>
                    <span className="flex-grow text-right">

                    </span>
                  </NavLink>
                );
              }
            })}
          </nav>
        </div>
      </div>
    </div>
  </>
  );
};

export default Sidebar;
