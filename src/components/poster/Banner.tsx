import styled from "styled-components";
import fakeData from "../../interfaces/fakeData";
import ThemeLogo from "../../interfaces/themeLogo";
import { Link } from "react-router-dom";
import Logo from "../logo";

export default function Banner({ data, lightTheme = true }: { data: fakeData, lightTheme?: boolean }) {

    return (
        <ContainerBanner lightTheme={lightTheme} image={lightTheme ? data.secondaryImageUrl : data.mainImageUrl}>
            <div className="c-infos">
                <Logo lightTheme={lightTheme} title={data.title} />
                <p>{data.description}</p>
                <div>
                    <p><span>R$</span>{data.price.toFixed(2).replace('.', ",")}</p>
                    <Link to={`details/${data.id}`}>Saiba mais</Link>
                </div>
            </div>
            <div className="c-image" />
        </ContainerBanner>
    )
}


const ContainerBanner = styled.div<ThemeLogo>`
    width: 100vw;
    height: 280px;
    border-bottom: 4px solid #ff6600;
    display: flex;
    color: ${props => props.lightTheme ? "#000000" : "#FFF"};

    .c-infos{
        width: 100%;
        background: ${props => props.lightTheme
        ? ("linear-gradient(90deg, rgb(185, 185, 185) 0%, rgb(219, 219, 219) 25%, #ffffff 100%)")
        : ("linear-gradient(90deg, rgb(0, 99, 129) 0%, rgb(0, 64, 90) 25%, rgba(7,15,25,1) 100%)")};
        padding: 1% 4%;
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        flex-direction: column;

        > p {
            color: ${props => props.lightTheme ? "#858585" : "#FFF"};
        }

        >div:last-of-type{
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

    .c-image{

        @media (max-width: 480px){
           display: none;
        }

        background-image: url(${props => props.image});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        width: 100%;
        position: relative;
        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${props => props.lightTheme
        ? ("linear-gradient(to right, #ffffff 0%,rgba(0, 0, 0, 0) 30%)")
        : ("linear-gradient(to right, rgba(7,15,25,1) 0%,rgba(0, 0, 0, 0) 20%)")};
            z-index: 1;
        }
    }
`;