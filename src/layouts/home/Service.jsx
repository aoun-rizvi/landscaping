import Link from "next/link";

const Service = () => {
  return (
    <section className="service-section pt-100 pb-10">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title text-center mb-100">
              <span className="sub-title">
                <i className="flaticon-plant" />
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
                <i className="flaticon-scissors" />
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
                <i className="flaticon-watering" />
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
                <i className="flaticon-yard" />
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
                <i className="flaticon-growing" />
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
