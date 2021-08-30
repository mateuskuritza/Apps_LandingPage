import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import styled from "styled-components";
import Poster from "../../components/poster";
import getData from "../../fakeAPI";
import fakeData from "../../interfaces/fakeData";
import { AiOutlineLeft as IconLeft } from "react-icons/ai";
import Infos from "./Infos";

export default function Details() {

    const { id } = useParams<{ id: string }>();
    const [data, setData] = useState<fakeData[]>([]);
    const [detailsData, setDetailsData] = useState<fakeData>();

    useEffect(() => {
        getData().then(r => {
            setData(r);
            setDetailsData(r.filter(element => element.id === parseInt(id))[0])
        });
    }, [id]);

    return (
        <>
            <Poster data={data} lightTheme />
            <DetailsContainer>
                <Link to="/">
                    <IconLeft />
                    {detailsData?.title}
                </Link>
                <Infos data={detailsData} />
            </DetailsContainer>
        </>
    )
}

const DetailsContainer = styled.div`
    width: 80%;
    margin: 30px auto;
    > a{
        color: orange;
        font-weight: bold;
        font-size: 24px;
        display: flex;
        align-items: center;
    }
`;