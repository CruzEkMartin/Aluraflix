import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from '@mui/material/Box';
import Slider from 'react-slick';

export const SliderCarousel = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Box
            sx={{
                padding: '1rem',
                color: 'white',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
            }}>
            <h2>Slider</h2>
            <Slider {...settings}>
                <div className="box">
                    <div className="box-titulo">1</div>
                </div>
                <div className="box">
                    <div className="box-titulo">2</div>
                </div>
                <div className="box">
                    <div className="box-titulo">3</div>
                </div>
                <div className="box">
                    <div className="box-titulo">4</div>
                </div>
                <div className="box">
                    <div className="box-titulo">5</div>
                </div>
            </Slider>
        </Box>
    )
}
