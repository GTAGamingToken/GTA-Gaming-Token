import { useState } from "react";
import { ethers } from 'ethers';

export default function Navbar({ links }) {

  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    (async function () {
      let userAddress = await signer.getAddress();
      console.log(signer, userAddress);
    })();
  }

  const src = "./images/DE4C9BA0-5F74-4389-9165-8430A34F68B3.png";
  let [showNav, setShowNav] = useState(false);
  return (
    <nav className="flex cursor-pointer flex-col sm:flex-row justify-between bg-black font-bold py">
      <div className="mx-2 p-2 py-8 flex flex-row justify-between">
        <a href="/" className="mx-2">
            <img src="/images/F06955A4-F4F3-4689-8A81-D4E94646EEBE.png" width="60" height="40" className="object-contain" alt="gta gaming" />
        </a>
        <button
          className="font sm:hidden w-1/2"
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
                className={`mx-6 md:py-8 py-4  border-b-2 border-gray-200`}
                key={link.id}
              >
                <a href={link.route}>{link.text}</a>
              </li>
            ) : (
              <li className={`mx-6 md:py-8 py-4`} key={link.id}>
                <a href={link.route}>{link.text}</a>
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
                    className={`mx-6 md:py-8 py-4 border-b-2 border-gray-200`}
                    key={link.id}
                  >
                    <a href={link.route}>{link.text}</a>
                  </li>
                ) : (
                  <li className={`mx-6 md:py-8 py-4`} key={link.id}>
                    <a href={link.route}>{link.text}</a>
                  </li>
                )
              )}
          </ul>
          <ul className="sm:hidden sm:flex-row mx-2 p-2 py-8 justify-between">
            <li className="p-6">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4dKgF3CNoc1yiyvm-xOOYKHof_MrlRn-XgsZv-TU6jW8SWg/viewform?usp=pp_url">
                Airdrop
              </a>
            </li>
            {/* <li className="p-6" onClick={connectWallet}><p>0xEFF</p></li> */}
          </ul>
        </>
      )}
      <ul className="hidden sm:flex sm:flex-row mx-2 p-2 py-8 justify-between">
        <li className="mx-2">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4dKgF3CNoc1yiyvm-xOOYKHof_MrlRn-XgsZv-TU6jW8SWg/viewform?usp=pp_url">
            Airdrop
          </a>
        </li>
        {/* <li className="mx-2" onClick={connectWallet}><p>0xEFF</p></li> */}
      </ul>
    </nav>
  );
}
