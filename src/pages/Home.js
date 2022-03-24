import LayoutComponent from "./Layout"
import Header from "../components/Header"
import SectionComponent from "../components/WelcomeSection"
import { welcomeText } from '../utils/helper';
import TimeLine from "../components/TimeLine";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

export default function Home(){

  const welcomeTitle =  'About GTA Gaming Token';
  let src = '/images/WallpaperDog-20488975.jpg'
  return(
    <LayoutComponent>
      <Header />
      <SectionComponent title={welcomeTitle} src={src} welcomeText={welcomeText} />
      <TimeLine />
      <Pricing />
      <Footer />
    </LayoutComponent>
  )
}