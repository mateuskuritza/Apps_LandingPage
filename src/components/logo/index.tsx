import styled from 'styled-components';
import { BsFillBarChartFill as IconChart } from "react-icons/bs";

export default function Logo({ lightTheme, title }: { lightTheme?: boolean, title: string }) {

    return (
        <ContainerLogo>
            <IconChart />
            <strong className={lightTheme ? "light" : ""}>up<span>Miner</span></strong>
            <div className="vertical-bar"></div>
            <p>{title}</p>
        </ContainerLogo>
    )
}

const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;

    svg{
        margin-right: 5px;
    }

    >div{
        content: "";
        width: 1px;
        height: 30px;
        background-color: rgb(177, 177, 177);
        margin: 0 10px;
    }

    .light{
        color: rgb(122, 122, 122);
        > span{
            color: #000000;
        }
    }
`;