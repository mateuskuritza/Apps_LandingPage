import styled from "styled-components";
import fakeData from "../../interfaces/fakeData";
import ThemeLogo from "../../interfaces/themeLogo";
import Slider from "react-slick";
import Banner from "./Banner";
import { useMemo } from "react";

export default function Poster({ data, lightTheme = false }: { data: fakeData[], lightTheme?: boolean }) {

    const settings = useMemo(() => {
        return ({
            dots: true,
            infinite: true,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true
        })
    }, []);

    return (
        <ContainerPoster lightTheme={lightTheme}>
            <Slider {...settings}>
                {data.map(element => {
                    return (
                        <div key={element.id}>
                            <Banner lightTheme={lightTheme} data={element} />
                        </div>
                    )
                })}
            </Slider>
        </ContainerPoster>
    )
}

const ContainerPoster = styled.div<ThemeLogo>`
                .slick-dots{
                    top: calc(100% - 35px);
                button::before{
                    color: ${props => props.lightTheme ? "black" : "white"};
        }
    }
                .slick-dots li.slick-active button:before {
                    color: ${props => props.lightTheme ? "black" : "white"};
    }
                `;