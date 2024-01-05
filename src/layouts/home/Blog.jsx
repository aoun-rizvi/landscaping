import Link from "next/link";

const Blog = () => {
  return (
    <section className="blog-section pt-100 pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-10">
            {/*====== Section Title ======*/}
            <div className="section-title text-center mb-50 wow fadeInDown">
              <span className="sub-title">
                <i className="flaticon-plant" />
                News &amp; Blog
              </span>
              <h2>Read Latest News &amp; Blog</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {/*====== Single Blog Post ======*/}
            <div className="single-blog-post-four mb-40 wow fadeInLeft">
              <div className="entry-content">
                <div className="post-meta">
                  <span className="date">
                    <i className="far fa-calendar-alt" />
                    <Link legacyBehavior href="/blog-details">
                      <a>25 December 2022</a>
                    </Link>
                  </span>
                </div>
                <h4 className="entry-title">
                  <Link legacyBehavior href="/blog-details">
                    <a>Progressively an Enhanced Accessible Filterable</a>
                  </Link>
                </h4>
                <p>Quis autem vel reprehenderit voluptate velit esse quam</p>
                <Link legacyBehavior href="/blog-details">
                  <a className="btn-link">
                    Read More
                    <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="post-thumbnail">
                <img
                  src="assets/images/blog/blog-15.jpg"
                  alt="Post Thumbnail"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            {/*====== Single Blog Post ======*/}
            <div className="single-blog-post-four mb-40 wow fadeInRight">
              <div className="entry-content">
                <div className="post-meta">
                  <span className="date">
                    <Link legacyBehavior href="/blog-details">
                      <a>25 December 2022</a>
                    </Link>
                  </span>
                </div>
                <h4 className="entry-title">
                  <Link legacyBehavior href="/blog-details">
                    <a>Build Up Progressively Enhanced Accessible</a>
                  </Link>
                </h4>
                <p>Quis autem vel reprehenderit voluptate velit esse quam</p>
                <Link legacyBehavior href="/blog-details">
                  <a className="btn-link">
                    Read More
                    <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="post-thumbnail">
                <img
                  src="assets/images/blog/blog-16.jpg"
                  alt="Post Thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
