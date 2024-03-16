import about from "../assets/img/about.jpg";
import about2 from "../assets/img/about-2.jpg";

export function About() {
    const about_img = about;
  return (
    <>
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2>About Us</h2>
            <p>
              Learn More <span>About Us</span>
            </p>
          </div>

          <div class="row gy-4">
            <div
              class="col-lg-7 position-relative about-img"
              style={{ backgroundImage: `url(${about2})` }}
              data-aos="fade-up"
              data-aos-delay="150"
            >
            </div>
            <div
              class="col-lg-5 d-flex align-items-end"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="content ps-0 ps-lg-5">
                <p class="fst-italic">
                  Sherpa Food and Bar takes you on a gastronomic journey to the heart of the Himalayas, offering a unique blend of Sherpa cuisine and a cozy bar atmosphere.
                  <br/> Nestled in [Location], this establishment captures the spirit of Sherpa culture, combining traditional flavors with a modern touch.
                </p>
                <ul>
                  <li>
                    <i class="bi bi-check2-all"></i> You can host your birthday Party in our restaurant
                  </li>
                  <li>
                    <i class="bi bi-check2-all"></i> You can have you holiday party with us in a traditional touch.
                  </li>
                  <li>
                    <i class="bi bi-check2-all"></i> we can arrage various types of event for 40 people.
                  </li>
                </ul>
                <p>
                Break from the ordinary and escape to Sherpa Food & Restaurant, your personal slice of paradise! Pasta Cosi and Momos are open seven days a week, for in- person service as well as takeout and delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
