import React from 'react'
import pricing1 from "../assets/images/pricing-01.jpg";
import pricing2 from "../assets/images/pricing-02.jpg";
import pricing3 from "../assets/images/pricing-03.jpg";

const Pricing = () => {
  return (
  
<section className="pricing-section">

    <div className="container">

        <div className="text-center section-heading">

            <p>OUR PRICING</p>

            <h2>
                Photography
                <span>Contest Plans</span>
                And Price
                <span>Awards</span>
            </h2>

        </div>

        <div className="row g-3 mt-5">

            <div className="col-4">

                <div className="pricing-card">

                    <img src={pricing1} alt="Basic Plan" />

                    <h3>Basic Plan</h3>

                    <hr/>

                    <ul className="plan-list">
                        <li >Lorem Ipsum Dolores Sonte</li>
                        <li >Songe Lorem Ipsum Dol</li>
                        <li >Matrios Venga Heptuss</li>
                        <li className="active">Denen Soreche Kog</li>
                        <li className="active">Digital Photography Awards</li>
                    </ul>

                    <h1>$25 USD</h1>

                    <a href="#">Choose This Plan</a>

                </div>

            </div>

            <div className="col-4">

                <div className="pricing-card">

                    <img src={pricing2} alt="Standard Plan" />

                    <h3>Standard Plan</h3>

                    <hr/>

                    <ul className="plan-list">
                        <li>Lorem Ipsum Dolores Sonte</li>
                        <li>Songe Lorem Ipsum Dol</li>
                        <li>Matrios Venga Heptuss</li>
                        <li>Denen Soreche Kog</li>
                        <li className="active">Digital Photography Awards</li>
                    </ul>

                    <h1>$45 USD</h1>

                    <a href="#">Choose This Plan</a>

                </div>

            </div>

            <div className="col-4">

                <div className="pricing-card">
                   <img src={pricing3} alt="Advanced Plan" />

                    <h3>Advanced Plan</h3>

                    <hr/>

                    <ul>
                        <li>Lorem Ipsum Dolores Sonte</li>
                        <li>Songe Lorem Ipsum Dol</li>
                        <li>Matrios Venga Heptuss</li>
                        <li>Denen Soreche Kog</li>
                        <li>Digital Photography Awards</li>
                    </ul>

                    <h1>$85 USD</h1>

                    <a href="#">Choose This Plan</a>

                </div>

            </div>

        </div>

    </div>

</section>
  )
}

export default Pricing