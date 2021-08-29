import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import Poster from "../../components/poster";
import getData from "../../fakeAPI";
import fakeData from "../../interfaces/fakeData";

export default function Details() {

    const { id } = useParams<{ id: string }>();
    const [data, setData] = useState<fakeData[]>([]);

    useEffect(() => {
        getData().then(r => {
            setData(r.filter(r => r.id === parseInt(id)));
        });
    }, [id]);

    return (
        <Poster data={data} lightTheme />
    )
}