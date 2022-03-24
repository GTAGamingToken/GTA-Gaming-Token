import TransparentButton from "./TransparentButton"
import HeaderText from "./HeaderText"
import BodyText from "./BodyText"

export default function Header(){
  return (
    <section className="header relative mb-0">
      <div className="absolute bottom-16 left-14 sm:w-2/4 z-10">
        <HeaderText>A Token for your favourite gangstar game.</HeaderText>
        <BodyText>
          Trade GTA Gaming fan token to earn and vote for changes to your favourite franchise. A play to earn multiverse fan token. Stake to earn platform.
        </BodyText>
        <div>
          <TransparentButton>White Paper</TransparentButton>
          <TransparentButton>Buy Now</TransparentButton>
        </div>
      </div>
    </section>
  )
}