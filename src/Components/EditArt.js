import React, { useState } from "react";
import style from './SaveArt.module.css'

function EditArt(props) {

    const [art, setArt] = useState(props.art);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setArt({
            ...art,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handleSubmit",art);

        try {
            const response = await fetch('https://localhost:7288/api/Arte?id='+art.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(art),
            });

            if (response.ok) {
            //todo voltar para a pag de listar e atualizar os dados
            } else {
                console.error('Erro ao adicionar arte:', response.statusText);
            }
        } catch (error) {
            console.error('Erro na requisição:', error.message);
            
        }
    };

  const handleVoltar = () => {
    props.handleFinishEditar();
  };


  return (
    <div>
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
          <button onClick={handleVoltar}>Voltar</button>
        </div>
      </form>
    </div>
  );
}

export default EditArt;
