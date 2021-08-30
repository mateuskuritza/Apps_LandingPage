import styled from "styled-components";
import Card from "../../components/card";
import fakeData from "../../interfaces/fakeData";

export default function Cards({ data }: { data: fakeData[] }) {
    return (
        <CardsContainer>
            <div>
                <strong>ORDENAR</strong>
                <input type="select" />
            </div>
            <div>
                {data.map(element => <Card data={element} />)}
            </div>
        </CardsContainer>
    )
}

const CardsContainer = styled.div`
    > div:first-of-type{
        display: flex;
        align-items: center;
        width: 100%;
        margin: 20px 0;
    }

    > div:last-of-type{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 250px 250px 250px;
        column-gap: 30px;
        row-gap: 25px;

        @media (max-width: 930px){
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            > div {
                width: 250px;
                height: 250px;
            }
        }
    }
`;