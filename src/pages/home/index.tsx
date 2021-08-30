import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Poster from "../../components/poster";
import fakeData from "../../interfaces/fakeData";
import Cards from "./Cards";
import Categories from "./Categories";

export default function Home({ data }: { data: fakeData[] }) {

    const [categories, setCategories] = useState<{ title: string, iconUrl: string }[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

    useEffect(() => uniqueCategories(data), [data]);

    function uniqueCategories(list: fakeData[]) {
        const newList: { title: string, iconUrl: string }[] = [];
        newList.push({ title: "Todos", iconUrl: "https://image.flaticon.com/icons/png/512/149/149229.png" });
        list.forEach(element => {
            if (!newList.filter((e) => e.title === element.title)[0]) newList.push({ title: element.title, iconUrl: element.iconUrl });
        });
        setCategories(newList);
    };

    return (
        <>
            <Poster data={data} />
            <HomeContainer>
                <Categories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <Cards data={data} selectedCategory={selectedCategory} />
            </HomeContainer>
        </>
    )
}

const HomeContainer = styled.div`
    padding: 5px 15px;
    width: 99%;
`;