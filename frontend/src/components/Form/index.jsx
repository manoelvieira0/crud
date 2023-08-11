import { useRef } from "react";
import { Container, InputArea, Label, Input, Button } from "./styles";

export function Form({ onEdit }) {
    const ref = useRef();
    return (
        <Container ref={ref}>
                <InputArea>
                    <Label>Nome</Label>
                    <Input name="nome" />
                </InputArea>
                <InputArea>
                    <Label>E-mail</Label>
                    <Input name="email" type="e-mail" />
                </InputArea>
                <InputArea>
                    <Label>Telefone</Label>
                    <Input name="fone" />
                </InputArea>
                <InputArea>
                    <Label>Data de nascimento</Label>
                    <Input name="data_nascimento" type="date" />
                </InputArea>
                <Button type="submit">Salvar</Button>
        </Container>
    );
}