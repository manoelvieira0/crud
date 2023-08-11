import { styled } from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #FFF;
    padding: 2rem;
    box-shadow: 0 0 5px #CCC;
    border-radius: 5px;
    max-width: 80rem;
    margin: 2rem auto;
    word-break: break-all;
`;

export const Thead = styled.thead`
`;

export const Tr = styled.tr`
`;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 0.5rem;

    @media (max-width: 500px) {
       ${(props) => props.onlyWeb && 'display: none'}
    }
`;

export const Tbody = styled.tbody`

`;

export const Td = styled.td`
    padding-top: 1.5rem;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};

    @media (max-width: 500px) {
       ${(props) => props.onlyWeb && 'display: none'}
    }
`;