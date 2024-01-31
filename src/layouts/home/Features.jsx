import Image from 'next/image';
import dynamic from 'next/dynamic';
const Counter = dynamic(() => import('@/src/components/Counter'), {
  ssr: false,
});

const Features = () => {
  return (
    <section className="features-section-two p-r z-1  col-12">
      {/*=== Features Wrapper ===*/}
      <div className="features-wrapper-two main-bg">
        <div className="shape shape-one d-none d-md-block">
          <span>
            <Image
              alt="Leaf 1" src={"/assets/images/shape/leaf-5.png"}
              style={{ width: '100%', height: 'auto' }}
              width={500} height={500}
            />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <Image
              alt="Leaf 2" src={"/assets/images/shape/leaf-5.png"}
              style={{ width: '100%', height: 'auto' }}
              width={50} height={50}
            />
          </span>
        </div>
        <div className="shape shape-three d-none d-md-block">
          <span>
            <Image
              alt="Leaf 3" src={"/assets/images/shape/leaf-5.png"}
              style={{ width: '100%', height: 'auto' }}
              width={500} height={500}
            />
          </span>
        </div>
        <div className="features-area pb-30">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*=== Features Item ===*/}
              <div className="single-features-item-two mb-40">
                <div className="text">
                  <div className="icon">
                    <i className="fl-icon flaticon-watering-plants" />
                    <a href="#" className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                  <h5 className="title">Garden Maintenance</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*=== Features Item ===*/}
              <div className="single-features-item-two mb-40">
                <div className="text">
                  <div className="icon">
                    <i className="fl-icon flaticon-watering-plants" />
                    <a href="#" className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                  <h5 className="title">Garden Overhauls</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*=== Features Item ===*/}
              <div className="single-features-item-two mb-40">
                <div className="text">
                  <div className="icon">
                    <i className="fl-icon flaticon-watering-plants" />
                    <a href="#" className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                  <h5 className="title">Landscape Design</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== Counter Area ===*/}
        <div className="counter-area">
          <div className="row pt-70">
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item-two mb-30">
                <div className="inner-counter">
                  <div className="icon">
                    <i className="fas fa-check" />
                  </div>
                  <h2 className="number">
                    <Counter end={859} />
                  </h2>
                  <p>Projects Complete</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item-two mb-30">
                <div className="inner-counter">
                  <div className="icon">
                    <i className="fas fa-check" />
                  </div>
                  <h2 className="number">
                    <Counter end={99} />%
                  </h2>
                  <p>Satisfactions Rate</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item-two mb-30">
                <div className="inner-counter">
                  <div className="icon">
                    <i className="fas fa-check" />
                  </div>
                  <h2 className="number">
                    <Counter end={683} />+
                  </h2>
                  <p>Expert Team Member</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item-two mb-30">
                <div className="inner-counter">
                  <div className="icon">
                    <i className="fas fa-check" />
                  </div>
                  <h2 className="number">
                    <Counter end={860} />+
                  </h2>
                  <p>Awards Winning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== Experience Box ===*/}
      {/* <div className="experience-box-two wow fadeInRight">
        <h2 className="number">
          <Counter end={25} />
        </h2>
        <h6>Years Of Experience</h6>
        <Link legacyBehavior href="/about">
          <a className="icon-btn">
            <i className="far fa-arrow-right" />
          </a>
        </Link>
      </div> */}
    </section>
  );
};
export default Features;
