import React from 'react'
import closed1 from "../assets/images/closed-01.jpg";
import closed2 from "../assets/images/closed-02.jpg";
import closed3 from "../assets/images/closed-03.jpg";

const Winners = () => {
  return (
     <section className="winners-section">

    <div className="container">

        <div className="section-title text-center">

            <p className="sub-heading">
                CLOSED PHOTOGRAPHY CONTESTS
            </p>

            <h2>
                <span>Previous Contests</span>
                With Handpicked
                <span>Winners</span>
            </h2>

        </div>

        <div className="row g-3 mt-5">

            <div className="col-4">

                <div className="winner-card">

                    <img src={closed2} alt="Winner" />

                    <div className="winner-info">

                        <div>
                            <h5>96 Participants</h5>
                            <p>Number Of Artists</p>
                        </div>

                        <div>
                            <h5>410 Pictures</h5>
                            <p>Submitted Pics</p>
                        </div>

                    </div>

                </div>

            </div>

           
            <div className="col-4">

                <div className="winner-card">

                    <img src={closed3} alt="Winner" />

                    <div className="winner-info">

                        <div>
                            <h5>74 Participants</h5>
                            <p>Number Of Artists</p>
                        </div>

                        <div>
                            <h5>284 Pictures</h5>
                            <p>Submitted Pics</p>
                        </div>

                    </div>

                </div>

            </div>

            
            <div className="col-4">

                <div className="winner-card">

                  <img src={closed1} alt="Winner" />

                    <div className="winner-info">

                        <div>
                            <h5>88 Participants</h5>
                            <p>Number Of Artists</p>
                        </div>

                        <div>
                            <h5>320 Pictures</h5>
                            <p>Submitted Pics</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

        <div className="text-center mt-5">

            <a href="#" class="open-btn">
                Browse Open Contests
            </a>

        </div>

    </div>

</section>
  )
}

export default Winners