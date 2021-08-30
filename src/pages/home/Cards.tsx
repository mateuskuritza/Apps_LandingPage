import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Card from "../../components/card";
import fakeData from "../../interfaces/fakeData";

export default function Cards({ data, selectedCategory }: { data: fakeData[], selectedCategory: string }) {

    const [filteredData, setFilteredData] = useState<fakeData[]>([]);

    function filterData() {
        if (selectedCategory === 'Todos') {
            setFilteredData(data);
        } else {
            const newData = data.filter(element => element.title === selectedCategory);
            setFilteredData(newData);
        }
    }

    useEffect(filterData, [selectedCategory, data]);

    return (
        <CardsContainer>
            <div>
                <strong>ORDENAR</strong>
                <input type="select" />
            </div>
            <div>
                {filteredData.map(element => <Card key={element.id} data={element} />)}
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