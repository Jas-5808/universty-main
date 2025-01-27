import { NavLink } from "react-router-dom";
import { LogOut, QrCode, Bell } from "lucide-react";
//import image/icon
import log from "../assets/react.svg";
import burger from "../assets/icons/menu.png";

const Header = ({ toggleSidebar }) => {
    const links = [
      { icon: <Bell size={24} />, text: "Уведомления", href: "#" },
      { icon: <QrCode size={24} />, text: "сканер QR", href: "#" },
      { icon: <LogOut size={24} />, text: "Выйти", href: "#" },
    ];
  return (
    <>
      <header className="bg-white p-2 px-4 text-center border-b border-gray-300 ">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <span
              onClick={toggleSidebar}
              className="cursor-pointer hover:bg-[#f0eefe] P-1 rounded-full"
            >
              <img src={burger} alt="" />
            </span>
            <NavLink to={"/"}>
              {/* <img src={log} alt="logo"/> */}
              <h1 className="text-2xl font-bold px-4 text-[#6c59f5]">
                Universitty
              </h1>
            </NavLink>
          </div>

          <ol className="flex items-center gap-4">
            {links.map((link, index) => (
              <li
                key={index} className={`flex items-center p-2 hover:bg-[#6856eb] hover:text-[#f0eefe]  bg-[#f0eefe] text-[#6c59f5] rounded-lg transition-colors duration-200 `}>
                <NavLink to={link.href} className="flex items-center">
                  {link.icon}
                </NavLink>
              </li>
            ))}
          </ol>
        </nav>
      </header>
    </>
  );
};

export default Header;
