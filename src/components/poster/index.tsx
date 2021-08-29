import styled from "styled-components";
import { Link } from "react-router-dom";
import fakeData from "../../interfaces/fakeData";
import Logo from "../logo";

export default function Poster({ data, darkTheme = false }: { data: fakeData[], darkTheme?: boolean }) {
    return (
        <ContainerPoster>
            <div className="c-infos">
                <Logo title={data[0].title} />
                <p>{data[0].description}</p>
                <div>
                    <p>{data[0].price}</p>
                    <Link to={`details/${data[0].id}`}>Saiba mais</Link>
                </div>
            </div>
            <div className="c-image">
                <img alt="some thing" src={data[0].mainImageUrl} />
            </div>
        </ContainerPoster>
    )
}

const ContainerPoster = styled.div`
    width: 100%;
    height: 300px;
    border-bottom: 4px solid #ff6600;
    display: flex;
    align-items: center;
    justify-content: center;

    >div{
        height: 100%;
    }

    .c-infos{
        width: 100%;
        background: rgb(41,98,181);
        background: linear-gradient(90deg, rgb(0, 99, 129) 0%, rgb(0, 64, 90) 25%, rgba(7,15,25,1) 100%);
    }

    .c-image{
        img {
            object-fit: contain;
            height: 100%;
        }
        position: relative;
        &:before{
            content: '';
            position:absolute;
            top:0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to right, rgba(7,15,25,1) 0%,rgba(0, 0, 0, 0) 20%);
            z-index: 1;
        }
    }
`;