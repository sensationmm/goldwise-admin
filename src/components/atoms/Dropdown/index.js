import React, { useEffect, useRef, useState } from "react";

const Dropdown = (props) => {
  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const { value, options = [], handleChange = () => {} } = props;
  const [open, setOpen] = useState(false);
  const onHandleChange = () => {
    setOpen(false);
    handleChange();
  };
  return (
    <div ref={wrapperRef} className="w-full relative">
      <button
        data-dropdown-toggle="dropdown"
        className="w-full text-gray-700 bg-[#e4e6e9] hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 duration-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex justify-between items-center"
        type="button"
        onClick={(e) => {
          setOpen(!open);
        }}
      >
        {value}
        <svg
          className="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={`absolute -translate-x-1/2 left-1/2 z-10 w-full bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 ${
          open ? "" : "hidden"
        } 
        `}
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200 cursor-pointer"
          aria-labelledby="dropdownDefault"
        >
          {options.map((option) => (
            <li
              key={option.id}
              onClick={onHandleChange}
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {option.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
