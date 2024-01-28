import React, { useState, useEffect } from 'react';
import styles from './ListArt.module.css';
import EditArt from './EditArt';

const ArteList = () => {
  const [artes, setArtes] = useState([]);

  const [artToEdit, setArtToEdit] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7288/api/Arte', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setArtes(data);
        } else {
          console.error('Erro ao obter dados da API:', response.statusText);
        }
      } catch (error) {
        console.error('Erro na requisição:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleEditar = (arte) => {
    setArtToEdit(arte);
  };

  

  const handleFinishEditar = () => {
    setArtToEdit(undefined);
  };

  const handleDeletar = async (id) => {
    try {
      const response = await fetch(`https://localhost:7288/api/Arte/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Atualiza a lista de arte após a deleção bem-sucedida
        const updatedArtes = artes.filter((arte) => arte.id !== id);
        setArtes(updatedArtes);
        console.log(`Item com ID ${id} deletado com sucesso.`);
      } else {
        console.error('Erro ao deletar item:', response.statusText);
      }
    } catch (error) {
      console.error('Erro na requisição de deleção:', error.message);
    }
  };

  return (
    <div className={styles.table_container}>
      <h1>{artToEdit ? 'Editar arte' : 'Veja a lista de artes'}</h1><br/>
      {!artToEdit && 
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome do Quadro</th>
            <th>Nome do Pintor</th>
            <th>Ano do Quadro</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {artes.map((arte) => (
            <tr key={arte.id}>
              <td>{arte.id}</td>
              <td>{arte.nome_Quadro}</td>
              <td>{arte.nome_Pintor}</td>
              <td>{arte.ano_Quadro}</td>
              <td>{arte.valor}</td>
              <td>
                <button onClick={() => handleEditar(arte)}>Editar</button>
                <button onClick={() => handleDeletar(arte.id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> 
}
      {artToEdit && 
        <EditArt art={artToEdit} handleFinishEditar={handleFinishEditar}/>
}  
    </div>
  );
};

export default ArteList;
