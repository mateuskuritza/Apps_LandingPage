import styled from "styled-components";

export default function Category({ title, iconUrl, setSelectedCategory, selectedCategory }: { title: string, iconUrl: string, setSelectedCategory: Function, selectedCategory: string }) {

    return (
        <CategoryContainer onClick={() => setSelectedCategory(title)} active={title === selectedCategory}>
            <img src={iconUrl} alt="category icon" />
            <p>{title}</p>
        </CategoryContainer>
    )
}

interface Active {
    active: boolean;
}

const CategoryContainer = styled.div <Active> `
    font-size: .8em;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 5px;
    background-color: ${props => props.active ? "#ff6600" : "#f0efef"};
    color: ${props => props.active ? "#FFFFFF" : "#444444"};
    width: 100%;
    min-width: 80px;

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