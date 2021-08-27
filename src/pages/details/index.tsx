import { useParams } from "react-router-dom"

export default function Details() {
    const { id } = useParams<{ id: string }>();

    return (
        <p>Details of {id}</p>
    )
}