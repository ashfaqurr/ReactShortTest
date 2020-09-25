import React from "react";
import img1 from "../assets/img/venue.png";
import img2 from "../assets/img/home.png";
import left from "../assets/img/left.png";
import right from "../assets/img/right.png";

const ButtonGroup = () => {
    return (
        <>
            <div className="group1">
                <div className="btn btn-gray">
                    <img src={img1} className="img-fluid" alt="" />
                </div>
                <div className="btn btn-blue">
                    <img src={img2} className="img-fluid" alt="" />
                </div>
            </div>

            <div className="group2">
                <div className="btn btn-arrow">
                    <img src={left} className="img-fluid" alt="" />
                </div>
                <div className="btn btn-arrow">
                    <img src={right} className="img-fluid" alt="" />
                </div>
            </div>
        </>
    );
};

export default ButtonGroup;
