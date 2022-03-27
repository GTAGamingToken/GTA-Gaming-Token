import HeaderText from "./HeaderText";
import BodyText from "./BodyText";
import Image from "./Image";

let src = '/images/WallpaperDog-5479844.jpg'

export default function TimeLine() {
  return (
    <section className="timeline-section">
      <div className="m-8 sm:m-16 rounded-xl overflow-hidden border-gray-900">
          <Image src={src} />
        </div>
      <div className="text-center">
        <HeaderText>Timeline</HeaderText>
      </div>
      <div className="text-center">
        <BodyText>
          Briefly scan through the section below to see the timeline for the GTA Gaming Token.
        </BodyText>
      </div>
      <div class="timeline">
        <div class="container left">
          <div class="content">
            <h2>
              <span>Q1 2020</span>IGO, private sale and Token launch.
            </h2>
            <ul className="flex flex-col space-y-4 text-2xl">
              <li><h3>IGO & Private Sale</h3></li>
              <li><h3>Token Launch on Pancakeswap</h3></li>
              <li><h3>Token launch on uniswap</h3></li>
              <li><h3>Coingecko and CoinMarketCap listing</h3></li>
            </ul>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>
              <span>Q2 2022</span> CEX listing
            </h2>
            <ul className="flex flex-col space-y-4 text-2xl">
    
              <li><h3>MEXC</h3></li>
              <li><h3>ByBit</h3></li>
              <li><h3>Gate.io</h3></li>
              <li><h3>Binance</h3></li>
            </ul>
          </div>
        </div>
        <div class="container left">
          <div class="content">
          <h2>
              <span>Q3 2022</span> Token Airdrops, NFT Launch and Staking
            </h2>
            <ul className="flex flex-col space-y-4 text-2xl">
              <li><h3>Token Airdrop</h3></li>
              <li><h3>NFT collection Airdrop</h3></li>
              <li><h3>Staking Protocols</h3></li>
            </ul>
          </div>
        </div>
        <div class="container right">
          <div class="content">
          <h2>
              <span>Q4 2022</span>NFT Marketplace
            </h2>
            <ul className="flex flex-col space-y-4 text-2xl">
              <li><h3>GTA Gtaming NFT marketplace</h3></li>
              <li><h3>Minting of Special Collectibles and Accessories</h3></li>
              <li><h3>Trade GTA gamming NFTs and collectibles for GTA Gaming Token</h3></li>
            </ul>
          </div>
        </div>
        <div class="container left">
          <div class="content">
          <h2>
              <span>Q1 2023</span>GTA Gaming P2E Metaverse
            </h2>
            <ul className="flex flex-col space-y-4 text-2xl">
              <li><h3>Partnership with Rockstar North.</h3></li>
              <li><h3>Partnership with Playstation/</h3></li>
              <li><h3>Partnership with XBox</h3></li>
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
