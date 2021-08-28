import { useState, useEffect } from "react"
import { BsFillBarChartFill as IconChart } from "react-icons/bs";

export default function Logo({ darkTheme, text }: { darkTheme?: boolean, text: string }) {

    const [modifyStyle, setModifyStyle] = useState<string>('');

    useEffect(() => {
        if (darkTheme) {
            setModifyStyle(" c-logo--dark");
        }
    }, [])

    return (
        <div className={`c-logo` + modifyStyle}>
            <IconChart />
            <strong>up<span>Miner</span></strong>
            <div className="vertical-bar"></div>
            <p>{text}</p>
        </div>
    )
}