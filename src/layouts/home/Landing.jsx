import Link from "next/link";
import Image from 'next/image';

const Landing = () => {
  return (
    <section className="banner-section">
      {/*=== Hero Wrapper ===*/}
      <div className="hero-wrapper-one gray-bg">
        <div className="shape shape-one animate-float-y">
        <span>
            <Image
              alt="Shape 1" src={"/assets/images/hero/shape-1.png"}
              style={{ width: '100%', height: 'auto' }}
              width={500} height={500}
            />
        </span>
        </div>
        <div className="shape shape-two animate-float-x">
        <span>
            <Image
              alt="Shape 2" src={"/assets/images/hero/shape-2.png"}
              style={{ width: '100%', height: 'auto' }}
              width={500} height={500}
              loading="eager"
            />
        </span>
        </div>
        <div className="shape shape-three animate-float-x">
        <span>
            <Image
              alt="Shape 3" src={"/assets/images/hero/shape-3.png"}
              style={{ width: '100%', height: 'auto' }}
              width={500} height={500}
            />
        </span>
        </div>
        <div className="container">
          <div className="row align-items-lg-center">
              <div className="col-xl-6 col-lg-12">
              {/*=== Hero Content ===*/}
              <div className="hero-content">
                  <h1 className="">
                  Green Environments Make You Happy and provide Oxygen
                  </h1>
                  <p className="" >
                  We Provide Beautiful Gardening &amp; Landscaping
                  </p>
                  <div className="hero-button mb-30">
                    <Link legacyBehavior href="/about">
                        <a className="main-btn golden-btn mb-10">Explore More</a>
                    </Link>
                    <Link legacyBehavior href="/index">
                        <a className="main-btn filled-btn mb-10">How It Work</a>
                    </Link>
                  </div>
              </div>
              </div>
              <div className="col-xl-6 col-lg-12">
              {/*=== Hero Image Box ===*/}
              <div className="hero-image-box d-xl-block d-none">
                <Image
                  alt="Hero Image" src={"/assets/images/hero/hero-three_one.jpg"}
                  style={{ width: '100%', height: 'auto', }}
                  width={500} height={550}
                  loading="eager"
                  quality={100}
                  priority={true}
                />
                <div className="shape hero-svg">
                  <svg
                    width={237}
                    height={569}
                    viewBox="0 0 237 569"
                    fill="none"
                  >
                    <path
                      d="M0.552583 568.307L1.99989 0.226473C1.99989 0.226473 237.025 -9.37181 236.276 284.731C235.527 578.834 0.552583 568.307 0.552583 568.307Z"
                      fill="#F1D2A9"
                    />
                  </svg>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Landing;
