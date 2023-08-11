import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { styled } from 'styled-components';
import { Form } from './components/Form';
import { Grid } from './components/Grid';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Container = styled.div`
  width: 100%;
  max-width: 80rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome, b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error)
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <Container>
        <Title>Usuários</Title>
        <Form />
        <Grid users={users}/>
      </Container>
    </>
  )
}

export default App
