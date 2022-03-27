import HeaderText from "./HeaderText"
import Image from "./Image"
import BodyText from "./BodyText"
let src = "images/WallpaperDog-20488889.jpg"
export default function PlayToEarn(){
  return(
    <section className="play-to-earn my-6">
      <div>
        <div className="text-center">
          <HeaderText>Play To Earn</HeaderText>
        </div>
        <div className="m-8 sm:m-16 rounded-xl overflow-hidden border-gray-900">
          <Image src={src} />
        </div>
        <div className="text-justify">
            <BodyText>
              <span className="text-6xl font-bold">"</span>
              You don't just play for fun, you play to earn, meet new friends, form a squad and experience true action gangstar gaming.<br />
              <span className="text-6xl font-bold">"</span>
              </BodyText>
          </div>
      </div>
    </section>
  )
}