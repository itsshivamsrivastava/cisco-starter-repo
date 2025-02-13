import React from 'react';
// import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.imsc2022.com/wp-content/uploads/2020/03/banner3-1.jpg" className="banner-image d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://www.imsc2022.com/wp-content/uploads/2020/03/banner3-1.jpg" className="banner-image d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://www.imsc2022.com/wp-content/uploads/2020/03/banner3-1.jpg" className="banner-image d-block w-100" alt="..."></img>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Banner;