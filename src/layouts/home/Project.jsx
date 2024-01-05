import Link from "next/link";
import { sliderProps } from "@/src/sliderProps";
import Slider from "react-slick";

const Project = () => {
  return (
    <section className="project-section">
      <div className="container-fluid">
        {/*====== Project Slider ======*/}
        <Slider
          {...sliderProps.projectsSliderFour}
          className="projects-slider-four wow fadeInUp"
          data-wow-delay=".2s"
        >
          {/*====== Project Item ======*/}
          <div className="single-project-item-four">
            <div className="project-img">
              <img
                src="assets/images/gallery/project-1.jpg"
                alt="Project Image"
              />
              <div className="hover-content">
                <div className="number">01</div>
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Water in Garden</a>
                    </Link>
                  </h3>
                  <p>Professional Gardener for Garden Care</p>
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="project-content">
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Garden Caring</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/*====== Project Item ======*/}
          <div className="single-project-item-four">
            <div className="project-img">
              <img
                src="assets/images/gallery/project-2.jpg"
                alt="Project Image"
              />
              <div className="hover-content">
                <div className="number">02</div>
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Water in Garden</a>
                    </Link>
                  </h3>
                  <p>Professional Gardener for Garden Care</p>
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="project-content">
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Water in Garden</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/*====== Project Item ======*/}
          <div className="single-project-item-four">
            <div className="project-img">
              <img
                src="assets/images/gallery/project-3.jpg"
                alt="Project Image"
              />
              <div className="hover-content">
                <div className="number">03</div>
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Water in Garden</a>
                    </Link>
                  </h3>
                  <p>Professional Gardener for Garden Care</p>
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="project-content">
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Cutting Hedge</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/*====== Project Item ======*/}
          <div className="single-project-item-four">
            <div className="project-img">
              <img
                src="assets/images/gallery/project-4.jpg"
                alt="Project Image"
              />
              <div className="hover-content">
                <div className="number">04</div>
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Water in Garden</a>
                    </Link>
                  </h3>
                  <p>Professional Gardener for Garden Care</p>
                  <Link legacyBehavior href="/project-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="project-content">
                <div className="text text-white">
                  <h3 className="title">
                    <Link legacyBehavior href="/project-details">
                      <a>Plants Greenhouse</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default Project;
