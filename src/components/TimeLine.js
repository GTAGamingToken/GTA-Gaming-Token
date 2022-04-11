import HeaderText from "./HeaderText";
import BodyText from "./BodyText";
import Image from "./Image";

let src = "/images/9E3A8906-AE9B-4257-98FE-776FC3F071A5.jpg";

export default function TimeLine() {
  return (
    <section className="timeline-section" id="timeline">
      <div className="m-8 sm:m-16 rounded-xl overflow-hidden border-gray-900">
        <Image src={src} />
      </div>
      <div className="text-center">
        <HeaderText>Timeline</HeaderText>
      </div>
      <div className="text-center">
        <BodyText>
          Briefly scan through the section below to see the timeline for the GTA
          Gaming Token.
        </BodyText>
      </div>
      <div class="timeline">
        <div class="container left">
          <div class="content">
            <h2>
              <span>Q1 2022</span>Development.
            </h2>
            <ul className="flex flex-col space-y-4 text-2xl">
              <li>
                <h3>Birth Of GTA Token</h3>
              </li>
              <li>
                <h3>Website Development</h3>
              </li>
              <li>
                <h3>White Paper</h3>
              </li>
            </ul>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>
              <span>Q2 2022</span> IGO Private Sale and Token Launch
            </h2>
            <ul className="flex flex-col space-y-4 text-2xl">
              <li>
                <h3>IGO & Private Sale.</h3>
              </li>
              <li>
                <h3>Token launch on pancakeswap.</h3>
              </li>
              <li>
                <h3>Token launch on uniswap.</h3>
              </li>
              <li>
                <h3>5,000 holders.</h3>
              </li>
              <li>
                <h3>Coin gecko and MarketCap listing.</h3>
              </li>
            </ul>
          </div>
        </div>
        <div class="container left">
        <div class="content">
            <h2>
              <span>Q3 2022</span> First Phase CEX listing
            </h2>
            <ul className="flex flex-col space-y-4 text-2xl">
              <li>
                <h3>MEXC</h3>
              </li>
              <li>
                <h3>Bybit</h3>
              </li>
              <li>
                <h3>Gate.io</h3>
              </li>
            </ul>
          </div>
          
        </div>
        <div class="container right">
          <div class="content">
            <h2>
              <span>Q4 2022</span> Token Airdrops, NFT Launch and Staking
            </h2>
            <ul className="flex flex-col space-y-4 text-2xl">
              <li>
                <h3>Token Airdrop distribution.</h3>
              </li>
              <li>
                <h3>GTA DEX launch.</h3>
              </li>
              <li>
                <h3>Staking protocol launch.</h3>
              </li>
              <li>
                <h3>NFT airdrop distribution</h3>
              </li>
            </ul>
          </div>
        </div>
        <div class="container left">
          <div class="content">
            <h2>
              <span>Q1 2023</span> NFT Minting And Market Place
            </h2>
            <ul className="flex flex-col space-y-4 text-2xl">
              <li>
                <h3>GTA Gaming NFT Market Place.</h3>
              </li>
              <li>
                <h3>Minting of special collectibles and items.</h3>
              </li>
              <li>
                <h3>Trading GTA collectibles and NFTS for GTA token.</h3>
              </li>
              <li>
                <h3>P2E</h3>
              </li>
            </ul>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>
              <span>Q2 2023</span>2nd Phase CEX Listing
            </h2>
            <ul className="flex flex-col space-y-4 text-2xl">
              <li>
                <h3>Okex</h3>
              </li>
              <li>
                <h3>Huboi</h3>
              </li>
              <li>
                <h3>Binance.</h3>
              </li>
              <li>
                <h3>Coinbase.</h3>
              </li>
            </ul>
          </div>
        </div>
        <div class="container left">
          <div class="content">
            <h2>
              <span>Q3 2023</span>GTA Gaming P2E Metaverse
            </h2>
            <ul className="flex flex-col space-y-4 text-2xl">
              {/* <li><h3>Partnership with Rockstar North.</h3></li> */}
              <li>
                <h3>Partnership with Playstation.</h3>
              </li>
              <li>
                <h3>Partnership with XBox</h3>
              </li>
            </ul>
          </div>
        </div>
        <div class="container right">
          {/* <div class="content">
          <h2>
              <span>Q2 2023</span>GTA Gaming P2E Metaverse
            </h2>
            <ul className="flex flex-col space-y-4 text-2xl">
              <li><h3>Partnership with Rockstar North.</h3></li>
              <li><h3>Partnership with Playstation/</h3></li>
              <li><h3>Partnership with XBox</h3></li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
}
