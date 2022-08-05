import React from "react";
import { Link } from "react-router-dom";
//  OwlCarousel Slider Import
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const HomeBanner = () => {
  let responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  };
  return (
    <>
      <section id="homeOne_banner">
        <div className="banner-slider">
          <OwlCarousel
            className="owl-theme"
            responsive={responsive}
            autoplay={true}
            autoplayHoverPause={true}
            autoplayTimeout={2500}
            loop={true}
            nav={false}
            dots={true}
          >
            <div
              className="banner-item banner-img-one bg-img"
              style={{
                backgroundImage:
                  "url(" +
                  "https://images.unsplash.com/photo-1446694292248-2c2a7e575b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" +
                  ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="container">
                <div className="banner_one_inner">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                      <div className="banner-text">
                        <h1>
                          Shipping Products <br />
                          Worldwide
                        </h1>
                        <p>
                          Cargo, also known as freight, refers to goods or
                          produce being transported from one place to another –
                          by water, air or land. Originally, the term “cargo”
                          referred to goods being loaded onboard a vessel.
                        </p>
                        <Link className="btn btn-theme" to="/request_quote">
                          Get A Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="banner-item banner-img-two"
              style={{
                backgroundImage:
                  "url(" +
                  "https://images.unsplash.com/photo-1642084399774-7bae8ede2477?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" +
                  ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="container">
                <div className="banner_one_inner">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                      <div className="banner-text">
                        <h1>
                          Shipping Products <br />
                          Worldwide
                        </h1>
                        <p>
                          Cargo consists of bulk goods conveyed by water, air,
                          or land. In economics, freight is cargo that is
                          transported at a freight rate for commercial gain.
                          Cargo was originally a shipload but now covers all
                          types of freight, including transport by rail, van,
                          truck, or intermodal container.
                        </p>
                        <Link className="btn btn-theme" to="/request_quote">
                          Get A Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="banner-item banner-img-three"
              style={{
                backgroundImage:
                  "url(" +
                  "https://images.unsplash.com/photo-1609522886437-27a610fbe81d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" +
                  ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="container">
                <div className="banner_one_inner">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                      <div className="banner-text">
                        <h1>
                          Shipping Products <br />
                          Worldwide
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua quis ipsum suspendisse.
                        </p>
                        <Link className="btn btn-theme" to="/request_quote">
                          Get A Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
        <div className="banner_social_icon">
          <ul>
            <li>
              <a href="#!">
                <i className="fab facebook fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fab twitter fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fab instagram fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fab linkedin fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
