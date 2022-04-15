import TransparentButton from "./TransparentButton"
import HeaderText from "./HeaderText"
import BodyText from "./BodyText"
// import { use } from 'react-router-dom';

export default function Header(){
  // const _history = useHistory();

  const airDropForm = "https://docs.google.com/forms/d/e/1FAIpQLSc4dKgF3CNoc1yiyvm-xOOYKHof_MrlRn-XgsZv-TU6jW8SWg/viewform?usp=pp_url"

  return (
    <section className="header relative mb-0" id="header">
      <div className="absolute bottom-16 left-14 sm:w-2/4 z-10">
        <HeaderText>A Token based on your favourite gangstar game.</HeaderText>
        <BodyText>
          Trade GTA Gaming fan token to earn and vote for changes a gangstar metaverse. A play to earn metaverse fan token, you can also stake to earn.
        </BodyText>
        <div>
          <a href="https://gtagamingtoken.gitbook.io/gta-gaming-token-white-paper/">
            <TransparentButton>White Paper</TransparentButton>
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4dKgF3CNoc1yiyvm-xOOYKHof_MrlRn-XgsZv-TU6jW8SWg/viewform?usp=pp_url">
            <TransparentButton>
              Airdrop
            </TransparentButton>
          </a>
        </div>
      </div>
    </section>
  )
}