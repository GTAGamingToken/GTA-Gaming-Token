import HeaderText from "./HeaderText";
import BodyText from "./BodyText";
import Plan from "./Plan";
import Image from "./Image"

export default function Pricing() {
  let src ='./images/2543C9A4-CF0E-4821-84F3-6D01A078D99F.jpg';
  const plans = [
    {
      title: 'GTA Gaming Young Thugs',
      roi: 3,
      color: 'bg-green-500'
    },
    {
      title: 'GTA Gaming Pro Thugs',
      roi: 5,
      color: 'bg-yellow-500'
    },
    {
      title: 'GTA Gaming Mafia Boss',
      roi: 10,
      color: 'bg-red-500'
    },
  ];
  return (
    // <!-- Pricing section -->
    <section class="staking w-full pt-4 sm:mt-16 pb-20" id="staking">
      <div class="px-2 mx-auto text-center max-w-7xl">
        <HeaderText>
        <div className="m-6 sm:m-16 rounded-xl overflow-hidden border-gray-900">
          <Image src={src} />
        </div>
          Staking Farms
        </HeaderText>
        <BodyText>
          We are the first protocol to base yield on a monthly basis. You can engage in any of our staking contracts, to earn passive income.
        </BodyText>
        <div class="grid gap-5 mt-12 lg:grid-cols-3 md:grid-cols-2">
          {/* <!-- Start First Plan --> */}
          { plans && plans.map(plan => (
            <Plan roi={plan.roi} name={plan.title} color={plan.color} key={plan.roi} />
          )) }
          {/* <!-- End First Plan --> */}
        </div>
      </div>
    </section>
  );
}
