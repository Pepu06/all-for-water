import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const ProductsDropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".products-dropdown-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const sortedItems = items
    ?.slice()
    .sort((a, b) => a.nombre.localeCompare(b.nombre));

  return (
    <div className="relative products-dropdown-container nav-links">
      <button
        className="transition-all flex items-center gap-x-1"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        PRODUCTOS
        <IoMdArrowDropdown
          className={`transition-all transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`absolute overflow-visible top-full mt-2 left-1/2 -translate-x-3/4 lg:w-[900px] w-[450px] bg-white text-slate-500 rounded-md shadow-lg grid lg:grid-cols-5 grid-cols-3 text-center items-center justify-center transition-all p-2 text-base
                    ${
                      isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
        onMouseLeave={() => setIsOpen(false)}
      >
        {sortedItems?.map((item) => (
          <a
            key={item.id}
            href={`/es/${item.nombre}`}
            className="block px-4 py-2 hover:scale-110 transition-all"
          >
            <p>{item.nombre}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

const style = `
.nav-links {
    font-size: 1.2rem;
    font-weight: 500;
    width: fit-content;
}
.nav-links::after {
    content: "";
    display: block;
    width: 0;
    height: 2.5px;
    background-color: white;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    opacity: 1;
    z-index: 101;
}
.nav-links:hover::after {
    width: 100%;
}
`;

const styleElement = document.createElement("style");
styleElement.textContent = style;
document.head.appendChild(styleElement);

export default ProductsDropdown;
