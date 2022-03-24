import Navbar from "../components/Navbar"
import { NavLinks } from "../utils/helper"

export default function LayoutComponent({ children }){
  return (
    <div>
      <Navbar links={NavLinks} />
      <section>
        { children }
      </section>
    </div>
  )
}