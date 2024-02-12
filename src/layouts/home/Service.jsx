import Link from "next/link";
import Image from 'next/image';

const Service = () => {
  return (
    <section className="service-section pt-100 pb-10">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title text-center mb-100">
              <span className="sub-title">
                <Image
                  alt="Services" src={"/assets/images/gardening/8-29.png"}
                  style={{ margin: '0rem 0.5rem 0rem 0rem' }}
                  width={50} height={50}
                />
                Services
              </span>
              <h2>We Care Your Garden &amp; Landscape</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-service-item-two mb-80">
              <div className="icon">
                <Image
                  alt="Services" src={"/assets/images/gardening/8-22.png"}
                  style={{ margin: '0rem 0.5rem 0rem 0rem' }}
                  width={50} height={50}
                />
              </div>
              <div className="text">
                <h4 className="title">
                  <Link legacyBehavior href="/service-details">
                    <a>Spring Cleaning</a>
                  </Link>
                </h4>
                <p>Sed ut perspiciatis omnisey natus voluptate accusa</p>
                <Link legacyBehavior href="/service-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-service-item-two mb-80">
              <div className="icon">
                <Image
                  alt="Services" src={"/assets/images/gardening/8-19.png"}
                  style={{ margin: '0rem 0.5rem 0rem 0rem' }}
                  width={50} height={50}
                />
              </div>
              <div className="text">
                <h4 className="title">
                  <Link legacyBehavior href="/service-details">
                    <a>Irrigation &amp; Drainage</a>
                  </Link>
                </h4>
                <p>Quis autem reprehe volutate esse quam molestiae</p>
                <Link legacyBehavior href="/service-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-service-item-two mb-80">
              <div className="icon">
                <Image
                  alt="Services" src={"/assets/images/gardening/8-05.png"}
                  style={{ margin: '0rem 0.5rem 0rem 0rem' }}
                  width={50} height={50}
                />
              </div>
              <div className="text">
                <h4 className="title">
                  <Link legacyBehavior href="/service-details">
                    <a>Snow &amp; Ice Removal</a>
                  </Link>
                </h4>
                <p>We denounce with righteous indignation and dislike</p>
                <Link legacyBehavior href="/service-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-service-item-two mb-80">
              <div className="icon">
                <Image
                  alt="Services" src={"/assets/images/gardening/8-25.png"}
                  style={{ margin: '0rem 0.5rem 0rem 0rem' }}
                  width={50} height={50}
                />
              </div>
              <div className="text">
                <h4 className="title">
                  <Link legacyBehavior href="/service-details">
                    <a>Lawn Fertilization</a>
                  </Link>
                </h4>
                <p>To take triviale exam which undertakes laborious</p>
                <Link legacyBehavior href="/service-details">
                  <a className="icon-btn">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
