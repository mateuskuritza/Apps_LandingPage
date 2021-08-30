import styled from "styled-components"
import fakeData from "../../interfaces/fakeData";
import Slider from "react-slick";
import { useMemo } from "react";
import { Link } from "react-router-dom";

export default function Infos({ data }: { data: fakeData | undefined }) {

    const settings = useMemo(() => {
        return ({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 700,
            slidesToShow: 2,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
        })
    }, []);



    return (
        <InfosContainer ref={el => {
            if (!el) return
            if (el.getBoundingClientRect().width < 500) settings.slidesToShow = 1
        }}>
            <Slider {...settings}>
                {data?.screens.map(element => {
                    return (
                        <div key={element.id}>
                            <div>
                                <img src={element.imageUrl} alt="screen app" />
                                <p>{element.description}</p>
                            </div>
                        </div>
                    )
                })}
            </Slider>
            <div>
                <p>{data?.description}</p>
                <div>
                    <p><span>R$</span>{data?.price.toFixed(2).replace('.', ",")}</p>
                    <Link to="#">Habilitar</Link>
                </div>
            </div>
        </InfosContainer>
    )
}

const InfosContainer = styled.div`

    .slick-slide{
        color: #ff6600;
        padding: 30px;
        img{
            width: 100%;
            margin: 10px auto;
        }
        border: none;

        > div{
            box-shadow: 0 0 3px 2px rgba(0,0,0,0.1);
            border-radius: 5px;
            padding: 30px;
        }
    }

    .slick-next, .slick-prev{
        ::before{
            color: #ff6600;
            font-size: 34px;
        }
    }

    >div:last-of-type{
        p{
            margin: 20px 0;
        }

        div{
            display: flex;
            align-items: center;

            >p{
                font-weight: bold;
                font-size: 1.8em;
                > span{
                    font-weight: 400;
                    font-size: 18px;
                    margin-right: 5px;
                }
            }

            a{
                margin: 0 15px;
                border-radius: 7px;
                font-weight: 600;
                color: #fff;
                font-size: 1.1em;
                background: linear-gradient(90deg, #ffae78 0%, #ff802b 40%, #ff6600 100%);
                padding: 7px 14px;
                text-align: center;
            }
        }
    }

`;