import React from "react";
import "../assets/scss/common.scss";

import ButtonGroup from "../components/ButtonGroup";
import MainHero from "../components/MainHero";

const Home = () => {
    return (
        <section id="home">
            <div className="container py-4">
                <div className="row">
                    <div className="col-12">
                        <h1>To book a service at home</h1>
                    </div>
                </div>
                <div className="row align-items-baseline">
                    <div className="col-lg-6">
                        <p>
                            In three simple steps, book an appointment to avail
                            salon and spa services at home!
                        </p>
                    </div>
                    <div className="col-lg-6 btn-group-home">
                        <ButtonGroup />
                    </div>
                </div>

                <div className="row main-hero-section">
                    <MainHero />
                </div>
            </div>
        </section>
    );
};

export default Home;
