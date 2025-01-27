import { Home, ClipboardList, Calendar, Book, Users, Award, Store, Megaphone, MapPin } from "lucide-react";
  import { NavLink } from "react-router-dom";
  import log from "../assets/avatar.png";
  
  export default function Aside({ isExpanded }) {
    const links = [
      { icon: <Home size={24} />, text: "Главная", href: "#" },
      { icon: <ClipboardList size={24} />, text: "Домашние задания", href: "#" },
      { icon: <Calendar size={24} />, text: "Расписание", href: "#" },
      { icon: <Book size={24} />, text: "Учебные материалы", href: "#" },
      { icon: <Users size={24} />, text: "Отзывы", href: "#" },
      { icon: <Award size={24} />, text: "Награды", href: "#" },
      { icon: <Store size={24} />, text: "Магазин", href: "#" },
      { icon: <Megaphone size={24} />, text: "Новости", href: "#" },
      { icon: <MapPin size={24} />, text: "Контакты", href: "#" },
    ];
  
    return (
      <aside
        className={`bg-white border-r border-gray-300 transition-all duration-300 position-fixed z-20 ${
          isExpanded ? "w-64" : "w-16"
        }`}
      >
        <ul
          className={`flex flex-col ${
            isExpanded ? "px-4 space-y-2" : "items-center space-y-1"
          }`}
        >
          {/* Логотип / Аватар */}
          <li className="flex items-center justify-between p-4 border-b">
            <NavLink to="/" className="flex items-center">
              <img
                src={log}
                alt="avatar"
                className={`h-10 w-10 ${isExpanded ? "mr-3" : "h-8 w-8"}`}
              />
              {isExpanded && (
                <div className="ml-3">
                  <span className="block text-sm font-medium text-gray-700">
                    Jasur Sodiqov
                  </span>
                  <span className="block text-xs text-gray-500">
                    SEP-212.2 / 801011894
                  </span>
                </div>
              )}
            </NavLink>
          </li>
  
          {/* Статистика */}
          <li className={`flex justify-around p-2 ${isExpanded ? "space-x-4" : ""}`}>
            {isExpanded ? (
              <>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-semibold">11</span>
                  <span className="text-xs text-gray-500">XP</span>
                </div>
                <div className="flex flex-col items-center hidden sm:flex">
                  <span className="text-lg font-semibold">3938</span>
                  <span className="text-xs text-gray-500">Баллы</span>
                </div>
                <div className="flex flex-col items-center hidden sm:flex">
                  <span className="text-lg font-semibold">1145</span>
                  <span className="text-xs text-gray-500">Достижения</span>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold">11</span>
              </div>
            )}
          </li>
  
          {/* Навигационные ссылки */}
          {links.map((link, index) => (
            <li
              key={index}
              className={`flex items-center p-2 hover:text-[#6c59f5] hover:bg-[#f0eefe] text-[#96a6b7] rounded-lg transition-colors duration-200 ${
                isExpanded ? "space-x-4" : "justify-center"
              }`}
            >
              <a href={link.href} className="flex items-center">
                {link.icon}
                {isExpanded && (
                  <span className="ml-2 text-sm font-medium">{link.text}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
  