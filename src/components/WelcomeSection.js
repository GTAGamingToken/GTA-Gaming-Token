import HeaderText from "./HeaderText"
import BodyText from './BodyText';
import Image from "./Image";

export default function WelcomeSection({ welcomeText, title, src }){
  return (
    <section className="welcome-section">
      <div>
        <div className="m-8 sm:m-16 rounded-xl overflow-hidden border-gray-900">
          <Image src={src} />
        </div>
        <div className="text-center">
          <HeaderText>{title}</HeaderText>
        </div>
        <div className="text-justify">
            <BodyText>{ welcomeText }</BodyText>
          </div>
      </div>
    </section>
  )
}