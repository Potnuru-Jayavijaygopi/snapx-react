import React from 'react'
import icon1 from "../assets/images/icon-01.png";
import icon2 from "../assets/images/icon-02.png";
import icon3 from "../assets/images/icon-03.png";
import icon4 from "../assets/images/icon-04.png";
import popular1 from "../assets/images/popular-01.png";
import popular2 from "../assets/images/popular-02.png";
import popular3 from "../assets/images/popular-03.png";
import popular4 from "../assets/images/popular-04.png";

const Categories = () => {
  return (
    <section className="categories-section">

    <div className="container">

        <div className="section-header d-flex justify-content-between align-items-center">

            <div>
                <p className="sub-title">OUR CATEGORIES</p>

                <h2>
                    Check Out
                    <span>Popular</span>
                    Contest
                    <span>Categories</span>
                </h2>
            </div>

            <a href="#" className="discover-btn">
                Discover All Categories
            </a>

        </div>

        <div className="row mt-5 g-2">

            <div className=" col-3">
                <div className="contest-card">

                    <div className="card-heading">

                        <div className="icon-box">
                           <img src={icon1} alt="Icon1" />
                        </div>

                        <div>
                            <h6>Nature Pic Contest</h6>
                            <p><span>126</span> Available Contests</p>
                        </div>

                    </div>

                    <img src={popular1} alt="Popular1" />

                    <button>
                        Browse Nature Pic Contests
                    </button>

                </div>
            </div>

            <div className="col-3 ">
                <div className="contest-card">

                    <div className="card-heading">

                        <div className="icon-box">
                          <img src={icon2} alt="Icon2" />
                        </div>

                        <div>
                            <h6>Random Pic Contest</h6>
                            <p><span>116</span> Available Contests</p>
                        </div>

                    </div>

                    <img src={popular2} alt="Popular2" />

                    <button>
                        Browse Random Pic Contests
                    </button>

                </div>
            </div>

            <div className="col-3">
                <div className="contest-card">

                    <div className="card-heading">

                        <div className="icon-box">
                           <img src={icon3} alt="Icon3" />
                        </div>

                        <div>
                            <h6>Portrait Pic Contest</h6>
                            <p><span>164</span> Available Contests</p>
                        </div>

                    </div>

                   <img src={popular3} alt="Popular3" />

                    <button>
                        Browse Portrait Pic Contests
                    </button>

                </div>
            </div>

            <div className="col-3 ">
                <div className="contest-card">

                    <div className="card-heading">

                        <div className="icon-box">
                            <img src={icon4} alt="Icon4" />
                        </div>

                        <div>
                            <h6>Space Pic Contest</h6>
                            <p><span>135</span> Available Contests</p>
                        </div>

                    </div>

                    <img src={popular4} alt="Popular4" />

                    <button>
                        Browse Space Pic Contests
                    </button>

                </div>
            </div>

        </div>

    </div>

</section>
  )
}

export default Categories