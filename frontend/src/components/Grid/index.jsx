import { Table, Thead, Tr, Th, Tbody, Td } from "./styles";
import axios from 'axios';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';

export function Grid({ users }) {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>E-mail</Th>
                    <Th onlyWeb>Telefone</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    users.map((user, id) => (
                        <Tr key={id}>
                            <Td width="30%">{user.nome}</Td>
                            <Td width="30%">{user.email}</Td>
                            <Td width="30%" onlyWeb>{user.fone}</Td>
                            <Td width="5%"><FaEdit /></Td>
                            <Td width="5%"><FaTrash /></Td>
                        </Tr>
                    ))
                }
            </Tbody>
        </Table>
    )
}