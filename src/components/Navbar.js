import { useState } from "react";

export default function Navbar({ links }) {
  let [showNav, setShowNav] = useState(false);
  return (
    <nav className="flex flex-col sm:flex-row justify-between bg-black font-bold py-4">
      <div className="mx-2 p-2 py-8 flex flex-row justify-between">
        <a href="!#" className="mx-2">
          Logo
        </a>
        <button
          className="font sm:hidden"
          onClick={(e) => setShowNav(!showNav)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <ul className="sm:flex flex-col hidden sm:flex-row mx-2 p-2 justify-between">
        {links &&
          links.map((link) =>
            link.active ? ( // if the link is active, show it
              <li
                className={`mx-6 py-8 border-b-2 border-gray-200`}
                key={link.id}
              >
                {link.text}
              </li>
            ) : (
              <li className={`mx-6 py-8`} key={link.id}>
                {link.text}
              </li>
            )
          )}
      </ul>
      {showNav && (
        <>
          <ul className="sm:hidden flex-col flex sm:flex-row mx-2 p-2 justify-between">
            {links &&
              links.map((link) =>
                link.active ? ( // if the link is active, show it
                  <li
                    className={`mx-6 py-8 border-b-2 border-gray-200`}
                    key={link.id}
                  >
                    {link.text}
                  </li>
                ) : (
                  <li className={`mx-6 py-8`} key={link.id}>
                    {link.text}
                  </li>
                )
              )}
          </ul>
          <ul className="sm:hidden sm:flex-row mx-2 p-2 py-8 justify-between">
            <li className="p-6">Buy now</li>
            <li className="p-6">0xEFF</li>
          </ul>
        </>
      )}
      <ul className="hidden sm:flex sm:flex-row mx-2 p-2 py-8 justify-between">
        <li className="mx-2">Buy now</li>
        <li className="mx-2">0xEFF</li>
      </ul>
    </nav>
  );
}
