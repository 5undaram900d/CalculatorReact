import styled from "styled-components";
export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    width: 400px;
    margin: 40px auto;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: minmax(120px, auto) repeat(5, 100px);
    box-shadow: 8px 8px 10px #330;
    border-radius: 10px;
`
export const Scrn = styled.div`
    grid-column: 1 / -1;
    background-color: grey;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    border: 15px solid #efe2e2;
    padding: 10px;
    word-wrap: word-break;
    word-break: break-all;
    text-align: right;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px; 
`
export const Prev = styled.div`
    color: rgba(250, 250, 250, 0.75):
    font-size: 1.5rem;
`
export const Curr = styled.div`
    color: white;
    font-size: 2.5rem;
`
export const Btn = styled.button`
    curser: pointer;
    font-size: 2rem;
    outline: none;
    border: 1px outset white;
    background-color: rgba(255, 255, 255, 0.75);
    &:hover{
        background-color: rgba(255, 255, 255, 0.9);
    }
    ${function({gridSpan}){
        if(gridSpan){
            return `grid-column: span ${gridSpan};`;
        }
    }};
    ${({oprtn}) => oprtn && `background-color:lightgrey;`};
    ${({cont}) => cont && `background-color:skyblue;`};
    ${({dec}) => dec && `background-color:skyblue; border-bottom-left-radius:10px;`};
    ${({eqls}) => eqls && `background-color:grey; border-bottom-right-radius:10px;`};
`;
