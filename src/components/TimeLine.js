import HeaderText from "./HeaderText";
import BodyText from "./BodyText";
import Image from "./Image";

let src = '/images/WallpaperDog-5479844.jpg'

export default function TimeLine() {
  return (
    <section className="timeline-section">
      <div className="m-16 rounded-xl overflow-hidden border-gray-900">
          <Image src={src} />
        </div>
      <div className="text-center">
        <HeaderText>Timeline</HeaderText>
      </div>
      <div className="text-justify">
        <BodyText>
          Briefly scan through the section below to see the timeline for the GTA Gaming Token.
        </BodyText>
      </div>
      <div class="timeline">
        <div class="container left">
          <div class="content">
            <h2>
              <span>2020</span>Lorem ipsum dolor sit amet
            </h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
              erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>
              <span>2019</span>Lorem ipsum dolor sit amet
            </h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
              erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div class="container left">
          <div class="content">
            <h2>
              <span>2018</span>Lorem ipsum dolor sit amet
            </h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
              erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>
              <span>2017</span>Lorem ipsum dolor sit amet
            </h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
              erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div class="container left">
          <div class="content">
            <h2>
              <span>2016</span>Lorem ipsum dolor sit amet
            </h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
              erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>
              <span>2015</span>Lorem ipsum dolor sit amet
            </h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
              erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
