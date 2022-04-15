export default function Plan({ roi, name, color, duration }) {
  return (
    <div className="relative flex flex-col justify-between p-8 lg:p-6 xl:p-8 rounded-2xl">
      <div className="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-transparent rounded-2xl"></div>
      <div className="absolute inset-0 w-full h-full border-2 border-gray-200 rounded-2xl"></div>
      <div className="relative flex pb-5 space-x-5 border-b border-gray-200 lg:space-x-3 xl:space-x-5">
        <svg
          className="w-16 h-16 text-white rounded-2xl"
          viewBox="0 0 150 150"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <rect x="0" y="0" width="150" height="150" rx="15"></rect>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <mask fill="#000">
              <use xlinkHref="#plan1"></use>
            </mask>
            <use fill="currentColor" xlinkHref="#plan1"></use>
            <circle
              fill-opacity="1"
              fill="#fff"
              mask="url(#plan1)"
              cx="125"
              cy="25"
              r="50"
            ></circle>
            <path
              fill-opacity="1"
              fill="#FFF"
              mask="url(#plan1)"
              d="M-33 83H67v100H-33z"
            ></path>
          </g>
        </svg>
        <div className="relative flex flex-col items-start">
          <h3 className="text-xl text-gray-100 font-bold">{name}</h3>
          <p className="tracking-tight text-gray-100">
            <span className="text-sm transform inline-block -translate-y-2.5 relative">
              %
            </span>
            <span className="text-3xl font-bold text-gray-300">{roi}</span>
            <span className="text-sm -translate-y-0.5 inline-block transform">
              &nbsp;WPY
            </span>
          </p>
        </div>
      </div>

      <ul className="relative py-12 space-y-3">
        <li className="flex items-center space-x-2 text-sm font-medium text-white">
          <svg
            className="w-6 h-6 white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="text-bold my-2 text-2xl">Duration - { duration } Weeks</span>
        </li>
        
      </ul>

      <a
        href="#_"
        className="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group"
      >
        <span className={`w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 hover:translate-y-0 hover:translate-x-0 transition-all ease-out duration-200 rounded-xl ${color}`}></span>
        <span className="absolute inset-0 w-full h-full border-2 border-gray-100 rounded-xl"></span>
        <span className="relative">Comint Soon</span>
        <svg
          className="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
}
