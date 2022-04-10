import HeaderText from "./HeaderText"
import Image from "./Image"
import BodyText from "./BodyText"
let src = "images/B95DA8B0-E545-41AC-9BDD-6D44D59154B2.jpg"
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
        <div className="text-center md:text-4xl">
            <BodyText>
              <span className="text-6xl font-bold">"</span>
              <span className="md:text-4xl">
              You don't just play for fun, you play to earn, meet new friends, form a squad and experience true action gangstar gaming.
              </span>
              <span className="text-6xl font-bold">"</span>
              </BodyText>
          </div>
      </div>
    </section>
  )
}