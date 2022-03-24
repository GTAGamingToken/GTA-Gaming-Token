export default function Navbar({ links }) {
  
  return (
    <nav className="flex flex-col sm:flex-row justify-between bg-black font-bold py-4">
      <div className="mx-2 p-2 py-8 flex flex-row justify-between">
        <a href="!#" className="mx-2">Logo</a>
        <button className="font sm:hidden">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <ul className="flex flex-col sm:flex-row mx-2 p-2 justify-between">
        { links && links.map(link => (
          link.active ? // if the link is active, show it
           (<li className={`mx-6 py-8 border-b-2 border-gray-200`} key={link.id}>{link.text}</li>): 
          (<li className={`mx-6 py-8`} key={link.id}>{link.text}</li>)
        ))}
      </ul>
      <ul className="flex sm:flex-row mx-2 p-2 py-8 justify-between">
        <li className="mx-2">Buy now</li>
        <li className="mx-2">0xEFF</li>
      </ul>
    </nav>
  );
}
