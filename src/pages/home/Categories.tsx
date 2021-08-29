import styled from "styled-components";
import Category from "../../components/category";

export default function Categories({ categories }: { categories: { title: string, iconUrl: string }[] }) {
    return (
        <CategoriesContainer>
            {categories.map((category, i) => <Category key={i} title={category.title} iconUrl={category.iconUrl} />)}
        </CategoriesContainer>
    )
}

const CategoriesContainer = styled.div`
    margin: 10px auto;
    width: 98%;
    height: 80px;
    display: flex;
    border-radius: 5px;
    box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.2);

    @media (max-width: 760px){
        width: 100%;
        overflow: scroll;
        overflow-y: hidden;

        ::-webkit-scrollbar {
        height: 5px;
        background: transparent;
        }

        ::-webkit-scrollbar-thumb {
        background: #888;
        
        :hover{
            background: #ff6600;
        }
    }

    }

    > div:first-of-type{
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    
    > div:last-of-type{
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    > div {
        border: 1px solid #00000011;
    }
`;