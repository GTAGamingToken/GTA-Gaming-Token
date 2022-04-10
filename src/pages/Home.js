import LayoutComponent from "./Layout"
import Header from "../components/Header"
import SectionComponent from "../components/WelcomeSection"
import { welcomeText } from '../utils/helper';
import TimeLine from "../components/TimeLine";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import PlayToEarn from "../components/PlayToEarn";
export default function Home(){

  const welcomeTitle =  'About GTA Gaming Token';
  let src = '/images/CAA781ED-0C77-43F3-BDF4-7F08E94885E1.jpg'
  return(
    <LayoutComponent>
      <Header />
      <SectionComponent title={welcomeTitle} src={src} welcomeText={welcomeText} />
      <TimeLine />
      <PlayToEarn />
      <Pricing />
      <Footer />
    </LayoutComponent>
  )
}