import styled from 'styled-components';
import { BsFillBarChartFill as IconChart } from "react-icons/bs";

export default function Logo({ title }: { title: string }) {

    return (
        <ContainerLogo className="c-logo">
            <IconChart />
            <strong>up<span>Miner</span></strong>
            <div className="vertical-bar"></div>
            <p>{title}</p>
        </ContainerLogo>
    )
}

const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 1.5em;

    svg{
        margin-right: 5px;
    }
`;