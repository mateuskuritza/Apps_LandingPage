import styled from "styled-components";

export default function Category({ title, iconUrl }: { title: string, iconUrl: string }) {

    return (
        <CategoryContainer>
            <img src={iconUrl} alt="category icon" />
            <p>{title}</p>
        </CategoryContainer>
    )
}

const CategoryContainer = styled.div`
    color: #444444;
    font-size: .8em;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 5px;
    background-color: #f0efef;
    width: 100%;
    p{
        text-align: center;
    }
    img{
        width: 20%;
    }

    :hover{
        background-color: #ff6600;
        border-radius: 5px;
        border: none;
        color: #FFF;
        box-shadow: 0px 0px 3px 1px #ff6600;
        transform: scale(1.05);
    }
`;