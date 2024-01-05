import { sliderProps } from "@/src/sliderProps";
import Slider from "react-slick";
import dynamic from 'next/dynamic';
 const Counter = dynamic(() => import('@/src/components/Counter'), {
  ssr: false,
});

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="container-fluid">
        {/*=== Testimonial Wrapper ===*/}
        <div className="testimonial-quote-area p-r z-1 main-bg">
          <div className="shape shape-one">
            <span>
              <img src="assets/images/shape/leaf-4.png" alt="Leaf" />
            </span>
          </div>
          {/*====== Quote Area ======*/}
          <div className="quote-wrapper wow fadeInDown">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12">
                  {/*=== Client Quote Box ===*/}
                  <div className="client-quote-box">
                    <div className="icon">
                      <i className="fal fa-long-arrow-right" />
                    </div>
                    <div className="text">
                      <h2 className="number">
                        <Counter end={372} />+
                      </h2>
                      <h4>
                        Global Clients Happy to Get Our gardening Services{" "}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== Testimonial Area ======*/}
          <div className="testimonial-area pt-70 pb-50 pl-15 pr-15 wow fadeInUp">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-1 order-md-1 order-2">
                  {/*=== Testimonial Dots ===*/}
                  <div className="testimonial-dots mb-20" />
                </div>
                <div className="col-lg-11 order-md-2 order-1">
                  {/*=== Testimonial Slider ===*/}
                  <Slider
                    {...sliderProps.testimonialSliderThree}
                    className="testimonial-slider-three mb-20"
                  >
                    {/*=== Testimonial Item ===*/}
                    <div className="single-testimonial-item-three d-flex">
                      <div className="testimonial-inner-content mb-30">
                        <ul className="ratings">
                          <li>
                            <i className="far fa-star" />
                          </li>
                          <li>
                            <i className="far fa-star" />
                          </li>
                          <li>
                            <i className="far fa-star" />
                          </li>
                          <li>
                            <i className="far fa-star" />
                          </li>
                          <li>
                            <i className="far fa-star" />
                          </li>
                        </ul>
                        <p>
                          On the other hand we denounce with righteous
                          indignation and dislike men who are beguiled and
                          demoralized by the charms of pleasure
                        </p>
                        <div className="quote-title">
                          <div className="icon">
                            <img
                              src="assets/images/testimonial/quote3.png"
                              alt="Quote Image"
                            />
                          </div>
                          <div className="title">
                            <h6>Norman M. Devore</h6>
                            <p className="position">CEO &amp; Founder</p>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-author mb-30">
                        <img
                          src="assets/images/testimonial/img-4.jpg"
                          className="rounded-circle"
                          alt="testimonial image"
                        />
                      </div>
                    </div>
                    {/*=== Testimonial Item ===*/}
                    <div className="single-testimonial-item-three d-flex">
                      <div className="testimonial-inner-content mb-30">
                        <ul className="ratings">
                          <li>
                            <i className="far fa-star" />
                          </li>
                          <li>
                            <i className="far fa-star" />
                          </li>
                          <li>
                            <i className="far fa-star" />
                          </li>
                          <li>
                            <i className="far fa-star" />
                          </li>
                          <li>
                            <i className="far fa-star" />
                          </li>
                        </ul>
                        <p>
                          On the other hand we denounce with righteous
                          indignation and dislike men who are beguiled and
                          demoralized by the charms of pleasure
                        </p>
                        <div className="quote-title">
                          <div className="icon">
                            <img
                              src="assets/images/testimonial/quote3.png"
                              alt="Quote Image"
                            />
                          </div>
                          <div className="title">
                            <h6>Douglas D. Hall</h6>
                            <p className="position">Senior Gardener</p>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-author mb-30">
                        <img
                          src="assets/images/testimonial/img-4.jpg"
                          className="rounded-circle"
                          alt="testimonial image"
                        />
                      </div>
                    </div>
                    {/*=== Testimonial Item ===*/}
                    <div className="single-testimonial-item-three d-flex">
                      <div className="testimonial-inner-content mb-30">
                        <ul className="ratings">
                          <li>
                            <i className="far fa-star" />
                          </li>
                          <li>
                            <i className="far fa-star" />
                          </li>
                          <li>
                            <i className="far fa-star" />
                          </li>
                          <li>
                            <i className="far fa-star" />
                          </li>
                          <li>
                            <i className="far fa-star" />
                          </li>
                        </ul>
                        <p>
                          On the other hand we denounce with righteous
                          indignation and dislike men who are beguiled and
                          demoralized by the charms of pleasure
                        </p>
                        <div className="quote-title">
                          <div className="icon">
                            <img
                              src="assets/images/testimonial/quote3.png"
                              alt="Quote Image"
                            />
                          </div>
                          <div className="title">
                            <h6>Norman M. Devore</h6>
                            <p className="position">CEO &amp; Founder</p>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-author mb-30">
                        <img
                          src="assets/images/testimonial/img-4.jpg"
                          className="rounded-circle"
                          alt="testimonial image"
                        />
                      </div>
                    </div>
                    {/*=== Testimonial Item ===*/}
                    <div className="single-testimonial-item-three d-flex">
                      <div className="testimonial-inner-content mb-30">
                        <ul className="ratings">
                          <li>
                            <i className="far fa-star" />
                          </li>
                          <li>
                            <i className="far fa-star" />
                          </li>
                          <li>
                            <i className="far fa-star" />
                          </li>
                          <li>
                            <i className="far fa-star" />
                          </li>
                          <li>
                            <i className="far fa-star" />
                          </li>
                        </ul>
                        <p>
                          On the other hand we denounce with righteous
                          indignation and dislike men who are beguiled and
                          demoralized by the charms of pleasure
                        </p>
                        <div className="quote-title">
                          <div className="icon">
                            <img
                              src="assets/images/testimonial/quote3.png"
                              alt="Quote Image"
                            />
                          </div>
                          <div className="title">
                            <h6>Douglas D. Hall</h6>
                            <p className="position">Senior Gardener</p>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-author mb-30">
                        <img
                          src="assets/images/testimonial/img-4.jpg"
                          className="rounded-circle"
                          alt="testimonial image"
                        />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
