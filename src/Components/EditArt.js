import React, { useState } from "react";
import style from './EditArt.module.css';

function EditArt(props) {
  const [art, setArt] = useState(props.art);
  const [mensagem, setMensagem] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArt({
      ...art,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:7288/api/Arte?id=' + art.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(art),
      });

      if (response.ok) {
        setMensagem('Edição realizada com sucesso!');
        // Limpar os campos do formulário
        setArt({
          nome_Quadro: "",
          nome_Pintor: "",
          ano_Quadro: "",
          valor: "",
        });
        
        // Chamar a função de atualização de dados passada como propriedade
        if (props.atualizarDados) {
          props.atualizarDados();
        }

        // todo: Navegar de volta para a página de listagem ou atualizar os dados
      } else {
        console.error('Erro ao editar arte:', response.statusText);
        setMensagem('Erro ao editar arte. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error.message);
      setMensagem('Erro na requisição. Por favor, tente novamente.');
    }
  };

  const handleVoltar = () => {
    props.handleFinishEditar();
  };

  return (
    <div className={style.form_control}>
      <form onSubmit={handleSubmit}>
        <label>
          *Nome do Quadro:
          <input
            type="text"
            name="nome_Quadro"
            value={art.nome_Quadro}
            onChange={handleInputChange}
            placeholder="Insira o nome do quadro.."
            required
          />
        </label>
        <br />
        <label>
          *Nome do Pintor:
          <input
            type="text"
            name="nome_Pintor"
            value={art.nome_Pintor}
            onChange={handleInputChange}
            placeholder="Insira o nome do pintor.."
            required
          />
        </label>
        <br />
        <label>
          *Ano do Quadro:
          <input
            type="text"
            name="ano_Quadro"
            value={art.ano_Quadro}
            onChange={handleInputChange}
            placeholder="DD-MM-AAAA"
            required
          />
        </label>
        <br />
        <label>
          *Valor:
          <input
            type="text"
            name="valor"
            value={art.valor}
            onChange={handleInputChange}
            placeholder="Insira o valor do quadro.."
            required
          />
        </label>
        <br />
        <div className={style.buttons}>
          <button
            type="submit"
            className={`${style.button} ${style.saveButton}`}
          >
            Salvar Edição
          </button>
          <button onClick={handleVoltar} className={style.backButton}>Voltar</button>
        </div>
      </form>
      {mensagem && <p className={style.mensagem}>{mensagem}</p>}
    </div>
  );
}

export default EditArt;
