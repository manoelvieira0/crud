import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    background-color: #FFF;
    padding: 2rem;
    box-shadow: 0 0 5px #CCC;
    border-radius: 5px;
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`

`;

export const Input = styled.input`
    padding: 0 1rem;
    border: 1px solid #BBB;
    border-radius: 5px;
    height: 4rem;
`;

export const Button = styled.button`
    padding: 1rem 3rem;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2C73D2;
    color: white;
    height: 4rem;
`;

 