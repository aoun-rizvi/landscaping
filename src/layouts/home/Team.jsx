import Link from "next/link";

const Team = () => {
  return (
    <section className="team-section pt-10 pb-50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-50">
              <span className="sub-title">
                <i className="flaticon-plant" />
                Team Member
              </span>
              <h2>Meet Our Expert Gardeners</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            {/*====== Single Team Item ======*/}
            <div className="single-team-item-two mb-40">
              <div className="member-img">
                <img src="assets/images/team/team-10.jpg" alt="Team Image" />
                {/* <div className="social-box">
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className="member-info text-center">
                <h4 className="title">
                  <p>Joan Smith</p>
                  {/* <Link legacyBehavior href="/single-team">
                    <a>Joan Smith</a>
                  </Link> */}
                </h4>
                <p>Senior Gardener</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            {/*====== Single Team Item ======*/}
            <div className="single-team-item-two mb-40">
              <div className="member-img">
                <img src="assets/images/team/team-11.jpg" alt="Team Image" />
                {/* <div className="social-box">
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className="member-info text-center">
                <h4 className="title">
                  <p>John Smith</p>
                  {/* <Link legacyBehavior href="/single-team">
                    <a>John Smith</a>
                  </Link> */}
                </h4>
                <p>Junior Gardener</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            {/*====== Single Team Item ======*/}
            <div className="single-team-item-two mb-40">
              <div className="member-img">
                <img src="assets/images/team/team-12.jpg" alt="Team Image" />
                {/* <div className="social-box">
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className="member-info text-center">
                <h4 className="title">
                  <p>Joan Smith</p>
                  {/* <Link legacyBehavior href="/single-team">
                    <a>Joan Smith</a>
                  </Link> */}
                </h4>
                <p>Senior Gardener</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            {/*====== Experience Box ======*/}
            <div className="experience-box mt-25 mb-40 text-center">
              <h2 className="fill-text">25+</h2>
              <h4>Experience Team Member</h4>
              <Link legacyBehavior href="/team">
                <a className="btn-link">
                  View All Member <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team;
