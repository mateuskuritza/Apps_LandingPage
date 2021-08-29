import Poster from "../../components/poster";
import fakeData from "../../interfaces/fakeData";

export default function Home({ data }: { data: fakeData[] }) {
    return (
        <Poster data={data} />
    )
}