import Image from 'next/image';

const About = () => {
  return (
    <section className="about-section">
      <div className="container-fluid">
        {/*=== About Wrapper ===*/}
        <div className="about-wrapper gray-bg">
          <div className="container">
            <div className="row align-items-xl-center">
              <div className="col-xl-5 col-lg-12">
                {/*=== About Image Box ===*/}
                <div className="about-two_image-box">
                  <Image
                    alt="Leaf 1" src={"/assets/images/about/about-6.png"}
                    style={{ width: '100%', height: 'auto' }}
                    width={500} height={500}
                  />
                </div>
              </div>
              <div className="col-xl-7 col-lg-12">
                {/*=== About Content Box ===*/}
                <div className="about-three_content-box pl-lg-70">
                  {/*=== Section Title ===*/}
                  <div className="section-title mb-25">
                    <span className="sub-title">
                      <i className="flaticon-plant" />
                      About Gardening
                    </span>
                    <h2>Gardening - The Result Of Nature</h2>
                  </div>
                  <p className="mb-40">
                    Sed ut perspiciatis unde omnis iste natus voluptatem
                    accusantiue doloremque laudantium totam rem aperiam, eaque
                    ipsa quae abilloy inventore
                  </p>
                  <div className="row">
                    <div className="col-sm-6">
                      {/*=== Fancy About Item ===*/}
                      <div className="fancy-about-item mb-40">
                        <div className="text">
                          <h5>
                            <i className="far fa-angle-double-right" />
                            Gardens
                          </h5>
                          <p>
                            Ut enim minima veniam nostrum exercitationem
                            corporis
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      {/*=== Fancy About Item ===*/}
                      <div className="fancy-about-item mb-40">
                        <div className="text">
                          <h5>
                            <i className="far fa-angle-double-right" />
                            Watering
                          </h5>
                          <p>
                            Ut enim minima veniam nostrum exercitationem
                            corporis
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      {/*=== Fancy About Item ===*/}
                      <div className="fancy-about-item mb-40">
                        <div className="text">
                          <h5>
                            <i className="far fa-angle-double-right" />
                            Maintenance
                          </h5>
                          <p>
                            Ut enim minima veniam nostrum exercitationem
                            corporis
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      {/*=== Fancy About Item ===*/}
                      <div className="fancy-about-item mb-40">
                        <div className="text">
                          <h5>
                            <i className="far fa-angle-double-right" />
                            Events
                          </h5>
                          <p>
                            Ut enim minima veniam nostrum exercitationem
                            corporis
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
