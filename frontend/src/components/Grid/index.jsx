import { Table, Thead, Tr, Th, Tbody, Td } from "./styles";
import axios from 'axios';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';

export function Grid({ users, setUsers, setOnEdit }) {
    
    const handleDelete = async (id) => {
        await axios.delete('http://localhost:8800/' + id)
        .then(({data}) => {
            const newArray = users.filter((user) => user.id !== id);

            setUsers(newArray);
            toast.success(data);
        })
        .catch(({data}) => toast.error(data));

        setOnEdit(null)
    }

    const handleEdit = (user) => {
        setOnEdit(user)
    }

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
                            <Td width="5%"><FaEdit onClick={() => handleEdit(user)}/></Td>
                            <Td width="5%"><FaTrash onClick={() => handleDelete(user.id)}/></Td>
                        </Tr>
                    ))
                }
            </Tbody>
        </Table>
    )
}