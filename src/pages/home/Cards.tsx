import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Card from "../../components/card";
import fakeData from "../../interfaces/fakeData";
import dayjs from "dayjs";

export default function Cards({ data, selectedCategory }: { data: fakeData[], selectedCategory: string }) {

    const [filteredData, setFilteredData] = useState<fakeData[]>([]);
    const [orderBy, setOrderBy] = useState<string>("Preço");

    function filterData() {
        let newData = data;
        if (selectedCategory === 'Todos') {
            return setFilteredData(newData);
        }
        setFilteredData(newData.filter(element => element.title === selectedCategory));
    }

    useEffect(filterData, [selectedCategory, data]);


    function orderDataBy(order: string) {
        let newData = filteredData;
        if (order === "Preço") {
            newData = newData.sort((a, b) => a.price - b.price);
        }
        if (order === "Lançamento") {
            newData = newData.sort((a, b) => dayjs(a.releaseDate).valueOf() - dayjs(b.releaseDate).valueOf());
        }
        setOrderBy(order);
        setFilteredData(newData);
    }

    return (
        <CardsContainer>
            <div>
                <strong>ORDENAR</strong>
                <select value={orderBy} onChange={(event) => orderDataBy(event.target.value)}>
                    <option value="Preço">Preço</option>
                    <option value="Lançamento">Lançamento</option>
                </select>
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

        select {
            margin: 0 10px;
            width: 200px;
            height: 30px;
            border-radius: 3px;
            padding-left: 5px;
            border: 1px solid rgba(0,0,0,0.3);
        }

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