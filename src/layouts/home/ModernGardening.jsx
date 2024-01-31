import Link from "next/link";
import Image from 'next/image';

const ModernGardening = () => {
  return (
    <section className="features-seciton pb-50">
      <div className="container">
        <div className="row align-items-xl-end">
          <div className="col-lg-6">
            {/*====== Features Image Box ======*/}
            <div className="features-image-box mb-50">
              <Image
                alt="Features Image" src={"/assets/images/features/features-10.png"}
                style={{ width: '100%', height: 'auto' }}
                width={500} height={500}
              />
            </div>
          </div>
          <div className="col-lg-6">
            {/*====== Features Content Box ======*/}
            <div className="features-content-box mb-50">
              <div className="section-title mb-20">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Modern Gardening
                </span>
                <h2>We Offers Landscape &amp; Tree Plantations</h2>
              </div>
              <p className="mb-35">
                Quis autem vel eum iure reprehenderit qui in voluptate velit
                esse quam nihil molestiae consequatur vel illum qui dolorem
              </p>
              <ul className="features-list">
                <li>
                  <i className="fal fa-long-arrow-right" />
                  Quality Gardening
                </li>
                <li>
                  <i className="fal fa-long-arrow-right" />
                  Dedicated Team Members
                </li>
                <li>
                  <i className="fal fa-long-arrow-right" />
                  Guarantee Service &amp; No Hidden Cost{" "}
                </li>
              </ul>
              <Link legacyBehavior href="/about">
                <a className="main-btn primary-btn">Learn More Us</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ModernGardening;
