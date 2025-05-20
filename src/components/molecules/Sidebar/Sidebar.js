import { useReducer } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from '../../../assets/images/logo.svg';
import LogoIcon from '../../../assets/images/logo-icon.svg';
import { ReactSVG } from "react-svg";

import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import SettingsIcon from '@mui/icons-material/Settings';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const menu = [
  {
    name: "Dashboard",
    to: "/dashboard",
    icon: DashboardIcon
  },
  {
    name: "Customers",
    to: "/customers",
    icon: PeopleAltIcon
  },
  {
    name: "Orders",
    to: "/orders",
    icon: SyncAltIcon
  },
  {
    name: "Market Hours",
    to: "/market-hours",
    icon: CalendarMonthIcon
  },
  {
    name: "Products",
    collapse: "products",
    to: "/products",
    icon: ViewAgendaIcon
  },
  {
    name: "Vaults",
    to: "/vault-settings",
    icon: VpnLockIcon
  },
  {
    name: "Platform",
    to: "/platform",
    icon: SettingsIcon
  },
  {
    name: "Reports",
    to: "/reports",
    icon: BarChartIcon
  },
  {
    name: "Reconciliation",
    collapse: "reconciliation",
    icon: PlaylistAddCheckIcon,
    children: [
      {
        name: "Reports",
        to: "/reconciliation/reports",
      },
      {
        name: "Metals",
        to: "/reconciliation/metals",
      },
      {
        name: "Wallets",
        to: "/reconciliation/wallets",
      },
      {
        name: "Funds",
        to: "/reconciliation/funds",
      },
    ],
  },
  {
    name: "User Management",
    collapse: "users",
    to: "/users",
    icon: AccountCircleIcon
  },
];

const Sidebar = ({isOpen = false, setIsOpen}) => {
  const location = useLocation();
  const [collapse, setCollapse] = useReducer(
    (preState, newState) => ({ ...preState, ...newState }), {}
  );

  return (
    <div className={`w-full h-full bg-[#01041A] ${isOpen ? 'p-12' : 'py-12 px-7'} overflow-y-scroll`} onClick={() => setIsOpen(true)}>
      <div className={`${isOpen ? 'w-[130px]' : 'w-[27px]'} mb-12`}><ReactSVG src={isOpen ? Logo : LogoIcon} alt="Goldwise Logo" /></div>

      <nav className="grid gap-6">
        {menu.map((element, index) => {
          const isPath = location.pathname === element.to;

          if (element.children) {
            const childPaths = []
            element.children.forEach((child) => childPaths.push(child.to))
            const isChildPath = childPaths.indexOf(location.pathname) > -1;

            return (
              <div key={`menu-item-${index}`}>
                <div
                  onClick={() => !isChildPath && setCollapse({[element.collapse]: !collapse[element.collapse]})}
                  className={`grid ${isOpen && 'grid-cols-[40px_1fr_20px]'} items-center transition-colors duration-200 cursor-pointer 
                    ${isPath
                      ? "hover:text-[#5db1b5] text-[#5db1b5]"
                      : "hover:text-white text-gray-400"}`
                  }
                  key={index}
                >
                <element.icon style={{fill: isPath || isChildPath ? '#ffffff' : '#9ca3af', opacity: isPath || isChildPath ? 1 : 0.4}} />
                  <span className={`flex-grow text-base font-normal ${!isOpen && 'hidden'}`}>{element.name}</span>
                  <span className={`flex-grow text-right ml-1 lg:ml-0 ${!isOpen && 'hidden'}`}>
                    <i className={`fa fa-angle-right text-2xl duration-200 ${collapse[element.collapse] ? "rotate-90" : ""}`} aria-hidden="true" />
                  </span>
                </div>
                {isOpen && (collapse[element.collapse] || isChildPath) && (
                <nav className={`pl-[50px]`}>
                    {element.children.map((child, index) => (
                      <NavLink
                        key={index}
                        to={child.to}
                        className={({ isActive }) =>
                        `flex items-center transition-colors duration-200 mt-6 
                          ${isActive
                            ? "hover:text-[#5db1b5] text-[#5db1b5]"
                            : "hover:text-white text-gray-400"}`
                        }
                      >
                        <span className="flex-grow text-sm font-normal">
                          {child.name}
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
                  `grid ${isOpen && 'grid-cols-[40px_1fr]'} items-center transition-colors duration-200
                  ${isActive ? "hover:text-[#5db1b5] text-[#ffffff] fill-[#ffffff]" : "hover:text-white hover:bg-gray-800 text-gray-400"}`
                }
              >
                <element.icon style={{fill: isPath ? '#ffffff' : '#9ca3af', opacity: isPath ? 1 : 0.4}} />
                <span className={`flex-grow text-base font-normal ${!isOpen && 'hidden'}`}>{element.name}</span>
              </NavLink>
            );
          }
        })}

        
      </nav>
    </div>
  );
};

export default Sidebar;
