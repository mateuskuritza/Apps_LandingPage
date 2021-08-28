import { useState, useEffect } from "react"
import { BsFillBarChartFill as IconChart } from "react-icons/bs";

export default function Logo(props: { darkTheme?: boolean }) {

    const [modifyStyle, setModifyStyle] = useState<string>('');

    useEffect(() => {
        if (props.darkTheme) {
            setModifyStyle(" c-logo--dark");
        }
    }, [])

    return (
        <div className={`c-logo` + modifyStyle}>
            <IconChart />
            <strong>up<span>Miner</span></strong>
        </div>
    )
}