import { Link } from "react-router-dom";
import styled from "styled-components";
import fakeData from "../../interfaces/fakeData";

export default function Card({ data }: { data: fakeData }) {
    return (
        <CardContainer>
            <img src={data.iconUrl} alt="app icon" />
            <strong>{data.title}</strong>
            <p>{data.description}</p>
            <Link to={"/details/" + data.id}>
                <span>R$ {data.price.toFixed(2).replace(".", ",")}</span>
                <strong>Saiba mais</strong>
            </Link>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    color: rgb(0,0,0);

    background-color: #f0efefb0;
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.2);
    padding-top: 20px;
    border-radius: 7px;
    
    a{
        font-size: 1em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        color: rgb(255,255,255);
        background: linear-gradient(90deg, #ffae78 0%, #ff802b 40%, #ff6600 100%);
        border: none;
        width: 100%;
        height: 40px;
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;

        :hover{
            transform: scale(1.04);
            border-radius: 7px;
            box-shadow: 0px 0px 3px 1px #ff660097;
        }
    }

    img{
        width: 35px;
    }

    p{
        text-align: center;
        font-size: .9em;
        margin: 0 10px;
    }
`;