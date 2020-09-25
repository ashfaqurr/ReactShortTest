import React from "react";
import mainimg1 from "../assets/img/img1.png";
import mainimg2 from "../assets/img/img2.png";
import mainimg3 from "../assets/img/img3.png";
import arrow from "../assets/img/arrow2.png";

const MainHero = () => {
    return (
        <>
            <div className="col-md-3 text-center">
                <img src={mainimg1} alt="" className="img-fluid" />
                <h5>Book</h5>
                <p>
                    Search for the service you need, select a suitable expert,
                    choose a payment method, and book a Home appointment
                </p>
            </div>

            <div className="col-md-1 text-center d-none d-md-block">
                <img src={arrow} alt="" className="img-fluid" />
            </div>

            <div className="col-md-3 text-center">
                <img src={mainimg2} alt="" className="img-fluid" />
                <h5>Your Beauty Expert Arrives</h5>
                <p>
                    Search for the service you need, select a suitable expert,
                    choose a payment method, and book a Home appointment
                </p>
            </div>

            <div className="col-md-1 text-center d-none d-md-block">
                <img src={arrow} alt="" className="img-fluid" />
            </div>

            <div className="col-md-3 text-center">
                <img src={mainimg3} alt="" className="img-fluid" />
                <h5>Poy</h5>
                <p>
                    Search for the service you need, select a suitable expert,
                    choose a payment method, and book a Home appointment
                </p>
            </div>
        </>
    );
};

export default MainHero;
