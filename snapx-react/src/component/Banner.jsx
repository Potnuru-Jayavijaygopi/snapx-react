import React from 'react'
import featured2 from "../assets/images/featured-02.jpg";
import featured3 from "../assets/images/featured-03.jpg";

const Banner = () => {
  return (
    <section className="hero">

    <div className="overlay"></div>

    <div className="container">

        <div className="hero-content">

            <h1>
                Enter a world of
                <span>Photos</span>
                &
                Amazing
                <br/>
                <span>Awards</span>
            </h1><hr/>

            <p>
                SnapX Photography is a professional website template with
                5 different HTML pages for maximum customization.It is free for commerical usage.This Bootstrap v5.1.3 CSS layout is provided by TemplatesMo Free CSS Templates. 
            </p>

            <div className="hero-buttons">

                <a href="#" class="contest-btn">
                    Explore SnapX Contest
                </a>

                <a href="#" class="video-btn">
                    ▶ Watch Our Video Now
                </a>

            </div>

        </div>

    </div>

    <div className="cards-wrapper">

        <div className="container position-relative">

          <button className="slider-arrow left-arrow">
             &lt;
          </button>
           <button className="slider-arrow right-arrow">
               &gt;
           </button>
            <div className="row  align-items-center">

                <div className="col-4">

                    <div className="photo-card">
                       <img src={featured3} alt="Featured 3" />
                    </div>

                </div>

                <div className="col-4 ">

                    <div className="center-card">

                        <h6>Walk In The Nature ★★★★★ <span>(4.5)</span></h6>

                        <p className="blod">Contest Winner:<span>Thomas Eddy</span></p>

                        <p>Contest Author: <span>Cengiz Sal</span></p>

                        <p>Awards: <span>$8,400 + Canon EOS R1</span></p>

                    </div>

                </div>

                <div className="col-4">

                    <div className="photo-card">
                        <img src={featured2} alt="Featured 2" />
                    </div>

                </div>
            </div>
 
        </div>

    </div>

  </section>
  )
}

export default Banner